import { assignTestId } from '@/Helpers/TestId'
import { RootState } from '@/Store'
import React from 'react'
import { useSelector } from 'react-redux'
import { useTheme } from 'styled-components/native'
import S from './styles'
import { IProps } from './types'

const Component: React.FC<IProps> = ({
  testID = 'Text',
  label,
  fontSize,
  color,
  isBold
}) => {
  const themeSelector = useSelector((state: RootState) => state.themeData.theme)
  const theme = useTheme()

  return (
    <S.Content {...assignTestId('View', `${testID}`)}>
      <S.Text
        {...assignTestId('Text', `${testID}_Content_Text`)}
        fontSize={fontSize}
        color={color || theme.standard[themeSelector].textColor}
        isBold={isBold}
      >
        {label}
      </S.Text>
    </S.Content>
  )
}

export default Component
