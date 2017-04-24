
var SearchViewModel = require("./search-view-model");

var search = new SearchViewModel();

exports.loaded = function (args) {
    args.object.bindingContext = search;
};