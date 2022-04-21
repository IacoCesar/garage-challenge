import { assignTestId } from '@/Helpers/TestId'
import { RootState } from '@/Store'
import React from 'react'
import { useSelector } from 'react-redux'
import S from './styles'

const Component: React.FC<any> = ({
  testID = 'VirtualizedScrollView',
  children
}) => {
  const themeSelector = useSelector((state: RootState) => state.themeData.theme)

  return (
    <S.List
      {...assignTestId('List', `${testID}`)}
      themeSelector={themeSelector}
      data={[]}
      keyExtractor={() => 'key'}
      renderItem={null}
      ListHeaderComponent={<>{children}</>}
    />
  )
}

export default Component
