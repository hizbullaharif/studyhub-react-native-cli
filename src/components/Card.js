import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

const Card = (Component) => ({ cardShadowColor, cardBackgroundColor, ...props }) => {
    return (
        <View style={[styles.container, { backgroundColor: cardBackgroundColor, shadowColor: cardShadowColor }]}>
            <Component {...props} />
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        borderRadius: 25,
        elevation: 8,
        shadowColor: "#e3e8ec",
        padding: 16
    }
})

export default Card