import React from 'react'
import { StyleSheet,Image, Text, View, Button } from 'react-native'
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from '../components/HeaderButton';
import { ScrollView } from 'react-native-gesture-handler';
import DefaultText from '../components/DefaultText';


const ListItem = (props)=>{
    return <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
    </View>
}

const MealDetailScreen = (props) => {
    const mealId = props.navigation.getParam("mealId");
    const mealDetails = MEALS.find((meal) => meal.id === mealId);

    return (
        <ScrollView>
            <Image source={{uri: mealDetails.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                <DefaultText>{mealDetails.duration}m</DefaultText>
                <DefaultText>{mealDetails.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{mealDetails.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {
                mealDetails.ingredients.map((ingredient, index)=>{
                    return <ListItem key={index}>
                        {ingredient}
                    </ListItem>
                })
            }
            <Text style={styles.title}>Steps</Text>
            {
                mealDetails.steps.map((step, index)=>{
                    return <ListItem key={index}>
                        {step}
                    </ListItem>
                })
            }
            <View style={styles.screen}>
                <Text>The Meal Detail Screen! {mealDetails.title}</Text>
                <Button title="Go back to Categories" onPress={() => {
                    props.navigation.popToTop();
                }} />
            </View>
        </ScrollView>
    )
}
MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam("mealId");
    const mealDetails = MEALS.find((meal) => meal.id === mealId);
    return {
        headerTitle: mealDetails.title,
        headerRight: ()=><HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Favorite" iconName="ios-star" onPress={() => {
                console.log("added to the favorite.")
            }} />
        </HeaderButtons>
    }
}
export default MealDetailScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: 200,
    },
    details: {
        flexDirection: "row",
        padding: 15,
        justifyContent: "space-around",
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 22,
        textAlign: "center",
    },
    listItem: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 10,
    }
})
