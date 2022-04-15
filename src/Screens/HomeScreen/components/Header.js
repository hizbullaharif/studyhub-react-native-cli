import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'

const Header = () => {
    const profileImg = require('../../../assets/images/profile.jpg')
    return (
        <View style={styles.container}>
            <View style={styles.headerIcon}>
                <FontAwesomeIcon icon={faBars} size={20} />
            </View>
            <View><Text style={styles.headerTxt}>Study Hub</Text></View>
            <View style={styles.imgContainer}><Image style={styles.headerImage} source={profileImg} /></View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        margin: 10,
        alignItems: "center"
    },


    headerIcon: {
        width: 40,
        height: 40,
        backgroundColor: "#f8f8f8",
        padding: 10,
        elevation: 2,
        borderRadius: 13
    },
    headerImage: {
        width: 40,
        height: 40,
        borderRadius: 13,
    },
    imgContainer: {
        // elevation: 2,
        overflow: "hidden"
    },
    headerTxt: {
        fontFamily: "Poppins-Medium",
        fontSize: 30,
        color: "#303030",
        marginTop: 3
    }
})