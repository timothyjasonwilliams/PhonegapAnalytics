
var fs = require("fs");
var path = require("path");

var COMMENT_KEY = /_comment$/;
function nonComments(obj) {
	var newObj = {};
	Object.keys(obj).forEach(function(key) {
		if (!COMMENT_KEY.test(key)) {
			newObj[key] = obj[key];
		}
	});
	return newObj;
}

module.exports = function(ctx) {

	var q = ctx.requireCordovaModule("q");
	var deferred = q.defer();

	var cordovaConfigPath = path.join(ctx.opts.projectRoot, "config.xml");
	fs.readFile(cordovaConfigPath, {encoding: "utf-8"}, function(errConfigRead, configContent) {
		if (errConfigRead) {
			return deferred.reject(errConfigRead);
		}
		var projectName = /<name[^>]*>([\s\S]*)<\/name>/mi.exec(configContent)[1].trim();
		var xcodeProjectName = [projectName, ".xcodeproj"].join("");
		var xcodeProjectPath = path.join(ctx.opts.projectRoot, "platforms", "ios", xcodeProjectName, "project.pbxproj");
		var xcode = ctx.requireCordovaModule("xcode");
		var xcodeProject = xcode.project(xcodeProjectPath);
		xcodeProject.parse(function(parseError) {
			if (parseError) {
				return deferred.reject(parseError);
			}

			var configurations = nonComments(xcodeProject.pbxXCBuildConfigurationSection());

			Object.keys(configurations).forEach(function(config) {
				var buildSettings = configurations[config].buildSettings;
				
				//If it contains assert flag, remove them.
				if (Array.isArray(buildSettings['OTHER_CFLAGS'])) {
					var index1 = buildSettings['OTHER_CFLAGS'].indexOf('"-DNS_BLOCK_ASSERTIONS=1"');
            		if (index1 > -1) {
            			buildSettings['OTHER_CFLAGS'].splice(index1, 1);
            		}
            		var index2 = buildSettings['OTHER_CFLAGS'].indexOf('"-DNDEBUG"');
            		if (index2 > -1) {
            			buildSettings['OTHER_CFLAGS'].splice(index2, 1);
            		}
            		var index3 = buildSettings['OTHER_CFLAGS'].indexOf('-DNS_BLOCK_ASSERTIONS=1');
            		if (index3 > -1) {
            			buildSettings['OTHER_CFLAGS'].splice(index3, 1);
            		}
            		var index4 = buildSettings['OTHER_CFLAGS'].indexOf('-DNDEBUG');
            		if (index4 > -1) {
            			buildSettings['OTHER_CFLAGS'].splice(index4, 1);
            		}
        		}
			});

			fs.writeFile(xcodeProjectPath, /*eslint-disable no-sync*/xcodeProject.writeSync()/*eslint-enable*/, {encoding: "utf-8"}, function(projectWriteError) {
				if (projectWriteError) {
					return deferred.reject(projectWriteError);
				}
				deferred.resolve();
			});
		});
	});
	return deferred.promise;
};
