"use strict";
var frameModule = require("ui/frame");
var model = {
    items: [
        {
            title: "Home",
            route: "home/home"
        },
        {
            title: "Browse",
            route: "browse/browse"
        },
        {
            title: "Search",
            route: "search/search"
        },
        {
            title: "Featured",
            route: "featured/featured"
        },
        {
            title: "Settings",
            route: "settings/settings"
        }
    ]
};
// Event handler for Page "navigatingTo" event attached in tabs-page.xml
function onLoaded(args) {
    /*
    This gets a reference this page’s <StackLayout> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    var page = args.object;
    page.bindingContext = model;
}
exports.onLoaded = onLoaded;
function onNavigateToRoute(args) {
    var tappedModelItem = model.items[args.index];
    frameModule.topmost().navigate(tappedModelItem.route);
}
exports.onNavigateToRoute = onNavigateToRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlEcmF3ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNeURyYXdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0Esc0NBQXlDO0FBRXpDLElBQUksS0FBSyxHQUFHO0lBQ1IsS0FBSyxFQUFFO1FBQ0g7WUFDSSxLQUFLLEVBQUUsTUFBTTtZQUNiLEtBQUssRUFBRSxXQUFXO1NBQ3JCO1FBQ0Q7WUFDSSxLQUFLLEVBQUUsUUFBUTtZQUNmLEtBQUssRUFBRSxlQUFlO1NBQ3pCO1FBQ0Q7WUFDSSxLQUFLLEVBQUUsUUFBUTtZQUNmLEtBQUssRUFBRSxlQUFlO1NBQ3pCO1FBQ0Q7WUFDSSxLQUFLLEVBQUUsVUFBVTtZQUNqQixLQUFLLEVBQUUsbUJBQW1CO1NBQzdCO1FBQ0Q7WUFDSSxLQUFLLEVBQUUsVUFBVTtZQUNqQixLQUFLLEVBQUUsbUJBQW1CO1NBQzdCO0tBQ0o7Q0FDSixDQUFDO0FBRUYsd0VBQXdFO0FBQ3hFLGtCQUF5QixJQUFlO0lBQ3BDOzs7O01BSUU7SUFDRixJQUFJLElBQUksR0FBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztBQUNoQyxDQUFDO0FBUkQsNEJBUUM7QUFFRCwyQkFBa0MsSUFBSTtJQUNsQyxJQUFJLGVBQWUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBSEQsOENBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcclxuXHJcbmltcG9ydCBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9mcmFtZVwiKTtcclxuXHJcbmxldCBtb2RlbCA9IHtcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJIb21lXCIsXHJcbiAgICAgICAgICAgIHJvdXRlOiBcImhvbWUvaG9tZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkJyb3dzZVwiLFxyXG4gICAgICAgICAgICByb3V0ZTogXCJicm93c2UvYnJvd3NlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiU2VhcmNoXCIsXHJcbiAgICAgICAgICAgIHJvdXRlOiBcInNlYXJjaC9zZWFyY2hcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJGZWF0dXJlZFwiLFxyXG4gICAgICAgICAgICByb3V0ZTogXCJmZWF0dXJlZC9mZWF0dXJlZFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlNldHRpbmdzXCIsXHJcbiAgICAgICAgICAgIHJvdXRlOiBcInNldHRpbmdzL3NldHRpbmdzXCJcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn07XHJcblxyXG4vLyBFdmVudCBoYW5kbGVyIGZvciBQYWdlIFwibmF2aWdhdGluZ1RvXCIgZXZlbnQgYXR0YWNoZWQgaW4gdGFicy1wYWdlLnhtbFxyXG5leHBvcnQgZnVuY3Rpb24gb25Mb2FkZWQoYXJnczogRXZlbnREYXRhKSB7XHJcbiAgICAvKlxyXG4gICAgVGhpcyBnZXRzIGEgcmVmZXJlbmNlIHRoaXMgcGFnZeKAmXMgPFN0YWNrTGF5b3V0PiBVSSBjb21wb25lbnQuIFlvdSBjYW5cclxuICAgIHZpZXcgdGhlIEFQSSByZWZlcmVuY2Ugb2YgdGhlIFBhZ2UgdG8gc2VlIHdoYXTigJlzIGF2YWlsYWJsZSBhdFxyXG4gICAgaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYXBpLXJlZmVyZW5jZS9jbGFzc2VzL191aV9wYWdlXy5wYWdlLmh0bWxcclxuICAgICovXHJcbiAgICBsZXQgcGFnZSA9IDxTdGFja0xheW91dD5hcmdzLm9iamVjdDtcclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBtb2RlbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVUb1JvdXRlKGFyZ3MpIHtcclxuICAgIGxldCB0YXBwZWRNb2RlbEl0ZW0gPSBtb2RlbC5pdGVtc1thcmdzLmluZGV4XTtcclxuICAgIGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5uYXZpZ2F0ZSh0YXBwZWRNb2RlbEl0ZW0ucm91dGUpO1xyXG59Il19