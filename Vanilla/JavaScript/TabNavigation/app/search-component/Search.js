var SearchViewModel = require("./search-view-model");
var searchViewModel = new SearchViewModel();

exports.loaded = function (args) {
    args.object.bindingContext = searchViewModel;
};