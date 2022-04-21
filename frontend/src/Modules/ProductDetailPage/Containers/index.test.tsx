import React from 'react'
import DetaiProductDetailPagel from '.'
import { render } from '@/Helpers/TestHelpers'

describe('ProductDetailPage', () => {
  it('should render snapshot', async () => {
    const wrapper = render(<DetaiProductDetailPagel />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
