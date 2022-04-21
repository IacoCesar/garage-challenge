import { Router } from 'express'
import {
  firstPress,
  getCars,
  getfavoritedCars,
  favoriteCar,
  unFavoriteCar
} from './Cars'
const CarsRoutes = Router()

CarsRoutes.get('/api', firstPress)
  .get('/api/cars', getCars)
  .get('/api/cars/favorite', getfavoritedCars)
  .post('/api/cars/favorite', favoriteCar)
  .post('/api/cars/unfavorite', unFavoriteCar)

export default CarsRoutes
