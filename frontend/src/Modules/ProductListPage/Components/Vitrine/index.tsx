import React, { useCallback } from 'react'
import S from './styles'
import { IProps, IRenderItemProps, IFavoriteCarProps } from './types'
import Text from '@/Components/Text'
import Spacer from '@/Components/Spacer'
import LoaderContent from '@/Components/LoaderContent'
import Icon from '@/Components/Icon'
import { useSelector } from 'react-redux'
import { RootState } from '@/Store'
import { useTheme } from 'styled-components/native'
import { assignTestId } from '@/Helpers/TestId'
import { API_BASE } from '@env'

const Vitrine: React.FC<IProps> = ({
  testID = 'Vitrine',
  isLoading,
  vitrineData = [],
  favoriteCarsData = [],
  callHandleOpenPdp,
  callHandleFavoriteCar,
  callHandleUnFavoriteCar,
  callLoadVitrineData
}) => {
  const themeSelector = useSelector((state: RootState) => state.themeData.theme)
  const theme = useTheme()

  const _callRenderItem: any = useCallback(
    ({ item, index }: IRenderItemProps) => {
      const filterFavoriteCar = favoriteCarsData.filter(
        (it: IFavoriteCarProps) => it.carId === item.id
      )
      const isFavoritedCar = filterFavoriteCar.length > 0

      return (
        <S.ContentListItem
          {...assignTestId(
            'TouchableOpacity',
            `${testID}_Content_List_ContentListItem_${index}`
          )}
          style={{
            shadowColor: theme.standard[themeSelector].shadow,
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3
          }}
          key={index}
          onPress={() => callHandleOpenPdp(item)}
          themeSelector={themeSelector}
        >
          <S.ContentListImage
            {...assignTestId(
              'Image',
              `${testID}_Content_List_ContentListItem_${index}_ContentListImage`
            )}
            themeSelector={themeSelector}
            source={{ uri: `${API_BASE}${item.image.url}` }}
            resizeMode="cover"
          />
          <S.ContentListInfo
            {...assignTestId(
              'View',
              `${testID}_Content_List_ContentListItem_${index}_ContentListInfo`
            )}
          >
            <Spacer
              testID={`${testID}_Content_List_ContentListItem_${index}_ContentListInfo_Spacer`}
              min={10}
              max={10}
            />
            <S.ContentListInfoTop
              {...assignTestId(
                'View',
                `${testID}_Content_List_ContentListItem_${index}_ContentListInfo_ContentListInfoTop`
              )}
            >
              <S.ContentListInfoTopDesc
                {...assignTestId(
                  'View',
                  `${testID}_Content_List_ContentListItem_${index}_ContentListInfo_ContentListInfoTop_ContentListInfoTopDesc`
                )}
              >
                <Text
                  testID={`${testID}_Content_List_ContentListItem_${index}_ContentListInfo_ContentListInfoTop_ContentListInfoTopDesc_Text`}
                  fontSize={23}
                  label={item.model}
                  color={theme.standard[themeSelector].cardTextColor}
                />
              </S.ContentListInfoTopDesc>
              <S.ContentListInfoTopStar
                {...assignTestId(
                  'TouchableOpacity',
                  `${testID}_Content_List_ContentListItem_${index}_ContentListInfo_ContentListInfoTop_ContentListInfoTopStar`
                )}
                onPress={() =>
                  isFavoritedCar
                    ? callHandleUnFavoriteCar(item.id)
                    : callHandleFavoriteCar(item.id)
                }
              >
                <Icon
                  testID={`${testID}_Content_List_ContentListItem_${index}_ContentListInfo_ContentListInfoTop_ContentListInfoTopStar_Icon`}
                  size={25}
                  name={isFavoritedCar ? 'star' : 'staro'}
                  color={
                    isFavoritedCar
                      ? theme.colors.starColor
                      : theme.standard.default.textColor
                  }
                />
              </S.ContentListInfoTopStar>
            </S.ContentListInfoTop>
            <Spacer
              testID={`${testID}_Content_List_ContentListItem_${index}_ContentListInfo_Spacer`}
              min={10}
              max={10}
            />
            <S.ContentListHr
              {...assignTestId(
                'View',
                `${testID}_Content_List_ContentListItem_${index}_ContentListInfo_ContentListHr`
              )}
              themeSelector={themeSelector}
            />
            <Spacer
              testID={`${testID}_Content_List_ContentListItem_${index}_ContentListInfo_Spacer2`}
              min={10}
              max={10}
            />
            <S.ContentListInfoBot
              {...assignTestId(
                'View',
                `${testID}_Content_List_ContentListItem_${index}_ContentListInfo_ContentListInfoBot`
              )}
            >
              <S.ContentListInfoBotDesc
                {...assignTestId(
                  'View',
                  `${testID}_Content_List_ContentListItem_${index}_ContentListInfo_ContentListInfoBot_ContentListInfoBotDesc`
                )}
              >
                <Text
                  testID={`${testID}_Content_List_ContentListItem_${index}_ContentListInfo_ContentListInfoBot_ContentListInfoBotDesc_Text`}
                  label={`${item.make} | ${item.year}`}
                  color={theme.standard[themeSelector].cardTextColor}
                />
              </S.ContentListInfoBotDesc>
            </S.ContentListInfoBot>
            <Spacer
              testID={`${testID}_Content_List_ContentListItem_${index}_ContentListInfo_Spacer`}
              min={10}
              max={10}
            />
          </S.ContentListInfo>
        </S.ContentListItem>
      )
    },
    [favoriteCarsData, vitrineData, themeSelector]
  )

  return (
    <>
      {isLoading && (
        <LoaderContent
          testID={`${testID}_LoaderContent`}
          size={25}
          color={theme.standard.default.background}
        />
      )}
      <S.Content testID={`${testID}_Content`}>
        <Spacer
          testID={`${testID}_Content_Spacer`}
          min={theme.spacing.global.horizontal}
          max={theme.spacing.global.horizontal}
        />
        <S.List
          testID={`${testID}_Content_List`}
          data={vitrineData}
          ItemSeparatorComponent={() => <Spacer min={20} max={20} />}
          keyExtractor={(_, index): string => index.toString()}
          renderItem={_callRenderItem}
          onEndReachedThreshold={0.5}
          onEndReached={callLoadVitrineData}
        />
        <Spacer
          testID={`${testID}_Content_Spacer_2`}
          min={theme.spacing.global.horizontal}
          max={theme.spacing.global.horizontal}
        />
      </S.Content>
    </>
  )
}

export default Vitrine
