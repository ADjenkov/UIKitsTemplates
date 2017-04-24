
var HomeViewModel = require("./home-view-model");

var home = new HomeViewModel();

exports.loaded = function (args) {
    args.object.bindingContext = home;
};