import React from 'react'
import LoadingIndicator from '@/Components/Loader'
import { IProps } from './types'
import S from './styles'
import { assignTestId } from '@/Helpers/TestId'

const Component: React.FC<IProps> = ({
  testID = 'LoaderContent',
  size,
  color
}) => {
  return (
    <S.Content {...assignTestId('View', testID)}>
      <LoadingIndicator
        testID={`${testID}_Content_LoadingIndicator`}
        size={size}
        color={color}
      />
    </S.Content>
  )
}

export default Component
