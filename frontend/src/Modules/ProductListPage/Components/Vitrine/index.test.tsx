import React from 'react'
import { IProps } from './types'
import { mockTestId } from '@/Helpers/TestId'
import Vitrine from '.'
import { render, fireEvent, act, waitFor } from '@/Helpers/TestHelpers'

describe('Vitrine', () => {
  let props: IProps = {
    testID: 'Vitrine',
    isLoading: false,
    favoriteCarsData: [
      {
        carId: '155fa5ae-00a0-11ea-84e3-4371baa68b28'
      }
    ],
    vitrineData: [
      {
        id: '206b3cd8-00a0-11ea-a1de-278776d54145',
        model: 'A6 50',
        make: 'Audi',
        year: 2013,
        image: {
          url: '/assets/vehicle_image-206b3cd8-00a0-11ea-a1de-278776d54145.jpg'
        }
      },
      {
        id: '155fa5ae-00a0-11ea-84e3-4371baa68b28',
        model: 'RS7 4.0',
        make: 'Audi',
        year: 2015,
        image: {
          url: '/assets/vehicle_image-155fa5ae-00a0-11ea-84e3-4371baa68b28.jpg'
        }
      }
    ],
    callHandleOpenPdp: jest.fn(),
    callHandleFavoriteCar: jest.fn(),
    callHandleUnFavoriteCar: jest.fn(),
    callLoadVitrineData: jest.fn()
  }

  const containerElement = mockTestId('List', `${props.testID!}_Content`).testID
  const cardElement = mockTestId(
    'TouchableOpacity',
    `${props.testID!}_Content_List_ContentListItem_0`
  ).testID

  const favoriteElement = mockTestId(
    'TouchableOpacity',
    `${props.testID!}_Content_List_ContentListItem_0_ContentListInfo_ContentListInfoTop_ContentListInfoTopStar`
  ).testID

  const unFavoriteElement = mockTestId(
    'TouchableOpacity',
    `${props.testID!}_Content_List_ContentListItem_1_ContentListInfo_ContentListInfoTop_ContentListInfoTopStar`
  ).testID

  it(`should render ${containerElement}`, async () => {
    const wrapper = render(<Vitrine {...props} />)

    const el_container = wrapper.getByTestId(containerElement)

    await waitFor(() => {
      expect(el_container).toBeTruthy()
      expect(el_container.children.length).toBe(1)
    })
  })

  it(`should onPress ${cardElement}`, async () => {
    const wrapper = render(<Vitrine {...props} />)

    const button = await wrapper.findByTestId(cardElement)

    await act(async () => {
      fireEvent.press(button)
      expect(props.callHandleOpenPdp).toHaveBeenCalled()
    })
  })

  it(`should onPress ${favoriteElement}`, async () => {
    const wrapper = render(<Vitrine {...props} />)

    const button = await wrapper.findByTestId(favoriteElement)

    await act(async () => {
      fireEvent.press(button)

      expect(props.callHandleFavoriteCar).toHaveBeenCalled()
    })
  })

  it(`should onPress ${favoriteElement}`, async () => {
    const wrapper = render(<Vitrine {...props} />)

    const button = await wrapper.findByTestId(favoriteElement)

    await act(async () => {
      fireEvent.press(button)
      expect(props.callHandleFavoriteCar).toHaveBeenCalled()
    })
  })

  it(`should onPress ${unFavoriteElement}`, async () => {
    const wrapper = render(<Vitrine {...props} />)

    const button = await wrapper.findByTestId(unFavoriteElement)

    await act(async () => {
      fireEvent.press(button)
      expect(props.callHandleUnFavoriteCar).toHaveBeenCalled()
    })
  })

  it('should render snapshot', async () => {
    const wrapper = render(<Vitrine {...props} />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
