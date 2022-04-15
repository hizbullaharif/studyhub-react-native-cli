import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Card from '../../components/Card';

import VisualCard from './components/VisualCard';
import Color from '../../assets/Colors/Color';
import CategoriesCards from './components/CategoriesCards';

const HomeScreen = ({navigation}) => {
  console.log(navigation);
  const SearchWithWrapperCard = Card(Search);
  const VisualWithWrapperCard = Card(VisualCard);
  // const CategoriesCardswrapper = Card(CategoriesCards)

  return (
    <View>
      <Header />
      <View style={styles.search}>
        <SearchWithWrapperCard
          cardBackgroundColor={'#ffffff'}
          cardShadowColor={'#b2b3b3'}
        />
      </View>

      <View style={styles.search}>
        <TouchableOpacity onPress={() => navigation.navigate('visualscreen')}>
          <VisualWithWrapperCard
            cardBackgroundColor={Color.cardBackgroundColor}
            cardShadowColor={Color.cardShadowColor}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.categories}>
        <Text style={styles.categoriesTxt}>Categories</Text>
        <Text style={styles.seeallTxt}>See All</Text>
      </View>

      {/* <View style={styles.cardContainer}>
                <CategoriesCardswrapper cardBackgroundColor={"#ffaf55"} cardShadowColor={"#ffaf55"} />
            </View> */}
      <CategoriesCards />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 220,
  },
  search: {
    marginVertical: 16,
    marginHorizontal: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 12,
    marginVertical: 5,
  },
  categoriesTxt: {
    fontSize: 28,
    fontFamily: 'Poppins-Medium',
    color: '#111111',
  },
  seeallTxt: {
    fontSize: 23,
    fontFamily: 'Poppins-Medium',
    color: Color.cardBackgroundColor,
  },
});

export default HomeScreen;
