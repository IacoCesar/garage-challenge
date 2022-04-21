import React from 'react'
import { IProps } from './types'
import { mockTestId } from '@/Helpers/TestId'
import Icon from '.'
import { render } from '@/Helpers/TestHelpers'

describe('Icon', () => {
  let props: IProps = {
    testID: 'Icon',
    size: 23,
    name: 'star',
    color: 'white',
    type: 'material'
  }

  const iconElement = mockTestId('View', `${props.testID!}`).testID

  it(`should render ${iconElement}`, async () => {
    const wrapper = render(<Icon {...props} />)

    const el_container = wrapper.getByTestId(iconElement)
    expect(el_container).toBeTruthy()
  })

  it('should render snapshot', async () => {
    const wrapper = render(<Icon {...props} />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
