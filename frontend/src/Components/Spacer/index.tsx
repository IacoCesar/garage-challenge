import { assignTestId } from '@/Helpers/TestId'
import React from 'react'
import S from './styles'
import { IProps } from './types'

const SpacerView: React.FC<IProps> = ({ testID = 'Spacer', min, max }) => (
  <S.Spacer {...assignTestId('View', `${testID}`)} min={min} max={max} />
)

export default SpacerView
