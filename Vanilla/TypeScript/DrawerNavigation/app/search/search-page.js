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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2gtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEseURBQXNEO0FBR3RELG1DQUFzQztBQUV0QyxJQUFJLElBQUksQ0FBQztBQUNULHdFQUF3RTtBQUN4RSx3QkFBK0IsSUFBZTtJQUMxQzs7OztNQUlFO0lBQ0YsSUFBSSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLG1DQUFlLEVBQUUsQ0FBQztBQUNoRCxDQUFDO0FBUkQsd0NBUUM7QUFFRDtJQUNJLElBQUksVUFBVSxHQUFrQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNyRSxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDNUIsQ0FBQztBQUhELDBDQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IERyYXdlclBhZ2UgfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2RyYXdlcnBhZ2UnO1xuaW1wb3J0IHsgU2VhcmNoVmlld01vZGVsIH0gZnJvbSAnLi9zZWFyY2gtdmlldy1tb2RlbCc7XG5cbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyJztcbmltcG9ydCB2aWV3ID0gcmVxdWlyZShcInVpL2NvcmUvdmlld1wiKTtcblxudmFyIHBhZ2U7XG4vLyBFdmVudCBoYW5kbGVyIGZvciBQYWdlIFwibmF2aWdhdGluZ1RvXCIgZXZlbnQgYXR0YWNoZWQgaW4gdGFicy1wYWdlLnhtbFxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIC8qXG4gICAgVGhpcyBnZXRzIGEgcmVmZXJlbmNlIHRoaXMgcGFnZeKAmXMgPFN0YWNrTGF5b3V0PiBVSSBjb21wb25lbnQuIFlvdSBjYW5cbiAgICB2aWV3IHRoZSBBUEkgcmVmZXJlbmNlIG9mIHRoZSBQYWdlIHRvIHNlZSB3aGF04oCZcyBhdmFpbGFibGUgYXRcbiAgICBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hcGktcmVmZXJlbmNlL2NsYXNzZXMvX3VpX3BhZ2VfLnBhZ2UuaHRtbFxuICAgICovXG4gICAgcGFnZSA9IDxEcmF3ZXJQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgU2VhcmNoVmlld01vZGVsKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk9wZW5EcmF3ZXJUYXAoKSB7XG4gICAgbGV0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj52aWV3LmdldFZpZXdCeUlkKHBhZ2UsIFwic2lkZURyYXdlclwiKTtcbiAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbn0iXX0=