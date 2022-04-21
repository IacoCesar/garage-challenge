import { useCallback, useEffect, useState } from 'react'
import Services from '../Services'

export const useProductListPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [vitrineData, setVitrineData] = useState([])
  const [vitrineDataControlled, setVitrineDataControlled] = useState([])
  const [vitrineDataCount, setVitrineDataCount] = useState(2)
  const [favoriteCarsData, setFavoriteCarsData] = useState([])

  useEffect(() => {
    if (vitrineDataControlled.length === 0) return

    callLoadVitrineDataCount()
  }, [vitrineDataControlled])

  const callLoadVitrineDataCount = useCallback(() => {
    if (vitrineData.length === vitrineDataControlled.length) return

    const filteredVitrineData = vitrineDataControlled.filter(
      (_, index) => index < vitrineDataCount
    )

    setVitrineData(filteredVitrineData)
    setVitrineDataCount((prev) => prev + 2)
  }, [vitrineDataControlled, vitrineDataCount, vitrineData])

  const callLoadVitrineData = useCallback(async () => {
    try {
      if (vitrineDataControlled.length > 0) return callLoadVitrineDataCount()

      setIsLoading(true)

      const { data, status } = await Services.getVitrine()

      if (status !== 200) return

      setVitrineDataControlled(data.items)
    } catch (error) {
      /// error here
    } finally {
      setIsLoading(false)
    }
  }, [vitrineData, vitrineDataControlled])

  const callFavoriteCar = useCallback(async (id: string) => {
    try {
      setIsLoading(true)

      const params = { carId: id }

      const { status } = await Services.favoriteCar(params)

      if (status !== 201) return

      callLoadFavoriteCars()
    } catch (error) {
      /// error here
    } finally {
      setIsLoading(false)
    }
  }, [])

  const callUnFavoriteCar = useCallback(async (id: string) => {
    try {
      setIsLoading(true)

      const params = { carId: id }

      const { status } = await Services.unFavoriteCar(params)

      if (status !== 200) return

      callLoadFavoriteCars()
    } catch (error) {
      /// error here
    } finally {
      setIsLoading(false)
    }
  }, [])

  const callLoadFavoriteCars = useCallback(async () => {
    try {
      const { data, status } = await Services.getFavoriteCars()

      if (status !== 200) return

      setFavoriteCarsData(data.items)
    } catch (error) {
      /// error here
    }
  }, [])

  return {
    isLoading,
    vitrineData,
    vitrineDataCount,
    favoriteCarsData,
    callLoadVitrineData,
    callFavoriteCar,
    callUnFavoriteCar,
    callLoadFavoriteCars
  }
}
