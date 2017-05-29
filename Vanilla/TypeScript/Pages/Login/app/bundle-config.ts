if ((<any>global).TNS_WEBPACK) {
    //registers tns-core-modules UI framework modules
    require("bundle-entry-points");

    //register application modules
    global.registerModule("login/login-page", () => require("./login/login-page"));
    global.registerModule("home/home-page", () => require("./home/home-page"));
}
