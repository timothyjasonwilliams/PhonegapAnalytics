/*
 * Copyright 2014 StreetHawk
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

/**
 * Javascript interface for Streethawk library.
 * Online document https://streethawk.freshdesk.com/solution/categories/5000158959/folders/5000254780
 */

var exec = require('cordova/exec');
var SHLibrary = function() {};

var streethawkTags = {
    'sh_email' 			:	'sh_email',             
	'sh_phone'			: 	'sh_phone',              
    'sh_gender'			: 	'sh_gender',             
    'sh_cuid'			:	'sh_cuid',            
    'sh_first_name' 	:	'sh_first_name',          
    'sh_last_name' 		:	'sh_last_name',          
    'sh_date_of_birth' 	:	'sh_date_of_birth',       
    'sh_utc_offset' 	:	'sh_utc_offset'
};

SHLibrary.prototype.streethawkinit = function(appSuccess, appFail) {
    console.log("streethawkinit");
    exec(appSuccess, appFail, 'Streethawk', 'streethawkinit', []);
    document.addEventListener("resume", function() {
        exec(appSuccess, appFail, 'Streethawk', 'shOnResume', []);
    }, false);
	document.addEventListener("pause",function() {
        exec(appSuccess, appFail, 'Streethawk', 'shOnPause', []);
    }, false);    
}
SHLibrary.prototype.setAppKey = function(string_AppKey, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'setAppKey', [string_AppKey]);
}
SHLibrary.prototype.tagNumeric = function(string_key, numeric_value, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'tagNumeric', [string_key, numeric_value]);
}
SHLibrary.prototype.tagCuid = function(string_cuid, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'tagCuid', [string_cuid]);
}
SHLibrary.prototype.tagString = function(string_key, string_value, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'tagString', [string_key, string_value]);
}
SHLibrary.prototype.tagDatetime = function(string_key, datetime_value, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'tagDatetime', [string_key, datetime_value]);
}
SHLibrary.prototype.incrementTag = function(string_key, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'incrementTag', [string_key]);
}
SHLibrary.prototype.removeTag = function(string_key, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'removeTag', [string_key]);
}
SHLibrary.prototype.setAdvertisementId = function(string_id, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'setAdvertisementId', [string_id]);
}
SHLibrary.prototype.notifyViewEnter = function(string_pageName, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'notifyViewEnter', [string_pageName]);
}
SHLibrary.prototype.notifyViewExit = function(string_pageName, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'notifyViewExit', [string_pageName]);
}
SHLibrary.prototype.getSHLibraryVersion = function(appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'getSHLibraryVersion', []);
}
SHLibrary.prototype.getInstallId = function(appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'getInstallId', []);
}
SHLibrary.prototype.getCurrentFormattedDateTime = function(appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'getCurrentFormattedDateTime', []);
}
SHLibrary.prototype.shGetAppKey = function(appSuccess, appFail) {
    exec(appSuccess, appFail,'Streethawk', 'shGetAppKey', []);
}
SHLibrary.prototype.shDeeplinking = function(appSuccess, appFail) {
    exec(appSuccess, appFail,'Streethawk', 'shDeeplinking', []);
}
SHLibrary.prototype.shSendSimpleFeedback = function(string_title, string_message, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'shSendSimpleFeedback', [string_title, string_message]);
}

// Push plugin

SHLibrary.prototype.shSetAlertSetting = function(int_pauseMinutes, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'shSetAlertSetting', [int_pauseMinutes]);
}
SHLibrary.prototype.shGetAlertSettings = function(appSuccess, appFail) {
    exec(appSuccess, appFail,'Streethawk', 'shAlertSettings', []);
}
SHLibrary.prototype.shSetGcmSenderId = function(string_senderKey, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'shSetGcmSenderId', [string_senderKey]);
}
SHLibrary.prototype.pushDataCallback = function(appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'registerPushDataCallback', []);
}
SHLibrary.prototype.pushResultCallback = function(appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'registerPushResultCallback', []);
}
SHLibrary.prototype.shRawJsonCallback = function(appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'shRawJsonCallback', []);
}
SHLibrary.prototype.shRegisterViewCallback = function(appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'shRegisterViewCallback', []);
}
SHLibrary.prototype.shGetViewName = function(appSuccess, appFail) {
   exec(appSuccess, appFail,'Streethawk', 'shGetViewName',[]);
}
SHLibrary.prototype.setUseCustomDialog = function(bool_enable, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'setUseCustomDialog', [bool_enable]);
}
SHLibrary.prototype.forcePushToNotificationBar = function(bool_status, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'forcePushToNotificationBar', [bool_status]);
}

// Growth plugin

SHLibrary.prototype.originateShareWithCampaign = function(string_utm_campaign, string_utm_source, string_utm_medium, string_utm_content, string_utm_term, string_shareUrl, string_default_url, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'getShareUrlForAppDownload', [string_utm_campaign, string_utm_source, string_utm_medium, string_utm_content, string_utm_term, string_shareUrl, string_default_url]);
}
SHLibrary.prototype.originateShareWithSourceSelection = function(string_ID,string_deepLinkUrl, string_default_url, appSuccess, appFail) {
	exec(appSuccess, appFail, 'Streethawk', 'originateShareWithCampaign', [string_ID,string_deepLinkUrl, string_default_url]);
}

// Beacon plugin
               
SHLibrary.prototype.shEnterBeacon = function(string_uuid, int_majorNo, int_minorNo, double_distance, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'shEnterBeacon', [string_uuid,int_majorNo,int_minorNo,double_distance]);
}
SHLibrary.prototype.shExitBeacon = function(string_uuid, int_majorNo, int_minorNo, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'shExitBeacon', [string_uuid,int_majorNo,int_minorNo]);
}

// Feed plugin

SHLibrary.prototype.notifyNewFeedCallback = function(appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'registerFeedItemCallback', []);
}
SHLibrary.prototype.reportFeedAck = function(int_feedid, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'shReportFeedAck', [int_feedid]);
}
SHLibrary.prototype.reportFeedRead = function(int_feedid, int_result, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'shReportFeedResult', [int_feedid, int_result]);
}
SHLibrary.prototype.shGetFeedDataFromServer = function(int_offset, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'shGetFeedDataFromServer', [int_offset]);
}

// Location plugin

SHLibrary.prototype.startLocationReporting = function(appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'shStartLocationReporting',[]);
}
SHLibrary.prototype.stopLocationReporting = function(appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'shStopLocationReporting',[]);
}
SHLibrary.prototype.reportWorkHomeLocationOnly = function(appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'shReportWorkHomeLocationOnly',[]);
}
SHLibrary.prototype.updateLocationMonitoringParams = function(int_interval_FG, int_distance_FG, int_interval_BG, int_distance_BG, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'shUpdateLocationMonitoringParams',[int_interval_FG,int_distance_FG,int_interval_BG,int_distance_BG]);
}
SHLibrary.prototype.startLocationWithPermissionDialog = function(string_msg,appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'shStartLocationWithPermissionDialog',[string_msg]);
}

// Geofence plugin

SHLibrary.prototype.startGeofenceMonitoring = function(appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'shStartGeofenceMonitoring',[]);
}
SHLibrary.prototype.stopGeofenceMonitoring = function(appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'shStopGeofenceMonitoring',[]);
}
SHLibrary.prototype.StartGeofenceWithPermissionDialog = function(string_msg,appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'shStartGeofenceWithPermissionDialog',[string_msg]);
}

// iOS specific
SHLibrary.prototype.shSetEnableLogs = function(bool_enable, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'shSetEnableLogs', [bool_enable]);
}
SHLibrary.prototype.shSetiTunesId = function(string_iTunesid, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'shSetiTunesId', [string_iTunesid]);
}
SHLibrary.prototype.shiTunesId = function(appSuccess, appFail) {
    exec(appSuccess,appFail,'Streethawk', 'shiTunesId', []);
}
SHLibrary.prototype.shSetDefaultNotificationService = function(bool_enable, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'shSetDefaultNotificationService', [bool_enable]);
}
SHLibrary.prototype.shSetNotificationEnabled = function(bool_enable, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'shSetNotificationEnabled', [bool_enable]);
}
SHLibrary.prototype.shGetNotificationEnabled = function(appSuccess, appFail) {
    exec(appSuccess, appFail,'Streethawk', 'shGetNotificationEnabled', []);
}
SHLibrary.prototype.shSetDefaultLocationService = function(bool_enable, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'shSetDefaultLocationService', [bool_enable]);
}
SHLibrary.prototype.shSetLocationEnabled = function(bool_enable, appSuccess, appFail) {
    exec(appSuccess, appFail, 'Streethawk', 'shSetLocationEnabled', [bool_enable]);
}
SHLibrary.prototype.shGetLocationEnabled = function(appSuccess, appFail) {
    exec(appSuccess, appFail,'Streethawk', 'shGetLocationEnabled', []);
}

var myplugin = new SHLibrary();
module.exports = myplugin;