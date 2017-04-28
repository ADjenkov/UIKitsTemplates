if (global.TNS_WEBPACK) {
    //registers tns-core-modules UI framework modules
    require("bundle-entry-points");

    //register application modules
    global.registerModule("tabs-page", function () { return require("./tabs-page"); });
    global.registerModule("browse-component/Browse", function () { return require("./browse-component/Browse"); });
    global.registerModule("featured-component/Featured", function () { return require("./featured-component/Featured"); });
    global.registerModule("home-component/Home", function () { return require("./home-component/Home"); });
    global.registerModule("search-component/Search", function () { return require("./search-component/Search"); });
}
