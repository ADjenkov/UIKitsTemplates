/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
"use strict";
var cars_view_model_1 = require("./cars-view-model");
var frameModule = require("ui/frame");
var carsViewModel = new cars_view_model_1.CarsViewModel();
function onCarItemTap(args) {
    var tappedCarItem = args.view.bindingContext;
    frameModule.topmost().navigate({
        moduleName: "cars/car-details-page/car-details-page",
        context: tappedCarItem
    });
}
exports.onCarItemTap = onCarItemTap;
// Event handler for Page "navigatingTo" event attached in main-page.xml
function onNavigatingTo(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    var page = args.object;
    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and TypeScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    page.bindingContext = carsViewModel;
    carsViewModel.empty();
    carsViewModel.load();
}
exports.onNavigatingTo = onNavigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycy1saXN0LXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJzLWxpc3QtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUlFOztBQVdGLHFEQUFrRDtBQUVsRCxzQ0FBeUM7QUFHekMsSUFBSSxhQUFhLEdBQUcsSUFBSSwrQkFBYSxFQUFFLENBQUM7QUFFeEMsc0JBQTZCLElBQUk7SUFDN0IsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFFN0MsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUMzQixVQUFVLEVBQUUsd0NBQXdDO1FBQ3BELE9BQU8sRUFBRSxhQUFhO0tBQ3pCLENBQUMsQ0FBQztBQUNQLENBQUM7QUFQRCxvQ0FPQztBQUVELHdFQUF3RTtBQUN4RSx3QkFBK0IsSUFBZTtJQUMxQzs7OztNQUlFO0lBQ0YsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUU3Qjs7Ozs7Ozs7O01BU0U7SUFFRixJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztJQUVwQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEIsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3pCLENBQUM7QUF2QkQsd0NBdUJDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkluIE5hdGl2ZVNjcmlwdCwgYSBmaWxlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBhbiBYTUwgZmlsZSBpcyBrbm93biBhc1xuYSBjb2RlLWJlaGluZCBmaWxlLiBUaGUgY29kZS1iZWhpbmQgaXMgYSBncmVhdCBwbGFjZSB0byBwbGFjZSB5b3VyIHZpZXdcbmxvZ2ljLCBhbmQgdG8gc2V0IHVwIHlvdXIgcGFnZeKAmXMgZGF0YSBiaW5kaW5nLlxuKi9cblxuLypcbk5hdGl2ZVNjcmlwdCBhZGhlcmVzIHRvIHRoZSBDb21tb25KUyBzcGVjaWZpY2F0aW9uIGZvciBkZWFsaW5nIHdpdGhcbkphdmFTY3JpcHQgbW9kdWxlcy4gVGhlIENvbW1vbkpTIHJlcXVpcmUoKSBmdW5jdGlvbiBpcyBob3cgeW91IGltcG9ydFxuSmF2YVNjcmlwdCBtb2R1bGVzIGRlZmluZWQgaW4gb3RoZXIgZmlsZXMuXG4qL1xuXG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi4vc2hhcmVkL21vZGVscy9jYXJcIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBDYXJzVmlld01vZGVsIH0gZnJvbSAnLi9jYXJzLXZpZXctbW9kZWwnO1xuXG5pbXBvcnQgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidWkvZnJhbWVcIik7XG5pbXBvcnQgb2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJkYXRhL29ic2VydmFibGVcIik7XG5cbnZhciBjYXJzVmlld01vZGVsID0gbmV3IENhcnNWaWV3TW9kZWwoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2FySXRlbVRhcChhcmdzKSB7XG4gICAgdmFyIHRhcHBlZENhckl0ZW0gPSBhcmdzLnZpZXcuYmluZGluZ0NvbnRleHQ7XG5cbiAgICBmcmFtZU1vZHVsZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICBtb2R1bGVOYW1lOiBcImNhcnMvY2FyLWRldGFpbHMtcGFnZS9jYXItZGV0YWlscy1wYWdlXCIsXG4gICAgICAgIGNvbnRleHQ6IHRhcHBlZENhckl0ZW1cbiAgICB9KTtcbn1cblxuLy8gRXZlbnQgaGFuZGxlciBmb3IgUGFnZSBcIm5hdmlnYXRpbmdUb1wiIGV2ZW50IGF0dGFjaGVkIGluIG1haW4tcGFnZS54bWxcbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICAvKlxuICAgIFRoaXMgZ2V0cyBhIHJlZmVyZW5jZSB0aGlzIHBhZ2XigJlzIDxQYWdlPiBVSSBjb21wb25lbnQuIFlvdSBjYW5cbiAgICB2aWV3IHRoZSBBUEkgcmVmZXJlbmNlIG9mIHRoZSBQYWdlIHRvIHNlZSB3aGF04oCZcyBhdmFpbGFibGUgYXRcbiAgICBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hcGktcmVmZXJlbmNlL2NsYXNzZXMvX3VpX3BhZ2VfLnBhZ2UuaHRtbFxuICAgICovXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcblxuICAgIC8qXG4gICAgQSBwYWdl4oCZcyBiaW5kaW5nQ29udGV4dCBpcyBhbiBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBwZXJmb3JtXG4gICAgZGF0YSBiaW5kaW5nIGJldHdlZW4gWE1MIG1hcmt1cCBhbmQgVHlwZVNjcmlwdCBjb2RlLiBQcm9wZXJ0aWVzXG4gICAgb24gdGhlIGJpbmRpbmdDb250ZXh0IGNhbiBiZSBhY2Nlc3NlZCB1c2luZyB0aGUge3sgfX0gc3ludGF4IGluIFhNTC5cbiAgICBJbiB0aGlzIGV4YW1wbGUsIHRoZSB7eyBtZXNzYWdlIH19IGFuZCB7eyBvblRhcCB9fSBiaW5kaW5ncyBhcmUgcmVzb2x2ZWRcbiAgICBhZ2FpbnN0IHRoZSBvYmplY3QgcmV0dXJuZWQgYnkgY3JlYXRlVmlld01vZGVsKCkuXG5cbiAgICBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgZGF0YSBiaW5kaW5nIGluIE5hdGl2ZVNjcmlwdCBhdFxuICAgIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2NvcmUtY29uY2VwdHMvZGF0YS1iaW5kaW5nLlxuICAgICovXG5cbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gY2Fyc1ZpZXdNb2RlbDtcblxuICAgIGNhcnNWaWV3TW9kZWwuZW1wdHkoKTtcbiAgICBjYXJzVmlld01vZGVsLmxvYWQoKTtcbn0iXX0=