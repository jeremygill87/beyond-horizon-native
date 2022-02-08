import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FighterSelectionScreen from './components/screens/FighterSelectionScreen';
import BattleScreen from './components/screens/BattleScreen';

import reducers from './reducers';

const RootStack = createStackNavigator(
    {
        FighterSelect: FighterSelectionScreen,
        Battle: BattleScreen
    },
    { initialRouteName: 'FighterSelect' }
)
class BootUp extends Component {
    render() {
        return (
            <RootStack />
        )
    }
}

export default BootUp;