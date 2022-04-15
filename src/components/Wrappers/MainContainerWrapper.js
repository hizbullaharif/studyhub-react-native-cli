import { StyleSheet, View } from 'react-native'
import React from 'react'

import Colors from '../../assets/Colors/Color'

const MainContainerWrapper = (Component) => ({ ...props }) => {
    return (
        <View style={styles.container}>
            <Component {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.backgroundColor,
        height: "100%",
        margin: 3
    },
})

export default MainContainerWrapper