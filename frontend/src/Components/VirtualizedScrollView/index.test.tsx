import React from 'react'
import { IProps } from './types'
import { mockTestId } from '@/Helpers/TestId'
import VirtualizedScrollView from '.'
import { render } from '@/Helpers/TestHelpers'

describe('VirtualizedScrollView', () => {
  let props: IProps = {
    testID: 'VirtualizedScrollView',
    themeSelector: 'default',
    children: <></>
  }

  const loaderElement = mockTestId('List', `${props.testID!}`).testID

  it(`should render ${loaderElement}`, async () => {
    const wrapper = render(<VirtualizedScrollView {...props} />)

    const el_container = wrapper.getByTestId(loaderElement)
    expect(el_container).toBeTruthy()
  })

  it('should render snapshot', async () => {
    const wrapper = render(<VirtualizedScrollView {...props} />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
