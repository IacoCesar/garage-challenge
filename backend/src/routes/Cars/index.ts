import { Request, Response } from 'express'
import * as cars from './mock.json'
import NodeCache from 'node-cache'
import { ICommon, ICar } from './types'

const cache = new NodeCache({ checkperiod: 0 })

export const firstPress = (req: Request, res: Response): Response<ICommon> => {
  return res.status(200).json({ message: 'Hello World!' })
}

export const getCars = (req: Request, res: Response): Response<ICar> => {
  return res.json(cars)
}

export const getfavoritedCars = (
  req: Request,
  res: Response
): Response<ICommon> => {
  try {
    const keysCached = cache.keys()

    if (!keysCached || keysCached.length === 0)
      return res.status(200).json({
        message: 'Could not find favorited cars!',
        items: []
      })

    const carIdsCached = cache.mget(keysCached)

    return res.status(200).json({
      message: 'Successful when get favorite cars!',
      items: Object.values(carIdsCached)
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Error when get a favorite car!'
    })
  }
}

export const favoriteCar = async (
  req: Request,
  res: Response
): Promise<Response<ICommon>> => {
  try {
    const { carId } = req.body

    if (!carId)
      return res.status(400).json({
        message: 'Error when favorite car! Invalid params.'
      })

    const obj = { carId: carId }

    const keysCached = await cache.keys()
    const carIdsCached = await cache.mget(keysCached)
    const findCarIdInCache = carIdsCached[carId]

    if (!!findCarIdInCache)
      return res.status(200).json({
        message: 'Already favorited same car!'
      })

    await cache.set(`${carId}`, obj)

    return res.status(201).json({ message: 'Successful favorited car!' })
  } catch (error) {
    return res.status(400).json({
      message: 'Error when favorite car!'
    })
  }
}

export const unFavoriteCar = async (
  req: Request,
  res: Response
): Promise<Response<ICommon>> => {
  try {
    const { carId } = req.body

    if (!carId || carId.length === 0)
      return res.status(400).json({
        message: 'Error when favorite car! Invalid params.'
      })

    const keysCached = await cache.keys()
    const carIdsCached = await cache.mget(keysCached)
    const findCarIdInCache = carIdsCached[carId]

    if (!findCarIdInCache)
      return res.status(200).json({
        message: 'You dont have a favorited car with the same id!'
      })

    await cache.del(carId)

    return res.status(200).json({ message: 'Successful unfavorited car!' })
  } catch (error) {
    return res.status(400).json({
      message: 'Error when unfavorite car!'
    })
  }
}
