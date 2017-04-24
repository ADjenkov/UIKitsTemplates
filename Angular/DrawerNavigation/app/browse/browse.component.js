"use strict";
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var BrowseComponent = (function () {
    function BrowseComponent() {
    }
    BrowseComponent.prototype.ngOnInit = function () {
    };
    BrowseComponent.prototype.openDrawer = function () {
        this.drawerComponent.sideDrawer.toggleDrawerState();
    };
    return BrowseComponent;
}());
__decorate([
    core_1.ViewChild("drawer"),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], BrowseComponent.prototype, "drawerComponent", void 0);
BrowseComponent = __decorate([
    core_1.Component({
        selector: "ns-browse",
        moduleId: module.id,
        templateUrl: "./browse.component.html",
    }),
    __metadata("design:paramtypes", [])
], BrowseComponent);
exports.BrowseComponent = BrowseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJyb3dzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUE2RDtBQUM3RCxzRUFBb0Y7QUFPcEYsSUFBYSxlQUFlO0lBR3hCO0lBRUEsQ0FBQztJQUVELGtDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDeEQsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFid0I7SUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7OEJBQXlCLGdDQUFzQjt3REFBQztBQUQzRCxlQUFlO0lBTDNCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtLQUN6QyxDQUFDOztHQUNXLGVBQWUsQ0FjM0I7QUFkWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYnJvd3NlXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2Jyb3dzZS5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBCcm93c2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBvcGVuRHJhd2VyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gICAgfVxufVxuIl19