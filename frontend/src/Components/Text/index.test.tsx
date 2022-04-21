import React from 'react'
import { IProps } from './types'
import { mockTestId } from '@/Helpers/TestId'
import Text from '.'
import { render } from '@/Helpers/TestHelpers'

describe('Text', () => {
  let props: IProps = {
    testID: 'Text',
    label: 'Test'
  }

  const loaderElement = mockTestId('View', `${props.testID!}`).testID

  it(`should render ${loaderElement}`, async () => {
    const wrapper = render(<Text {...props} />)

    const el_container = wrapper.getByTestId(loaderElement)
    expect(el_container).toBeTruthy()
  })

  it('should render snapshot', async () => {
    const wrapper = render(<Text {...props} />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
