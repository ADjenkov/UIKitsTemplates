"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var DrawerComponent = (function () {
    function DrawerComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.items = [
            {
                title: "Home",
                route: "/home"
            },
            {
                title: "Browse",
                route: "/browse"
            },
            {
                title: "Search",
                route: "/search"
            },
            {
                title: "Featured",
                route: "/featured"
            },
            {
                title: "Settings",
                route: "/settings"
            }
        ];
    }
    DrawerComponent.prototype.ngOnInit = function () {
    };
    DrawerComponent.prototype.navigateToRoute = function (route) {
        this.routerExtensions.navigate([route]);
    };
    return DrawerComponent;
}());
DrawerComponent = __decorate([
    core_1.Component({
        selector: "MyDrawer",
        moduleId: module.id,
        templateUrl: "./drawer.component.html",
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], DrawerComponent);
exports.DrawerComponent = DrawerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFPL0QsSUFBYSxlQUFlO0lBd0J4Qix5QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUF2QnRELFVBQUssR0FBUTtZQUNUO2dCQUNJLEtBQUssRUFBRSxNQUFNO2dCQUNiLEtBQUssRUFBRSxPQUFPO2FBQ2pCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsS0FBSyxFQUFFLFNBQVM7YUFDbkI7WUFDRDtnQkFDSSxLQUFLLEVBQUUsUUFBUTtnQkFDZixLQUFLLEVBQUUsU0FBUzthQUNuQjtZQUNEO2dCQUNJLEtBQUssRUFBRSxVQUFVO2dCQUNqQixLQUFLLEVBQUUsV0FBVzthQUNyQjtZQUNEO2dCQUNJLEtBQUssRUFBRSxVQUFVO2dCQUNqQixLQUFLLEVBQUUsV0FBVzthQUNyQjtTQUNKLENBQUE7SUFJRCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCx5Q0FBZSxHQUFmLFVBQWdCLEtBQVk7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQW5DRCxJQW1DQztBQW5DWSxlQUFlO0lBTDNCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtLQUN6QyxDQUFDO3FDQXlCd0MseUJBQWdCO0dBeEI3QyxlQUFlLENBbUMzQjtBQW5DWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIk15RHJhd2VyXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2RyYXdlci5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBEcmF3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW1zOiBhbnkgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkhvbWVcIixcbiAgICAgICAgICAgIHJvdXRlOiBcIi9ob21lXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiQnJvd3NlXCIsXG4gICAgICAgICAgICByb3V0ZTogXCIvYnJvd3NlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiU2VhcmNoXCIsXG4gICAgICAgICAgICByb3V0ZTogXCIvc2VhcmNoXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiRmVhdHVyZWRcIixcbiAgICAgICAgICAgIHJvdXRlOiBcIi9mZWF0dXJlZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlNldHRpbmdzXCIsXG4gICAgICAgICAgICByb3V0ZTogXCIvc2V0dGluZ3NcIlxuICAgICAgICB9XG4gICAgXVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIH1cblxuICAgIG5hdmlnYXRlVG9Sb3V0ZShyb3V0ZTpzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtyb3V0ZV0pO1xuICAgIH1cbn1cbiJdfQ==