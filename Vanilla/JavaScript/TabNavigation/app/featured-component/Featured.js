
var FeaturedViewModel = require("./featured-view-model");

var featured = new FeaturedViewModel();

exports.loaded = function (args) {
    args.object.bindingContext = featured;
};