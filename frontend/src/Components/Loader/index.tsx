import React from 'react'
import { IProps } from './types'
import S from './styles'
import { assignTestId } from '@/Helpers/TestId'

const Component: React.FC<IProps> = ({ testID = 'Loader', size, color }) => {
  return (
    <S.LoadingIndicator
      {...assignTestId('ActivityIndicator', testID)}
      size={size}
      color={color}
    />
  )
}

export default Component
