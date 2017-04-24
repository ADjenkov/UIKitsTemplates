var config = require("../shared/config");
var fetchModule = require("fetch");
var Observable = require("data/observable").Observable;

function CarsViewModel() {
    var viewModel = new Observable();

    viewModel.isLoading = false;
    viewModel.cars = [];

    viewModel.load = function () {
        this.set("isLoading", true);

        fetch(config.apiUrl + "Cars")
            .then(handleErrors)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                var cars = [];

                data.Result.forEach(function (car) {
                    cars.push({
                        name: car.Name,
                        id: car.Id,
                        hasAC: car.AC,
                        description: car.Description,
                        seats: car.Seats,
                        luggage: car.Luggage,
                        class: car.Class,
                        doors: car.Doors,
                        price: car.Price,
                        transmission: car.Transmission,
                        imageUrl: car.ImageUrl
                    });
                });

                viewModel.set("cars", cars);
                viewModel.set("isLoading", false);
            });
    }

    viewModel.empty = function () {
        if (this.cars.length) {
            this.set("cars", []);
        }
    };

    return viewModel;
}

function handleErrors(response) {
    if (!response.ok) {
        console.log(JSON.stringify(response));
        throw Error(response.statusText);
    }
    return response;
}
module.exports = CarsViewModel;