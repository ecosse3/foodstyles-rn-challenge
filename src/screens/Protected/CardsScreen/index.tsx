import { useLazyQuery, useMutation } from '@apollo/client';
import Button from '@components/Button';
import { Card } from '@components/Card';
import Typography from '@components/Typography';
import ScreenLayout from '@layouts/ScreenLayout';
import { AppDispatch } from '@store';
import {
  addNewCard,
  ICard,
  selectCards,
  setCards,
} from '@store/slices/cardSlice';
import COLORS from '@theme/colors';
import FONTS from '@theme/fonts';
import React, { useEffect } from 'react';
import { FlatList, Image, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProtectedRoute } from '@screens/routes';
import { CREATE_CARD_MUTATION } from './graphql/mutations';
import { GET_CARDS_QUERY } from './graphql/queries';
import styles from './styles';
import { ProtectedNavigatorParams } from '../ProtectedNavigatorParams';

const Logo = Image.resolveAssetSource(
  require('@assets/images/logo-3x.png'),
)?.uri;

const Add = Image.resolveAssetSource(require('@assets/images/add.png'))?.uri;

type CardsScreenNavigationProp = NativeStackNavigationProp<
  ProtectedNavigatorParams,
  typeof ProtectedRoute
>;

export const CardsScreen = () => {
  const { bottom } = useSafeAreaInsets();

  const [createCard] = useMutation(CREATE_CARD_MUTATION);
  const [getCards] = useLazyQuery(GET_CARDS_QUERY);

  const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector(selectCards);

  const navigation: CardsScreenNavigationProp = useNavigation();

  const handleAddNewFoodStylePress = async () => {
    try {
      const { data } = await createCard({
        variables: {
          name: `Thingie ${new Date()
            .getMilliseconds()
            .toString()
            .substring(0, 3)}`,
        },
      });

      dispatch(
        addNewCard({
          id: data.createCard.id,
          name: data.createCard.name,
        }),
      );
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleCardPress = (item: ICard) => {
    navigation.navigate('CardOptionsScreenRoute', { item });
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getCards();
        dispatch(setCards(data.cards));
      } catch (e) {
        // setIsErrorModalVisible(true);
      }
    })();
  }, [dispatch, getCards]);

  return (
    <LinearGradient
      colors={[COLORS.organish, COLORS.maize, COLORS.gray]}
      locations={[0, 0.3, 0.5]}
      style={{ flex: 1 }}>
      <ScreenLayout>
        <Image
          source={{ uri: Logo }}
          resizeMode="cover"
          style={styles({ bottom }).logo}
        />
        <FlatList
          data={cards}
          contentContainerStyle={styles({ bottom }).flatlist}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card name={item.name} onPress={() => handleCardPress(item)} />
          )}
        />
      </ScreenLayout>
      <View style={styles({ bottom }).bottomComponent} />
      <View
        style={{
          position: 'absolute',
          bottom: 1.5 * bottom,
          alignSelf: 'center',
        }}>
        <Button
          style={styles({ bottom }).newFoodStyle}
          variant="square"
          icon={
            <Image source={{ uri: Add }} style={styles({ bottom }).addIcon} />
          }
          onPress={handleAddNewFoodStylePress}>
          <Typography
            color={COLORS.greyishBrown}
            fontFamily={FONTS.bold}
            fontWeight="bold1"
            textAlign="left">
            New Food Style
          </Typography>
        </Button>
      </View>
    </LinearGradient>
  );
};
