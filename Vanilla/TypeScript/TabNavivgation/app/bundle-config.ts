if ((<any>global).TNS_WEBPACK) {
    //registers tns-core-modules UI framework modules
    require("bundle-entry-points");

    //register application modules
    global.registerModule("tabs-page", () => require("./tabs-page"));
    global.registerModule("browse/Browse", () => require("./browse/BrowseView"));
    global.registerModule("featured/Featured", () => require("./featured/FeaturedView"));
    global.registerModule("home/Home", () => require("./home/HomeView"));
    global.registerModule("search/Search", () => require("./search/SearchView"));
}
