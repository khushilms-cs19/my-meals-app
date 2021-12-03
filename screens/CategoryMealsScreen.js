import React from 'react'
import { StyleSheet, Text, View, Button, Platform, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from "../constants/colors";
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam("categoryId");
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId)>=0);
    return <MealList data={displayedMeals} navigation={props.navigation}/>
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam("categoryId");
    const selectedCategory = CATEGORIES.find(cat => cat.id == catId);
    return {
        headerTitle: selectedCategory.title,
    }
}

export default CategoryMealsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: "100%",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    listContainer: {
        width: "90%",
    }
})
