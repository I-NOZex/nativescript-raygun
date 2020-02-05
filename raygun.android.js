var _ = require("lodash");
var utils = require("utils/utils");

var raygun = {}
 
var RaygunClient = com.raygun.raygun4android.RaygunClient;
var RaygunUserInfo = com.raygun.raygun4android.messages.shared.RaygunUserInfo;

raygun.start = function(key) {
  RaygunClient.init(utils.ad.getApplicationContext(), key);
  RaygunClient.enableCrashReporting(true); // param => bool attachDefaultHandler
};

raygun.identify = function(val) {
  if (_.isObject(val)) {
    var user = new RaygunUserInfo();
    user.Identifier = val.identifier;
    user.FullName = val.fullName;
    user.FirstName = val.firstName;
    user.IsAnonymous = val.isAnonymous ? true : false;
    RaygunClient.setUser(user);
  } else {
    throw new Error("Parameter needs to be an object of user details, see the docs");
  }

};

module.exports = raygun;
