import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '@/Helpers/Theme'
import configureStore from 'redux-mock-store' //ES6 modules

import { render } from '@testing-library/react-native'

const mockStore = configureStore([])

const renderProviders = ({ children }: any): React.ReactElement => {
  const store = mockStore({
    state: { themeData: { theme: 'default' } }
  })

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>{children}</SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  )
}

const customRender = (ui: React.ReactElement, options?: object) =>
  render(ui, {
    wrapper: renderProviders,
    ...options
  })

export * from '@testing-library/react-native'

export { customRender as render }
