import 'jest-styled-components/native'
import 'react-native-gesture-handler/jestSetup'
import '@testing-library/jest-native/extend-expect'

// import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock'

const mockedNavigate = jest.fn()

// jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage)

jest.mock('react-native-gesture-handler', () =>
  jest.requireActual('../node_modules/react-native-gesture-handler/jestSetup')
)

jest.mock('redux-persist/integration/react', () => ({
  PersistGate: (props) => props.children
}))

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest
    .fn((fn) => fn())
    .mockImplementation((callback) =>
      callback({
        vitrine: {
          vitrineItemSelector: {
            id: '155fa5ae-00a0-11ea-84e3-4371baa68b28',
            model: 'RS7 4.0',
            make: 'Audi',
            year: 2015,
            image: {
              url: '/assets/vehicle_image-155fa5ae-00a0-11ea-84e3-4371baa68b28.jpg'
            }
          }
        },
        themeData: { theme: 'default' }
      })
    ),
  useDispatch: () => jest.fn()
}))

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockedNavigate,
    goBack: jest.fn()
  })
}))

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext)

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock')

  Reanimated.default.call = () => {}

  return Reanimated
})

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

jest.mock('@expo/vector-icons', () => {
  const { View } = require('react-native')
  return {
    MaterialIcons: View,
    AntDesign: View
  }
})
