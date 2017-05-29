if (global.TNS_WEBPACK) {
    //registers tns-core-modules UI framework modules
    require("bundle-entry-points");

    //register application modules
    global.registerModule("tabs-page", function () { return require("./tabs-page"); });
    global.registerModule("browse/Browse", function () { return require("./browse/BrowseView"); });
    global.registerModule("featured/Featured", function () { return require("./featured/FeaturedView"); });
    global.registerModule("home/Home", function () { return require("./home/HomeView"); });
    global.registerModule("search/Search", function () { return require("./search/SearchView"); });
}
