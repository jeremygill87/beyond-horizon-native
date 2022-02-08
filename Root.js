import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FighterSelectionScreen from './src/screens/FighterSelectionScreen';
import BattleScreen from './src/screens/BattleScreen';
import Test from './Test'

import reducers from './src/reducers';

const { Navigator, Screen } = createStackNavigator();

const RootStack = () => (
    <Navigator>
        <Screen name='testing' component={Test} />
        <Screen name='fighterselect' component={FighterSelectionScreen} />
        <Screen name='battles' component={BattleScreen} />
    </Navigator>
)
// const RootStack = createStackNavigator(
//     {
//         FighterSelect: FighterSelectionScreen,
//         Battle: BattleScreen,
//         Test: Test
//     },
//     { initialRouteName: 'Test' }
// )

const AppNavigator = () => (
    <NavigationContainer>
        <RootStack />
    </NavigationContainer>
)

export default AppNavigator;