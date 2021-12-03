import React from 'react'
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Platform } from 'react-native'
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/colors";
import CategoryGridTile from '../components/CategoryGridTile';
import {HeaderButtons, Item} from "react-navigation-header-buttons"
import HeaderButton from "../components/HeaderButton";
const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                color={itemData.item.color}
                title={itemData.item.title}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: "CategoryMeals",
                        params: {
                            categoryId: itemData.item.id,
                        }
                    });
                }} />
        );
    }

    return (
        <FlatList 
            numColumns={2} 
            data={CATEGORIES} 
            renderItem={renderGridItem} 
            keyExtractor={(item, index) => item.id} 
            style={styles.screen} 
        />
    )





    // return (
    //     <View style={styles.screen}>
    //         <Text>The Categories Screen!</Text>
    //         <Button title="Go to meals" onPress={()=>{
    //             props.navigation.replace("CategoryMeals");
    //         }}/>
    //     </View>
    // )
}

CategoriesScreen.navigationOptions = (navigationData)=>{
    return {
        headerTitle: "Meal Categories",
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={()=>{
                navigationData.navigation.toggleDrawer();
            }}/>
        </HeaderButtons>,
    }
};


export default CategoriesScreen;

const styles = StyleSheet.create({
    screen: {
        // flex: 1,
        width: "100%",
        // margin: 10,
    },
})
