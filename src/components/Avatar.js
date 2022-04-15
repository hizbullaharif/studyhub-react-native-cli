import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
const avatar = require('../assets/images/avatar.png')


const Avatar = ({ avatarbackgroundColor }) => {
    return (
        <View style={styles.avatar}>
            <Image style={[styles.avatarImg, { backgroundColor: avatarbackgroundColor }]} source={avatar} />
            <Image style={[styles.avatarWithBackMargin, { backgroundColor: avatarbackgroundColor }]} source={avatar} />
            <Image style={[styles.avatarWithBackMargin, { backgroundColor: avatarbackgroundColor }]} source={avatar} />
            <Image style={[styles.avatarWithBackMargin, { backgroundColor: avatarbackgroundColor }]} source={avatar} />
            <View style={[styles.avatarTxtContainer, { backgroundColor: avatarbackgroundColor }]}>
                <Text style={styles.avatarTxt}>5+</Text>
            </View>
        </View>
    )
}

export default Avatar

const styles = StyleSheet.create({
    avatarImg: {
        width: 28,
        height: 28,
        // backgroundColor: "#ac92fe",

        borderColor: "white",
        borderWidth: 0.2,
        borderRadius: 15,
        marginLeft: 3,
        borderWidth: 0.3,
    },
    avatar: {
        flexDirection: "row"
    },

    avatarWithBackMargin: {
        marginLeft: -10,
        width: 28,
        height: 28,
        // backgroundColor: "#ac92fe",
        borderColor: "white",
        borderWidth: 0.2,
        borderRadius: 15,
        borderWidth: 0.3,
    },
    avatarTxtContainer: {
        width: 28,
        height: 28,
        // backgroundColor: "#ac92fe",
        borderColor: "white",
        borderWidth: 0.5,
        borderRadius: 15,
        marginLeft: 3,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: -10,
    },
    avatarTxt: {
        color: "white"
    },
})