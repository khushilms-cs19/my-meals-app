import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen"
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Platform } from "react-native";
import Colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import FiltersScreen from "../screens/FiltersScreen";

const defaultStackNavOptions = {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white",
        },
        headerTitleStyle: {
            fontFamily: "open-sans-bold",
        },
        headerBackTitleStyle: {
            fontFamily: "open-sans",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
    }

const FavoritesNavigator = createStackNavigator({
    Favorites: {
        screen: FavoritesScreen,
    },
    MealDetail: {
        screen: MealDetailScreen,
    }
},{
    defaultNavigationOptions: defaultStackNavOptions,
})

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: "Meals Categories",
        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: {
        screen: MealDetailScreen,
    }
}, {
    defaultNavigationOptions: defaultStackNavOptions,
});

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor,
            tabBarLabel: <Text style={{fontFamily: "open-sans-bold"}}>Meals</Text>
        }
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            tabBarLabel: "Favorites!",
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor,
            tabBarLabel: <Text style={{fontFamily: "open-sans-bold"}}>Favorites</Text>
        }
    }
}

const MealsFavTabNavigator = 
Platform.OS==="android"? 
createMaterialBottomTabNavigator(tabScreenConfig,{
    activeColor: "white",
    shifting: true,
    barStyle: {
        backgroundColor: Colors.primaryColor,
    }
}):
createBottomTabNavigator(tabScreenConfig , {
    tabBarOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: "open-sans",
        }
    }
});

const FiltersStack = createStackNavigator({
    Filters: FiltersScreen,
},{
    navigationOptions: {
        drawerLabel: "Filters!!"
    },
    defaultNavigationOptions: defaultStackNavOptions,
})
const MainNavigator = createDrawerNavigator({
    MealsFav: {
        screen:MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: "Meals",
        }
    },
    Filters: FiltersStack,
},{
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
           fontFamily: "open-sans-bold", 
        }
    }
})

export default createAppContainer(MainNavigator);