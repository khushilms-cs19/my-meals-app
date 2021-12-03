import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import MealItem from './MealItem';
import { MEALS } from '../data/dummy-data';
const MealList = (props) => {
    const catId = props.navigation.getParam("categoryId");
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId)>=0);
    const renderMealItem = (itemData)=>{
        return (
            <MealItem 
                title={itemData.item.title} 
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability = {itemData.item.affordability}
                onSelectMeal = {()=>{
                    props.navigation.navigate({
                        routeName: "MealDetail",
                        params: {
                            mealId: itemData.item.id,
                        }
                    })
                }}
                image={itemData.item.imageUrl}
            />
        )
    }
    return (
        <View style={styles.screen}>
            <View style={styles.listContainer}>
                <FlatList data={props.data} renderItem={renderMealItem} keyExtractor={(item, index)=> item.id}/>
            </View>
        </View>
    )
}

export default MealList;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: "100%",
        padding: 10,
        alignItems: "center",
    },
    listContainer: {
        width: "90%",
    }
})
