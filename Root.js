import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FighterSelectionScreen from './components/screens/FighterSelectionScreen';
import BattleScreen from './components/screens/BattleScreen';
import Test from './Test'

import reducers from './src/reducers';

const RootStack = createStackNavigator(
    {
        FighterSelect: FighterSelectionScreen,
        Battle: BattleScreen,
        Test: Test
    },
    { initialRouteName: 'Test' }
)
class BootUp extends Component {
    render() {
        return (
            <RootStack />
        )
    }
}

export default BootUp;