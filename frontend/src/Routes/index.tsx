import React, { useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { root } from './Helpers/Root'
import { RouteGenerator } from './Helpers/RouterGenerator'
import Header from '@/Components/Header'
import { createStackNavigator } from '@react-navigation/stack'
import RootTranslate from './Helpers/RootTranslate'

const Stack = createStackNavigator()

const Navigation: React.FC = () => {
  const navigationRef = useRef(null)

  const callRenderScreens = () => {
    return Object.entries(root).map(([name, component], key) => {
      const isHomeScreen = name === 'ProductListPage'

      return (
        <Stack.Screen
          key={key}
          name={name}
          component={component}
          options={RouteGenerator({
            isHomeScreen: isHomeScreen,
            title: RootTranslate.pageParse[name]
          })}
        />
      )
    })
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="ProductListPage">
        {callRenderScreens()}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
