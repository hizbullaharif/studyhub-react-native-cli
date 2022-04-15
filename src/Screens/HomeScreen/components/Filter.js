import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign';

const Filter = () => {
    return (
        <AntDesign name='filter' size={23} color={"white"} style={styles.filterIcon} />
    )
}

export default Filter

const styles = StyleSheet.create({
    filterIcon: {
        margin: -8,
    }
})