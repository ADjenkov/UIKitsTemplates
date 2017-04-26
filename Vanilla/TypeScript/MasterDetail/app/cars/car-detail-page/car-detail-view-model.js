"use strict";
var observable_1 = require("data/observable");
var CarDetailViewModel = (function (_super) {
    __extends(CarDetailViewModel, _super);
    function CarDetailViewModel(car) {
        var _this = _super.call(this) || this;
        _this._car = car;
        return _this;
    }
    Object.defineProperty(CarDetailViewModel.prototype, "car", {
        get: function () {
            return this._car;
        },
        enumerable: true,
        configurable: true
    });
    return CarDetailViewModel;
}(observable_1.Observable));
exports.CarDetailViewModel = CarDetailViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLWRldGFpbC12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyLWRldGFpbC12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw4Q0FBNkM7QUFFN0M7SUFBd0Msc0NBQVU7SUFHOUMsNEJBQVksR0FBUTtRQUFwQixZQUNJLGlCQUFPLFNBR1Y7UUFERyxLQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQzs7SUFDcEIsQ0FBQztJQUVELHNCQUFJLG1DQUFHO2FBQVA7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQVpELENBQXdDLHVCQUFVLEdBWWpEO0FBWlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4uL3NoYXJlZC9jYXItbW9kZWxcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuXG5leHBvcnQgY2xhc3MgQ2FyRGV0YWlsVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBfY2FyOiBDYXI7XG5cbiAgICBjb25zdHJ1Y3RvcihjYXI6IENhcikge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2NhciA9IGNhcjtcbiAgICB9XG5cbiAgICBnZXQgY2FyKCk6IENhciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXI7XG4gICAgfVxufSJdfQ==