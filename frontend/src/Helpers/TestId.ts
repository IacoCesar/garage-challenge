import { Platform } from 'react-native'

interface ITestID {
  testID: string
  accessibilityLabel?: string
  accessible?: boolean
}

type componentType =
  | 'TouchableOpacity'
  | 'View'
  | 'SafeAreaView'
  | 'List'
  | 'Modal'
  | 'Text'
  | 'Image'
  | 'ActivityIndicator'

const testID = (testID: string, accessibilityLabel?: string): ITestID =>
  Platform.OS === 'android'
    ? {
        testID,
        accessibilityLabel,
        accessible: true
      }
    : {
        testID,
        accessible: false
      }

export const assignTestId = (
  componentType: componentType,
  componentId: string,
  componentText?: string
): ITestID => {
  const id = `${componentType}_${componentId}`

  return testID(id, componentText)
}

export const mockTestId = (
  componentType: componentType,
  componentId: string,
  componentText?: string
): ITestID => {
  return assignTestId(componentType, componentId, componentText)
}
