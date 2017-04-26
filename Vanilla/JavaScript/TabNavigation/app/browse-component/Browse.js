var BrowseViewModel = require("./browse-view-model");
var browseViewModel = new BrowseViewModel();

exports.loaded = function (args) {
    args.object.bindingContext = browseViewModel;
};