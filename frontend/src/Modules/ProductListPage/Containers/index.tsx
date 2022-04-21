import React, { useEffect } from 'react'
import { TNavigation } from '@/Helpers/types'
import { useNavigation } from '@react-navigation/native'
import Vitrine from '../Components/Vitrine'
import { useProductListPage } from '../Hooks'
import { useDispatch } from 'react-redux'
import { setVitrineItemSelector } from '../Redux'

const ProductListPage: React.FC = () => {
  const navigation = useNavigation<TNavigation>()
  const dispatch = useDispatch()

  const {
    isLoading,
    vitrineData,
    favoriteCarsData,
    callLoadVitrineData,
    callFavoriteCar,
    callUnFavoriteCar,
    callLoadFavoriteCars
  } = useProductListPage()

  useEffect(() => {
    callLoadVitrineData()
    callLoadFavoriteCars()
  }, [])

  const callHandleOpenPdp = (vitrineItemData: object) => {
    dispatch(setVitrineItemSelector(vitrineItemData))

    navigation.navigate('ProductDetailPage')
  }

  return (
    <Vitrine
      isLoading={isLoading}
      vitrineData={vitrineData}
      favoriteCarsData={favoriteCarsData}
      callHandleOpenPdp={callHandleOpenPdp}
      callHandleFavoriteCar={callFavoriteCar}
      callHandleUnFavoriteCar={callUnFavoriteCar}
      callLoadVitrineData={callLoadVitrineData}
    />
  )
}

export default ProductListPage
