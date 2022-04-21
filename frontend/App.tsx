import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '@/Helpers/Theme'
import SafeAreaView from '@/Components/SafeAreaView'
import Navigation from '@/Routes'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { store, persistor } from '@/Store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <SafeAreaProvider>
            <StatusBar style="auto" />
            <SafeAreaView>
              <Navigation />
            </SafeAreaView>
          </SafeAreaProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
