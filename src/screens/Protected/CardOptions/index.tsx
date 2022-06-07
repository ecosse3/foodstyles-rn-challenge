import React from 'react';
import { useMutation } from '@apollo/client';
import { BlurView } from '@react-native-community/blur';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { AppDispatch } from '@store';
import { addNewCard, deleteCard, ICard } from '@store/slices/cardSlice';
import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Share from 'react-native-share';
import { useDispatch } from 'react-redux';
import { FOOD_STYLES_URL } from '@utils/consts';
import {
  DELETE_CARD_MUTATION,
  DUPLICATE_CARD_MUTATION,
  SHARE_CARD_MUTATION,
} from './graphql/mutations';
import { styles } from './styles';

const ShareIcon = Image.resolveAssetSource(
  require('@assets/images/share.png'),
)?.uri;

const Duplicate = Image.resolveAssetSource(
  require('@assets/images/duplicate.png'),
)?.uri;

const Delete = Image.resolveAssetSource(
  require('@assets/images/delete.png'),
)?.uri;

type ParamList = {
  CardItemData: {
    item: ICard;
  };
};

const CardOptions = () => {
  const navigation = useNavigation();
  const { params } = useRoute<RouteProp<ParamList, 'CardItemData'>>();
  const { item } = params;

  const dispatch = useDispatch<AppDispatch>();

  const [deleteCardMutation] = useMutation(DELETE_CARD_MUTATION);
  const [duplicateCardMutation] = useMutation(DUPLICATE_CARD_MUTATION);
  const [shareCardMutation] = useMutation(SHARE_CARD_MUTATION);

  const handleSharePress = async () => {
    const { data } = await shareCardMutation({ variables: { id: item.id } });

    await Share.open({
      url: `${FOOD_STYLES_URL}${data?.shareCard}`,
    })
      .catch((err) => {
        console.log('Sharing error:', err);
      })
      .finally(() => {
        navigation.goBack();
      });
  };

  const handleDuplicatePress = async () => {
    const { data } = await duplicateCardMutation({
      variables: { id: item.id },
    });

    dispatch(
      addNewCard({
        id: data.duplicateCard.id,
        name: data.duplicateCard.name,
      }),
    );

    navigation.goBack();
  };

  const handleDeletePress = () => {
    Alert.alert(
      'Confirm delete',
      'This will delete the Food Style and all its settings.',
      [
        {
          text: 'Delete',
          onPress: async () => {
            await deleteCardMutation({
              variables: { id: item.id },
            });
            dispatch(deleteCard(item.id));
            navigation.goBack();
          },
          style: 'destructive',
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <BlurView
        style={StyleSheet.absoluteFill}
        blurAmount={10}
        blurType="xlight"
      />
      <View
        style={[
          styles.cardWrapper,
          { top: Dimensions.get('screen').height / 2 },
        ]}>
        <View>
          <View style={[styles.actionWrapper]}>
            <TouchableOpacity
              style={styles.actionItem}
              onPress={handleSharePress}>
              <Text style={[styles.buttonTitle]}>Share</Text>
              <Image
                source={{ uri: ShareIcon }}
                resizeMode="cover"
                style={styles.actionIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionItem}
              onPress={handleDuplicatePress}>
              <Text style={[styles.buttonTitle]}>Duplicate</Text>
              <Image
                source={{ uri: Duplicate }}
                resizeMode="cover"
                style={styles.actionIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionItem}
              onPress={handleDeletePress}>
              <Text style={[styles.buttonTitle]}>Delete</Text>
              <Image
                source={{ uri: Delete }}
                resizeMode="cover"
                style={styles.actionIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardOptions;
