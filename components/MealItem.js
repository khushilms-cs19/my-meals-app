import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import DefaultText from './DefaultText'
const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <DefaultText>{props.duration}m</DefaultText>
                        <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row',
        width: "100%",
    },
    mealItem:{
        height: 200,
        backgroundColor: "#ddd",
        marginVertical: 10,
        borderRadius: 10,
        overflow: "hidden",
        width: "100%",
    },
    mealHeader:{
        height: "85%",
    },
    mealDetail: {
        paddingHorizontal: 10,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        height: "15%",
    },
    bgImage: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
    },
    title:{
        fontSize: 18,
        fontFamily: "open-sans-bold",
        color: "white",
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingVertical: 5,
        paddingHorizontal: 10,
        textAlign: "center"
    }
})
