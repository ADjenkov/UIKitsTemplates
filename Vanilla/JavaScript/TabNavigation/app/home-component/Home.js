var HomeViewModel = require("./home-view-model");
var homeViewModel = new HomeViewModel();

exports.loaded = function (args) {
    args.object.bindingContext = homeViewModel;
};