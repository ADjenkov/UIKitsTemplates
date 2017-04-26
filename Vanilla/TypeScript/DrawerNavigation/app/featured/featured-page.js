"use strict";
var featured_view_model_1 = require("./featured-view-model");
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
    page.bindingContext = new featured_view_model_1.FeaturedViewModel();
}
exports.onNavigatingTo = onNavigatingTo;
function onOpenDrawerTap() {
    var sideDrawer = view.getViewById(page, "sideDrawer");
    sideDrawer.showDrawer();
}
exports.onOpenDrawerTap = onOpenDrawerTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWQtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZlYXR1cmVkLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLDZEQUEwRDtBQUcxRCxtQ0FBc0M7QUFFdEMsSUFBSSxJQUFJLENBQUM7QUFDVCx3RUFBd0U7QUFDeEUsd0JBQStCLElBQWU7SUFDMUM7Ozs7TUFJRTtJQUNGLElBQUksR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSx1Q0FBaUIsRUFBRSxDQUFDO0FBQ2xELENBQUM7QUFSRCx3Q0FRQztBQUVEO0lBQ0ksSUFBSSxVQUFVLEdBQWtCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3JFLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUM1QixDQUFDO0FBSEQsMENBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgRHJhd2VyUGFnZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvZHJhd2VycGFnZSc7XG5pbXBvcnQgeyBGZWF0dXJlZFZpZXdNb2RlbCB9IGZyb20gJy4vZmVhdHVyZWQtdmlldy1tb2RlbCc7XG5cbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyJztcbmltcG9ydCB2aWV3ID0gcmVxdWlyZShcInVpL2NvcmUvdmlld1wiKTtcblxudmFyIHBhZ2U7XG4vLyBFdmVudCBoYW5kbGVyIGZvciBQYWdlIFwibmF2aWdhdGluZ1RvXCIgZXZlbnQgYXR0YWNoZWQgaW4gdGFicy1wYWdlLnhtbFxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIC8qXG4gICAgVGhpcyBnZXRzIGEgcmVmZXJlbmNlIHRoaXMgcGFnZeKAmXMgPFN0YWNrTGF5b3V0PiBVSSBjb21wb25lbnQuIFlvdSBjYW5cbiAgICB2aWV3IHRoZSBBUEkgcmVmZXJlbmNlIG9mIHRoZSBQYWdlIHRvIHNlZSB3aGF04oCZcyBhdmFpbGFibGUgYXRcbiAgICBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hcGktcmVmZXJlbmNlL2NsYXNzZXMvX3VpX3BhZ2VfLnBhZ2UuaHRtbFxuICAgICovXG4gICAgcGFnZSA9IDxEcmF3ZXJQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgRmVhdHVyZWRWaWV3TW9kZWwoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uT3BlbkRyYXdlclRhcCgpIHtcbiAgICBsZXQgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPnZpZXcuZ2V0Vmlld0J5SWQocGFnZSwgXCJzaWRlRHJhd2VyXCIpO1xuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xufSJdfQ==