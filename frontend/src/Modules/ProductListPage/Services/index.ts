import { API_BASE } from '@env'
import axios from 'axios'

const Services = {
  getVitrine: () => {
    return axios.get(`${API_BASE}/api/cars`)
  },
  getFavoriteCars: () => {
    return axios.get(`${API_BASE}/api/cars/favorite`)
  },
  favoriteCar: (params: object) => {
    return axios.post(`${API_BASE}/api/cars/favorite`, params)
  },
  unFavoriteCar: (params: object) => {
    return axios.post(`${API_BASE}/api/cars/unfavorite`, params)
  }
}

export default Services
