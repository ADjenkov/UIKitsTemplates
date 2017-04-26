if (global.TNS_WEBPACK) {
    //registers tns-core-modules UI framework modules
    require("bundle-entry-points");

    //register application modules
    global.registerModule("cars-list-page", function () { return require("./cars/cars-list-page"); });
}
