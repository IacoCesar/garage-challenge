import React from 'react'
import { IProps } from './types'
import { mockTestId } from '@/Helpers/TestId'
import Spacer from '.'
import { render } from '@/Helpers/TestHelpers'

describe('Spacer', () => {
  let props: IProps = {
    testID: 'Spacer',
    min: 20,
    max: 20
  }

  const loaderElement = mockTestId('View', `${props.testID!}`).testID

  it(`should render ${loaderElement}`, async () => {
    const wrapper = render(<Spacer {...props} />)

    const el_container = wrapper.getByTestId(loaderElement)
    expect(el_container).toBeTruthy()
  })

  it('should render snapshot', async () => {
    const wrapper = render(<Spacer {...props} />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
