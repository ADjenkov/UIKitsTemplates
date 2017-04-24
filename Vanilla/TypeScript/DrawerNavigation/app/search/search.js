"use strict";
var search_view_model_1 = require("./search-view-model");
var view = require("ui/core/view");
var page;
// Event handler for Page "navigatingTo" event attached in tabs-page.xml
function onNavigatingTo(args) {
    /*
    This gets a reference this page’s <StackLayout> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    page = args.object;
    page.bindingContext = new search_view_model_1.SearchViewModel();
}
exports.onNavigatingTo = onNavigatingTo;
function onOpenDrawerTap() {
    var sideDrawer = view.getViewById(page, "sideDrawer");
    sideDrawer.showDrawer();
}
exports.onOpenDrawerTap = onOpenDrawerTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSx5REFBc0Q7QUFHdEQsbUNBQXNDO0FBRXRDLElBQUksSUFBSSxDQUFDO0FBQ1Qsd0VBQXdFO0FBQ3hFLHdCQUErQixJQUFlO0lBQzFDOzs7O01BSUU7SUFDRixJQUFJLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksbUNBQWUsRUFBRSxDQUFDO0FBQ2hELENBQUM7QUFSRCx3Q0FRQztBQUVEO0lBQ0ksSUFBSSxVQUFVLEdBQWtCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3JFLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUM1QixDQUFDO0FBSEQsMENBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgRHJhd2VyUGFnZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvZHJhd2VycGFnZSc7XG5pbXBvcnQgeyBTZWFyY2hWaWV3TW9kZWwgfSBmcm9tICcuL3NlYXJjaC12aWV3LW1vZGVsJztcblxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXInO1xuaW1wb3J0IHZpZXcgPSByZXF1aXJlKFwidWkvY29yZS92aWV3XCIpO1xuXG52YXIgcGFnZTtcbi8vIEV2ZW50IGhhbmRsZXIgZm9yIFBhZ2UgXCJuYXZpZ2F0aW5nVG9cIiBldmVudCBhdHRhY2hlZCBpbiB0YWJzLXBhZ2UueG1sXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogRXZlbnREYXRhKSB7XG4gICAgLypcbiAgICBUaGlzIGdldHMgYSByZWZlcmVuY2UgdGhpcyBwYWdl4oCZcyA8U3RhY2tMYXlvdXQ+IFVJIGNvbXBvbmVudC4gWW91IGNhblxuICAgIHZpZXcgdGhlIEFQSSByZWZlcmVuY2Ugb2YgdGhlIFBhZ2UgdG8gc2VlIHdoYXTigJlzIGF2YWlsYWJsZSBhdFxuICAgIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FwaS1yZWZlcmVuY2UvY2xhc3Nlcy9fdWlfcGFnZV8ucGFnZS5odG1sXG4gICAgKi9cbiAgICBwYWdlID0gPERyYXdlclBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBTZWFyY2hWaWV3TW9kZWwoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uT3BlbkRyYXdlclRhcCgpIHtcbiAgICBsZXQgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPnZpZXcuZ2V0Vmlld0J5SWQocGFnZSwgXCJzaWRlRHJhd2VyXCIpO1xuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xufSJdfQ==