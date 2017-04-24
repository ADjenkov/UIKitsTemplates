
var BrowseViewModel = require("./browse-view-model");

var browse = new BrowseViewModel();

exports.loaded = function (args) {
    args.object.bindingContext = browse;
};