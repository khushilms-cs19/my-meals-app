import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/colors";
const FilterSwitch = (props) => {
    return <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch
            value={props.state}
            onValueChange={props.onChange}
            trackColor={{ true: Colors.primaryColor }}
            thumbColor={Colors.primaryColor}
        />
    </View>
}
const FiltersScreen = (props) => {
    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            isVegetarian: isVegetarian,
        }
        console.log(appliedFilters);
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);
    useEffect(() => {
        navigation.setParams({
            save: saveFilters,
        })
        saveFilters();
    }, [saveFilters]);
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch
                label={"Gluent Free"}
                state={isGlutenFree}
                onChange={newValue => setIsGlutenFree(newValue)}
            />
            <FilterSwitch
                label={"Lactose-free"}
                state={isLactoseFree}
                onChange={newValue => setIsLactoseFree(newValue)}
            />
            <FilterSwitch
                label={"Vegan"}
                state={isVegan}
                onChange={newValue => setIsVegan(newValue)}
            />
            <FilterSwitch
                label={"Vegetarian"}
                state={isVegetarian}
                onChange={newValue => setIsVegetarian(newValue)}
            />
        </View>
    )
}

FiltersScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: "Filter Meals",
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                navigationData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Save" iconName="ios-save" onPress={() => {
                console.log("saving filters");
                navigationData.navigation.getParam("save")();
            }} />
        </HeaderButtons>
    }
}
export default FiltersScreen;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 20,
        margin: 20,
        textAlign: "center",
    },
    filterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 30,
        marginVertical: 10,
    }
})
