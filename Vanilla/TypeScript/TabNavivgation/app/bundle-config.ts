if ((<any>global).TNS_WEBPACK) {
    //registers tns-core-modules UI framework modules
    require("bundle-entry-points");

    //register application modules
    global.registerModule("tabs-page", () => require("./tabs-page"));
    global.registerModule("browse-component/Browse", () => require("./browse-component/Browse"));
    global.registerModule("featured-component/Featured", () => require("./featured-component/Featured"));
    global.registerModule("home-component/Home", () => require("./home-component/Home"));
    global.registerModule("search-component/Search", () => require("./search-component/Search"));
}
