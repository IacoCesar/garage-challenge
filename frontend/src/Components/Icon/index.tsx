import React from 'react'
import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import { IProps } from './types'
import { assignTestId } from '@/Helpers/TestId'

const Component: React.FC<IProps> = ({
  testID = 'Icon',
  size,
  name,
  color,
  type
}) => {
  return type === 'material' ? (
    <MaterialIcons
      {...assignTestId('View', testID)}
      size={size}
      name={name}
      color={color}
    />
  ) : (
    <AntDesign
      {...assignTestId('View', testID)}
      size={size}
      name={name}
      color={color}
    />
  )
}

export default Component
