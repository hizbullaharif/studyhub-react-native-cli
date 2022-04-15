import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign';

import Filter from './Filter';

import Card from '../../../components/Card'

import Color from '../../../assets/Colors/Color'

const Search = () => {

    const Cardfilter = Card(Filter)
    const onPress = () => {
        console.log("filtered presses")
    }
    return (
        <View>
            <View style={styles.searchContainer}>
                <AntDesign name='search1' size={20} color={"#353535"} style={styles.searchIcon} />
                <View >
                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                    />
                </View>
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.filter}>
                        <Cardfilter cardBackgroundColor={Color.cardBackgroundColor} cardShadowColor={Color.cardShadowColor} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: 25
    },

    searchIcon: {
        // marginLeft: -2,
    },
    input: {
        height: 40,
        // borderWidth: 1,
        padding: 10,
        fontSize: 20,
        width: 250,
        // marginRight: 12,
        marginLeft: -4
    },
    filter: {
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Search