import { assignTestId } from '@/Helpers/TestId'
import { RootState } from '@/Store'
import React from 'react'
import { useSelector } from 'react-redux'
import S from './styles'
import { IProps } from './types'

const Component: React.FC<IProps> = ({ testID = 'SafeAreaView', children }) => {
  const themeSelector = useSelector((state: RootState) => state.themeData.theme)

  return (
    <S.Content
      {...assignTestId('View', `${testID}`)}
      themeSelector={themeSelector}
    >
      {children}
    </S.Content>
  )
}

export default Component
