import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useRef} from 'react';
// import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import {Dimensions} from 'react-native';
import Card from '../../components/Card';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SwipeUpDown from 'react-native-swipe-up-down';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import LessonCard from './components/LessonCard';

const windowHeight = Dimensions.get('window').height;

const Visual = () => {
  return (
    <View>
      <View style={styles.visualTxtwithStars}>
        <Text style={styles.visualTxt}>Visual 3D Course</Text>
        <View style={styles.textwithStars}>
          <FontAwesome
            name="star"
            size={16}
            color={'#ffd703'}
            style={{marginRight: 6}}
          />
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Poppins-SemiBold',
              color: 'black',
            }}>
            4.5
          </Text>
          <AntDesign
            name="download"
            size={21}
            color={'gray'}
            style={styles.downloadIcon}
          />
        </View>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={styles.createdByTxt}>Created By</Text>
        <Text style={styles.nameTxt}>Jane Cooper</Text>
      </View>

      <View style={styles.timeWithPrice}>
        <View style={{flexDirection: 'row'}}>
          <MaterialCommunityIcons
            name="clock-time-nine"
            size={16}
            color={'#a8a5ad'}
            style={{marginRight: 6}}
          />
          <Text>5h 30min - 10 Lessons</Text>
        </View>
        <Text style={styles.dollarTxt}>$130</Text>
      </View>
      <View style={styles.aboutDesc}>
        <Text style={styles.aboutTxt} ript>
          About This Course
        </Text>
        <Text style={styles.descriptionTxt}>
          Graphics Illustration Characteristice from both graphic design and and
          classic illustraition look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for 'lorem ipsum' will uncover many
          web sites still in their infancy and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. 'lorem ipsum' will
          uncover many web sites still in their infancy and web page editors now
          use Lorem Ipsum as their default model text, and a search for 'lorem
          ipsum' will uncover many web sites still in their infancy.
        </Text>
      </View>
    </View>
  );
};

const VisualScreen = ({navigation}) => {
  const VisualCardWrapper = Card(Visual);
  const swipeUpDownRef = useRef();
  const DATA = [
    {
      id: Math.random().toString(),
      time: '04.28',
      title: 'Introduction of 3D Course',
    },
    {
      id: Math.random().toString(),
      time: '10.00',
      title: 'Your First Design',
    },
    {
      id: Math.random().toString(),
      time: '04.28',
      title: 'Introduction of 3D Course',
    },
    {
      id: Math.random().toString(),
      time: '12.30mins',
      title: 'How To Create 3D Character',
    },
    {
      id: Math.random().toString(),
      time: '10.00',
      title: 'Your First Design',
    },
    {
      id: Math.random().toString(),
      time: '10.00',
      title: 'Your First Design',
    },
    {
      id: Math.random().toString(),
      time: '10.00',
      title: 'Your First Design',
    },
    {
      id: Math.random().toString(),
      time: '10.00',
      title: 'Your First Design',
    },
    {
      id: Math.random().toString(),
      time: '10.00',
      title: 'Your First Design',
    },
  ];

  return (
    <View style={styles.container}>
      <VideoPlayer
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        style={styles.backgroundVideo}
        seekColor={'#764cf5'}
        navigator={navigator}
        onBack={() => navigation.goBack()}
      />
      <View>
        <View style={styles.visual}>
          <VisualCardWrapper
            cardBackgroundColor={'#ffffff'}
            cardShadowColor={'#e5e5e5'}
          />
        </View>
        <SwipeUpDown
          ref={swipeUpDownRef}
          itemMini={show => (
            <View
              style={{
                alignItems: 'center',
                // backgroundColor: '#ffffff',
                backgroundColor: 'RGB(248, 248, 248,0.1)',
                height: 60,
              }}>
              <Entypo
                name="chevron-small-up"
                size={30}
                color={'#a8a5ad'}
                // style={{marginRight: 6}}
              />
            </View>
          )}
          itemFull={close => (
            <ScrollView>
              <TouchableWithoutFeedback>
                <View>
                  <TouchableOpacity onPress={close}>
                    <View style={styles.swipeHead}></View>
                  </TouchableOpacity>

                  <View
                    style={{
                      marginHorizontal: 15,
                    }}>
                    <View style={styles.reviewLessons}>
                      <View style={styles.lessonsBtn}>
                        <Text style={styles.lessonsTxt}>Lessons</Text>
                      </View>
                      <View style={styles.reviews}>
                        <Text style={styles.reviewsTxt}>Reviews</Text>
                      </View>
                    </View>
                    <View style={styles.lessonsCard}>
                      {DATA.map((item, key) => (
                        <LessonCard key={key} item={item} />
                      ))}
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </ScrollView>
          )}
          onShowMini={() => console.log('mini')}
          onShowFull={() => console.log('full')}
          animation="spring"
          // extraMarginTop={10}
          extraMarginTop={windowHeight / 5}
          swipeHeight={60}
          iconColor="#424242"
          disablePressToShow={true} // Press item mini to show full
          style={{
            backgroundColor: '#f1eef7',
            color: 'white',
            borderRadius: 100,

            // marginTop: 400,
          }} // style for swipe
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: windowHeight / 3,
    backgroundColor: '#8678ae',
  },
  visual: {
    marginTop: windowHeight / 3,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 4,
  },
  visualTxtwithStars: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'black',
  },
  visualTxt: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    color: '#2d2d2d',
    marginRight: 12,
  },
  textwithStars: {
    flexDirection: 'row',
  },
  downloadIcon: {
    marginLeft: '45%',
  },
  createdByTxt: {
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    marginRight: 5,
  },
  nameTxt: {
    color: '#aa98e6',
    fontFamily: 'Poppins-SemiBold',
  },
  timeWithPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dollarTxt: {
    fontSize: 20,
    color: '#aa9cd8',
    fontFamily: 'Poppins-Medium',
  },
  aboutTxt: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  aboutDesc: {
    marginTop: 8,
  },
  descriptionTxt: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    textAlign: 'justify',
  },

  swipeHead: {
    height: 20,
  },

  reviewLessons: {
    paddingHorizontal: 8,
    backgroundColor: '#fdfdfd',
    borderRadius: 40,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#fafafa',
  },
  reviews: {
    marginRight: 30,
  },
  reviewsTxt: {
    fontSize: 18,
    color: '#9d9d9d',
    fontFamily: 'Poppins-SemiBold',
  },

  lessonsBtn: {
    backgroundColor: '#9271fd',
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 25,
  },
  lessonsTxt: {
    fontSize: 18,
    color: '#fefefe',
    marginHorizontal: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  lessonsCard: {
    marginTop: 20,
  },
});

export default VisualScreen;
