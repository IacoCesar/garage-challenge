import React from 'react'
import ProductListPage from '.'
import { render } from '@/Helpers/TestHelpers'

describe('ProductListPage', () => {
  it('should render snapshot', async () => {
    const wrapper = render(<ProductListPage />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
