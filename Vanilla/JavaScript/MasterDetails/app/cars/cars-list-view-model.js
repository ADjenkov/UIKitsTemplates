var config = require("../shared/config");
var fetchModule = require("fetch");
var ObservableArray = require("data/observable-array").ObservableArray;

function CarsListViewModel() {
    var viewModel = new ObservableArray([]);

    viewModel.load = function () {
        return fetch(config.apiUrl + "Cars")
            .then(handleErrors)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                data.Result.forEach(function (car) {
                    viewModel.push({
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
            });
    }

    viewModel.empty = function () {
        while (viewModel.length) {
            viewModel.pop();
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
module.exports = CarsListViewModel;