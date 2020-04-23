import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppStack from './app.stack.js';
import { ComputerControlScreen } from '@screens';

const ModalStack = createStackNavigator();

const ModalStackScreen = () => {
    return (
        <NavigationContainer>
            <ModalStack.Navigator mode="modal" headerMode="none">
                <ModalStack.Screen name="/app" component={AppStack} />
                <ModalStack.Screen
                    name="/computer-control"
                    component={ComputerControlScreen}
                />
            </ModalStack.Navigator>
        </NavigationContainer>
    );
};

export default ModalStackScreen;
