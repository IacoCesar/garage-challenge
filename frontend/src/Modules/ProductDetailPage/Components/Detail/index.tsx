import { RootState } from '@/Store'
import React from 'react'
import { useSelector } from 'react-redux'
import S from './styles'
import Text from '@/Components/Text'
import Spacer from '@/Components/Spacer'
import { useTheme } from 'styled-components/native'
import { assignTestId } from '@/Helpers/TestId'
import { IProps } from './types'
import { API_BASE } from '@env'

const Detail: React.FC<IProps> = ({ testID = 'Detail' }) => {
  const themeSelector = useSelector((state: RootState) => state.themeData.theme)
  const vitrineItemSelector = useSelector(
    (state: RootState) => state.vitrine.vitrineItemSelector
  )
  const theme = useTheme()

  return (
    <S.Container testID={`${testID}_Container`}>
      <S.Content
        {...assignTestId('View', `${testID}_Container_Content`)}
        themeSelector={themeSelector}
      >
        <Spacer
          testID={`${testID}_Container_Content_Spacer`}
          min={theme.spacing.global.horizontal}
          max={theme.spacing.global.horizontal}
        />
        <S.Image
          {...assignTestId('Image', `${testID}_Container_Content_Image`)}
          themeSelector={themeSelector}
          source={{
            uri: `${API_BASE}${vitrineItemSelector.image.url}`
          }}
          resizeMode="stretch"
        />
        <Spacer
          testID={`${testID}_Container_Content_Spacer_1`}
          min={20}
          max={20}
        />
        <S.ContentInfo
          {...assignTestId('View', `${testID}_Container_Content_ContentInfo`)}
        >
          <S.ContentTextIdentifier
            {...assignTestId(
              'View',
              `${testID}_Container_Content_ContentInfo_ContentTextIdentifier`
            )}
          >
            <Text
              testID={`${testID}_Container_Content_ContentInfo_ContentTextIdentifier_Text`}
              label={`ID: ${vitrineItemSelector.id}`}
              fontSize={12}
            />
          </S.ContentTextIdentifier>
          <S.ContentHr
            {...assignTestId(
              'View',
              `${testID}_Container_Content_ContentInfo_ContentHr`
            )}
            themeSelector={themeSelector}
          />
          <Spacer
            testID={`${testID}_Container_Content_ContentInfo_Spacer`}
            min={5}
            max={5}
          />
          <Text
            testID={`${testID}_Container_Content_ContentInfo_Text`}
            label={`Make: ${vitrineItemSelector.make}`}
            fontSize={20}
          />
          <Spacer
            testID={`${testID}_Container_Content_ContentInfo_Spacer_1`}
            min={5}
            max={5}
          />
          <Text
            testID={`${testID}_Container_Content_ContentInfo_Text_1`}
            label={`Model: ${vitrineItemSelector.model}`}
            fontSize={20}
          />
          <Spacer
            testID={`${testID}_Container_Content_ContentInfo_Spacer_2`}
            min={5}
            max={5}
          />
          <Text
            testID={`${testID}_Container_Content_ContentInfo_Text_2`}
            label={`Year: ${vitrineItemSelector.year}`}
            fontSize={20}
          />
        </S.ContentInfo>
      </S.Content>
    </S.Container>
  )
}

export default Detail
