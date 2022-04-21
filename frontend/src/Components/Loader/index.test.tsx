import React from 'react'
import { IProps } from './types'
import { mockTestId } from '@/Helpers/TestId'
import Loader from '.'
import { render } from '@/Helpers/TestHelpers'

describe('Loader', () => {
  let props: IProps = {
    testID: 'Loader',
    size: 23,
    color: 'white'
  }

  const loaderElement = mockTestId(
    'ActivityIndicator',
    `${props.testID!}`
  ).testID

  it(`should render ${loaderElement}`, async () => {
    const wrapper = render(<Loader {...props} />)

    const el_container = wrapper.getByTestId(loaderElement)
    expect(el_container).toBeTruthy()
  })

  it('should render snapshot', async () => {
    const wrapper = render(<Loader {...props} />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
