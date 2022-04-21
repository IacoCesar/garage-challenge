import React from 'react'
import { IHeader } from './types'
import { mockTestId } from '@/Helpers/TestId'
import Header from '.'
import { render, fireEvent } from '@/Helpers/TestHelpers'
import { act } from 'react-test-renderer'

describe('Header', () => {
  let props: IHeader = {
    testID: 'Header',
    title: 'Test',
    isHomeScreen: false,
    callHandleBack: jest.fn(),
    callHandleChangeVisualMode: jest.fn()
  }

  const containerElement = mockTestId(
    'View',
    `${props.testID!}_Container`
  ).testID
  const buttonBackElement = mockTestId(
    'TouchableOpacity',
    `${props.testID!}_Container_Content_ButtonLeftItem`
  ).testID
  const titleContentElement = mockTestId(
    'View',
    `${props.testID!}_Container_Content_ContentTitle`
  ).testID

  const buttonThemeElement = mockTestId(
    'TouchableOpacity',
    `${props.testID!}_Container_ButtonLeftItem`
  ).testID

  it(`should render ${containerElement}`, async () => {
    const wrapper = render(<Header {...props} />)
    const el_container = wrapper.getByTestId(containerElement)

    expect(el_container).toBeTruthy()
    expect(el_container.children.length).toBe(1)
  })

  it(`should find title content ${titleContentElement}`, async () => {
    const wrapper = render(<Header {...props} />)
    const title = await wrapper.findByTestId(titleContentElement)

    expect(title).toBeTruthy()
  })

  it(`should onPress ${buttonBackElement}`, async () => {
    const wrapper = render(<Header {...props} />)
    const button = await wrapper.findByTestId(buttonBackElement)

    await act(async () => {
      fireEvent.press(button)
      expect(props.callHandleBack).toHaveBeenCalled()
    })
  })

  it(`should onPress ${buttonThemeElement}`, async () => {
    const wrapper = render(<Header {...props} isHomeScreen={true} />)

    const button = await wrapper.findByTestId(buttonThemeElement)

    await act(async () => {
      fireEvent.press(button)
      expect(props.callHandleBack).toHaveBeenCalled()
    })
  })

  it('should render snapshot', async () => {
    const wrapper = render(<Header {...props} />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
