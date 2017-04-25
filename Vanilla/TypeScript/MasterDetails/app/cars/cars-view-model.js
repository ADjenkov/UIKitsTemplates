"use strict";
var car_1 = require("./shared/models/car");
var config_1 = require("./shared/config");
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array");
var CarsViewModel = (function (_super) {
    __extends(CarsViewModel, _super);
    function CarsViewModel() {
        var _this = _super.call(this) || this;
        // Initialize default values.
        _this._cars = new observable_array_1.ObservableArray([]);
        _this._isLoading = false;
        return _this;
    }
    Object.defineProperty(CarsViewModel.prototype, "cars", {
        get: function () {
            return this._cars;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarsViewModel.prototype, "isLoading", {
        get: function () {
            return this._isLoading;
        },
        set: function (value) {
            if (this._isLoading !== value) {
                this._isLoading = value;
                this.notifyPropertyChange('isLoading', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    CarsViewModel.prototype.load = function () {
        var _this = this;
        this.isLoading = true;
        fetch(config_1.Config.apiUrl + "Cars")
            .then(this.handleErrors)
            .then(function (response) {
            return response.json();
        }).then(function (data) {
            data.Result.forEach(function (carJson) {
                console.log(carJson.Name);
                _this._cars.push(new car_1.Car(carJson));
            });
            _this.isLoading = false;
        });
    };
    CarsViewModel.prototype.empty = function () {
        while (this._cars.length) {
            this._cars.pop();
        }
    };
    CarsViewModel.prototype.handleErrors = function (response) {
        if (!response.ok) {
            console.log(JSON.stringify(response));
            throw Error(response.statusText);
        }
        return response;
    };
    return CarsViewModel;
}(observable_1.Observable));
exports.CarsViewModel = CarsViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycy12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2Fycy12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwyQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLDhDQUE2QztBQUM3QywwREFBd0Q7QUFFeEQ7SUFBbUMsaUNBQVU7SUFJekM7UUFBQSxZQUNJLGlCQUFPLFNBS1Y7UUFIRyw2QkFBNkI7UUFDN0IsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGtDQUFlLENBQU0sRUFBRSxDQUFDLENBQUM7UUFDMUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7O0lBQzVCLENBQUM7SUFFRCxzQkFBSSwrQkFBSTthQUFSO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvQ0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQUVELFVBQWMsS0FBYztZQUN4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQ2pELENBQUM7UUFDTCxDQUFDOzs7T0FQQTtJQVNELDRCQUFJLEdBQUo7UUFBQSxpQkFlQztRQWRHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLEtBQUssQ0FBQyxlQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzthQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUN2QixJQUFJLENBQUMsVUFBQyxRQUFhO1lBQ2hCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNULElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztnQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksU0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDckIsQ0FBQztJQUNMLENBQUM7SUFFTyxvQ0FBWSxHQUFwQixVQUFxQixRQUFRO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN0QyxNQUFNLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUNELE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQXpERCxDQUFtQyx1QkFBVSxHQXlENUM7QUF6RFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi9zaGFyZWQvbW9kZWxzL2NhclwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4vc2hhcmVkL2NvbmZpZ1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICdkYXRhL29ic2VydmFibGUtYXJyYXknO1xuXG5leHBvcnQgY2xhc3MgQ2Fyc1ZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX2lzTG9hZGluZzogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9jYXJzOiBPYnNlcnZhYmxlQXJyYXk8Q2FyPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgZGVmYXVsdCB2YWx1ZXMuXG4gICAgICAgIHRoaXMuX2NhcnMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PENhcj4oW10pO1xuICAgICAgICB0aGlzLl9pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgY2FycygpOiBPYnNlcnZhYmxlQXJyYXk8Q2FyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXJzO1xuICAgIH1cblxuICAgIGdldCBpc0xvYWRpbmcoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0xvYWRpbmc7XG4gICAgfVxuXG4gICAgc2V0IGlzTG9hZGluZyh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5faXNMb2FkaW5nICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5faXNMb2FkaW5nID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdpc0xvYWRpbmcnLCB2YWx1ZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICBmZXRjaChDb25maWcuYXBpVXJsICsgXCJDYXJzXCIpXG4gICAgICAgICAgICAudGhlbih0aGlzLmhhbmRsZUVycm9ycylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBkYXRhLlJlc3VsdC5mb3JFYWNoKChjYXJKc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhckpzb24uTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhcnMucHVzaChuZXcgQ2FyKGNhckpzb24pKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBlbXB0eSgpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMuX2NhcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9jYXJzLnBvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcnMocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcbiAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG59Il19