import React from 'react'
import { IProps } from './types'
import { mockTestId } from '@/Helpers/TestId'
import LoaderContent from '.'
import { render } from '@/Helpers/TestHelpers'

describe('SafeAreaView', () => {
  let props: IProps = {
    testID: 'SafeAreaView',
    children: <></>
  }

  const loaderElement = mockTestId('View', `${props.testID!}`).testID

  it(`should render ${loaderElement}`, async () => {
    const wrapper = render(<LoaderContent {...props} />)

    const el_container = wrapper.getByTestId(loaderElement)
    expect(el_container).toBeTruthy()
  })

  it('should render snapshot', async () => {
    const wrapper = render(<LoaderContent {...props} />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
