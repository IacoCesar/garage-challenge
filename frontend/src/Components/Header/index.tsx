import React from 'react'
import S from './styles'
import Text from '@/Components/Text'
import { IHeader } from './types'
import Icon from '@/Components/Icon'
import { theme } from '@/Helpers/Theme'
import { useSelector } from 'react-redux'
import { RootState } from '@/Store'
import { assignTestId } from '@/Helpers/TestId'

const Component: React.FC<IHeader> = ({
  testID = 'Header',
  isHomeScreen = false,
  title = '',
  callHandleBack,
  callHandleChangeVisualMode
}) => {
  const themeSelector = useSelector((state: RootState) => state.themeData.theme)

  return (
    <S.Container
      {...assignTestId('View', `${testID}_Container`)}
      themeSelector={themeSelector}
    >
      <S.Content {...assignTestId('View', `${testID}_Container_Content`)}>
        {!isHomeScreen && (
          <S.ButtonLeftItem
            {...assignTestId(
              'TouchableOpacity',
              `${testID}_Container_Content_ButtonLeftItem`
            )}
            onPress={callHandleBack}
          >
            <Icon
              testID={`${testID}_Container_Content_ButtonLeftItem_Icon`}
              size={20}
              name={'arrow-back-ios'}
              type="material"
              color={theme.standard[themeSelector].icon}
            />
          </S.ButtonLeftItem>
        )}
        <S.ContentTitle
          {...assignTestId('View', `${testID}_Container_Content_ContentTitle`)}
          isHomeScreen={isHomeScreen}
          themeSelector={themeSelector}
        >
          <Text
            testID={`${testID}_Container_Content_ContentTitle_Text`}
            fontSize={25}
            isBold
            label={isHomeScreen ? 'Garage' : title}
          />
        </S.ContentTitle>
      </S.Content>
      {isHomeScreen && callHandleChangeVisualMode && (
        <S.ButtonLeftItem
          {...assignTestId(
            'TouchableOpacity',
            `${testID}_Container_ButtonLeftItem`
          )}
          onPress={() => callHandleChangeVisualMode(themeSelector)}
        >
          <Icon
            testID={`${testID}_Container_ButtonLeftItem_Icon`}
            size={20}
            name={'brightness-2'}
            type="material"
            color={theme.standard[themeSelector].textColor}
          />
        </S.ButtonLeftItem>
      )}
    </S.Container>
  )
}

export default Component
