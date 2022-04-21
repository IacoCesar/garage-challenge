import React from 'react'
import { IProps } from './types'
import { mockTestId } from '@/Helpers/TestId'
import Detail from '.'
import { render, fireEvent } from '@/Helpers/TestHelpers'

describe('Detail', () => {
  let props: IProps = {
    testID: 'Detail'
  }

  const containerElement = mockTestId(
    'List',
    `${props.testID!}_Container`
  ).testID

  it(`should render ${containerElement}`, async () => {
    const wrapper = render(<Detail {...props} />)

    const el_container = wrapper.getByTestId(containerElement)

    expect(el_container).toBeTruthy()
    expect(el_container.children.length).toBe(1)
  })

  it('should render snapshot', async () => {
    const wrapper = render(<Detail {...props} />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
