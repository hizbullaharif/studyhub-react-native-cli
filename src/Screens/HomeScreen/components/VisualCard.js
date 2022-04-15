import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Color from '../../../assets/Colors/Color';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Avatar from '../../../components/Avatar';

const VisualCard = ({navigation}) => {
  const handImage = require('../../../assets/images/handImage.png');
  const avatar = require('../../../assets/images/avatar.png');

  return (
    <View>
      <View style={styles.iconTxt}>
        <Image style={styles.handImage} source={handImage} />
        <View>
          <Text style={styles.visualTxt}>Visual 3D Course</Text>
          <View style={styles.iconWithCourseVideos}>
            <Octicons
              name="video"
              size={20}
              color={'white'}
              style={styles.videoIcon}
            />
            <Text style={styles.courseVideosTxt}>14 Course Videos</Text>
          </View>
          <View style={styles.dollarDiscount}>
            <Text style={styles.dollar}>$ 130</Text>
            <Text style={styles.discount}>40% Discount</Text>
          </View>
        </View>
      </View>
      <View style={styles.avatarWithStars}>
        <Avatar avatarbackgroundColor={'#ad93ff'} />
        <View style={styles.reviewsStars}>
          <Text style={styles.reviewTxt}>405 Reviews</Text>
          <FontAwesome
            name="star"
            size={16}
            color={'#ffd703'}
            style={styles.star}
          />
          <FontAwesome
            name="star"
            size={16}
            color={'#ffd703'}
            style={styles.star}
          />
          <FontAwesome
            name="star"
            size={16}
            color={'#ffd703'}
            style={styles.star}
          />
          <FontAwesome
            name="star"
            size={16}
            color={'#ffd703'}
            style={styles.star}
          />
          <FontAwesome
            name="star"
            size={16}
            color={'white'}
            style={styles.star}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconTxt: {
    flexDirection: 'row',
  },

  visualTxt: {
    color: Color.backgroundColor,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 26,
  },

  iconWithCourseVideos: {
    flexDirection: 'row',
    marginVertical: 3,
  },

  courseVideosTxt: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },

  handImage: {
    height: 100,
    width: 100,
  },
  videoIcon: {
    marginRight: 12,
    borderRadius: 20,
  },

  dollarDiscount: {
    flexDirection: 'row',
    marginVertical: 3,
  },

  dollar: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    backgroundColor: '#7f5cf7',
    borderRadius: 100,
    width: 70,
    textAlign: 'center',
    marginRight: 10,
  },

  discount: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },

  avatarWithStars: {
    backgroundColor: '#8867f6',
    width: 310,
    padding: 7,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },

  reviewsStars: {
    flexDirection: 'row',
  },
  star: {
    marginRight: 4,
  },
  reviewTxt: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    marginRight: 7,
  },
});

export default VisualCard;
