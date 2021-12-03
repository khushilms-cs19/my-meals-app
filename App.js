import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';
enableScreens();
const fetchFonts = () => {
    return Font.loadAsync({
        "open-sans": require("D:/Courses and prac/React Native Prac/Maximilian course/my-meals-app/assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("D:/Courses and prac/React Native Prac/Maximilian course/my-meals-app/assets/fonts/OpenSans-Bold.ttf"),
    })
}

export default function App() {

    const [fontsLoaded, setFontsLoaded] = useState(false);
    if(!fontsLoaded){
        return <AppLoading startAsync={fetchFonts} onFinish={()=>setFontsLoaded(true)} onError={(Err)=>console(Err)}/>
    }

    return (
        <MealsNavigator/>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
