var FeaturedViewModel = require("./featured-view-model");
var featuredViewModel = new FeaturedViewModel();

exports.loaded = function (args) {
    args.object.bindingContext = featuredViewModel;
};