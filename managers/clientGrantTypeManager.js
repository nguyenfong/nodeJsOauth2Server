/*     
 Copyright (C) 2016 Ulbora Labs LLC. (www.ulboralabs.com)
 All rights reserved.
 
 Copyright (C) 2016 Ken Williamson
 All rights reserved.
 
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License as published
 by the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.
 
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.
 
 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var manager = require("./manager");

var db;

exports.init = function (database) {
    db = database;
};


exports.addClientGrantType = function (json, callback) {
    var returnVal = {
        success: false
    };
    var isOk = manager.securityCheck(json);
    if (isOk) {
        db.addClientGrantType(json, callback);
    } else {
        callback(returnVal);
    }
};

exports.getClientGrantTypeList = function (clientId, callback) {
    var isOk = manager.securityCheck(clientId);
    if (isOk) {
        db.getClientGrantTypeList(clientId, callback);
    } else {
        callback({});
    }
};

exports.deleteClientGrantType = function (id, callback) {
    var returnVal = {
        success: false
    };
    var isOk = manager.securityCheck(id);
    if (isOk) {
        db.deleteClientGrantType(id, callback);
    } else {
        callback(returnVal);
    }
};