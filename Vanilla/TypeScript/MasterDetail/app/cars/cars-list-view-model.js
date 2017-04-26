"use strict";
var car_model_1 = require("./shared/car-model");
var config_1 = require("../shared/config");
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
                _this._cars.push(new car_model_1.Car(carJson));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycy1saXN0LXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJzLWxpc3Qtdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0RBQXlDO0FBQ3pDLDJDQUEwQztBQUMxQyw4Q0FBNkM7QUFDN0MsMERBQXdEO0FBRXhEO0lBQW1DLGlDQUFVO0lBSXpDO1FBQUEsWUFDSSxpQkFBTyxTQUtWO1FBSEcsNkJBQTZCO1FBQzdCLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxrQ0FBZSxDQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDOztJQUM1QixDQUFDO0lBRUQsc0JBQUksK0JBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksb0NBQVM7YUFBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFFRCxVQUFjLEtBQWM7WUFDeEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQTtZQUNqRCxDQUFDO1FBQ0wsQ0FBQzs7O09BUEE7SUFTRCw0QkFBSSxHQUFKO1FBQUEsaUJBZUM7UUFkRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QixLQUFLLENBQUMsZUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7YUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDdkIsSUFBSSxDQUFDLFVBQUMsUUFBYTtZQUNoQixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87Z0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLGVBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1lBRUgsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBRU8sb0NBQVksR0FBcEIsVUFBcUIsUUFBUTtRQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUF6REQsQ0FBbUMsdUJBQVUsR0F5RDVDO0FBekRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4vc2hhcmVkL2Nhci1tb2RlbFwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL3NoYXJlZC9jb25maWdcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcblxuZXhwb3J0IGNsYXNzIENhcnNWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBwcml2YXRlIF9pc0xvYWRpbmc6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfY2FyczogT2JzZXJ2YWJsZUFycmF5PENhcj47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIGRlZmF1bHQgdmFsdWVzLlxuICAgICAgICB0aGlzLl9jYXJzID0gbmV3IE9ic2VydmFibGVBcnJheTxDYXI+KFtdKTtcbiAgICAgICAgdGhpcy5faXNMb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IGNhcnMoKTogT2JzZXJ2YWJsZUFycmF5PENhcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FycztcbiAgICB9XG5cbiAgICBnZXQgaXNMb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNMb2FkaW5nO1xuICAgIH1cblxuICAgIHNldCBpc0xvYWRpbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzTG9hZGluZyAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzTG9hZGluZyA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnaXNMb2FkaW5nJywgdmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgZmV0Y2goQ29uZmlnLmFwaVVybCArIFwiQ2Fyc1wiKVxuICAgICAgICAgICAgLnRoZW4odGhpcy5oYW5kbGVFcnJvcnMpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgZGF0YS5SZXN1bHQuZm9yRWFjaCgoY2FySnNvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjYXJKc29uLk5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYXJzLnB1c2gobmV3IENhcihjYXJKc29uKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZW1wdHkoKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLl9jYXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fY2Fycy5wb3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3JzKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxufSJdfQ==