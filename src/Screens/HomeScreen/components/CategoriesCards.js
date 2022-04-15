import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Avatar from '../../../components/Avatar';
import Card from '../../../components/Card';

const CategorieCard = ({item}) => {
  return (
    <>
      <View style={styles.imgCont}>
        <Image style={styles.headerImg} source={item.headerImg} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.totalTasks}>{item.noOfTasks} Total Tasks</Text>
      <View style={styles.avatarImages}>
        <Avatar avatarbackgroundColor={item.cardShadowColor} />
        <View
          style={[
            styles.ongoingTxtCont,
            {backgroundColor: item.onGoingbgColor},
          ]}>
          <Text style={[styles.ongoingTxt, {color: item.cardBackgroundColor}]}>
            Ongoing
          </Text>
        </View>
      </View>
    </>
  );
};

const CategoriesCard = () => {
  const DATA = [
    {
      id: Math.random().toString(),
      title: 'Web UI Design',
      noOfTasks: 10,
      cardBackgroundColor: '#ffaf55',
      cardShadowColor: '#ffaf55',
      headerImg: require('../../../assets/images/valuation.png'),
      onGoingbgColor: '#ffce94',
    },
    {
      id: Math.random().toString(),
      title: 'Mobile UI Design',
      noOfTasks: 15,
      cardBackgroundColor: '#3acdf9',
      cardShadowColor: '#86e0f9',
      headerImg: require('../../../assets/images/mobile.png'),
      onGoingbgColor: '#a9e8f9',
    },
  ];

  const Categorie = ({item}) => {
    const CategorieCardWithWrapper = Card(CategorieCard);

    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <CategorieCardWithWrapper
            cardBackgroundColor={item.cardBackgroundColor}
            cardShadowColor={item.cardShadowColor}
            item={item}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={DATA}
      renderItem={Categorie}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 240,
    marginHorizontal: 9,
    marginVertical: 8,
  },

  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 28,
    color: 'white',
  },
  totalTasks: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: 'white',
    marginTop: -6,
  },
  avatarImages: {
    marginVertical: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ongoingTxtCont: {
    // backgroundColor: "#ffcf95",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  ongoingTxt: {
    // color: "#feaa48",
    fontFamily: 'Poppins-Regular',
  },
  headerImg: {
    width: 90,
    height: 90,
  },
  imgCont: {
    alignItems: 'center',
    marginVertical: 3,
  },
});

export default CategoriesCard;
