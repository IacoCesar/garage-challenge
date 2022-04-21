"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Cars_1 = require("./Cars");
var CarsRoutes = (0, express_1.Router)();
CarsRoutes.get('/api', Cars_1.firstPress)
    .get('/api/cars', Cars_1.getCars)
    .get('/api/cars/favorite', Cars_1.getfavoritedCars)
    .post('/api/cars/favorite', Cars_1.favoriteCar)
    .post('/api/cars/unfavorite', Cars_1.unFavoriteCar);
exports.default = CarsRoutes;
