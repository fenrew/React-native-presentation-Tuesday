import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack"

import CelebHome from "./components/CelebHome"
import CelebrityDetails from "./components/Celebrity"


const RootStack = createStackNavigator(
  {
    Home: CelebHome,
    CelebDetail: CelebrityDetails
  },
  {
    initialRouteName: "Home"
  }
)

const AppContainer = createAppContainer(RootStack)

export default function App() {
  return (
    <AppContainer>

    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: "red"
  }
});
