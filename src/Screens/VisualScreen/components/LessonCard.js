import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';

const LessonCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.videoIcon}>
        <Octicons name="video" size={17} color={'white'} />
      </View>
      <View>
        <Text style={styles.timeTxt}>04.28 mins</Text>
        <Text style={styles.title}>Introduction of 3D Course</Text>
      </View>
      <View style={styles.chevronIcon}>
        <Entypo name="chevron-small-right" size={18} color={'#9d9d9d'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 6,
    paddingHorizontal: 13,
    backgroundColor: '#fdfdfd',
    borderRadius: 15,
    height: 60,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#fafafa',
  },

  videoIcon: {
    backgroundColor: '#a386fd',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    elevation: 2,
    shadowColor: '#fafafa',
    marginRight: 9,
  },

  timeTxt: {
    fontFamily: 'Poppins-SemiBold',
    color: '#9d9d9d',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
    marginTop: -4,
  },
  chevronIcon: {
    marginLeft: 'auto',
  },
});

export default LessonCard;
