import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@assets/iconfont';
import { HomeScreen, ContactScreen, FindScreen, MineScreen } from '@screens';

const HomeTab = createBottomTabNavigator();

const HomeStackScreen = () => {
    return (
        <HomeTab.Navigator>
            <HomeTab.Screen
                name="/home/chart"
                component={HomeScreen}
                options={{
                    title: '微信',
                    tabBarIcon: () => {
                        return <Icon name="weixin" />;
                    }
                }}
            />
            <HomeTab.Screen
                name="/home/contact"
                component={ContactScreen}
                options={{
                    title: '通讯录',
                    tabBarIcon: () => {
                        return <Icon name="tongxunlu" />;
                    }
                }}
            />
            <HomeTab.Screen
                name="/home/find"
                component={FindScreen}
                options={{
                    title: '发现',
                    tabBarIcon: () => {
                        return <Icon name="zhinanzhen" />;
                    }
                }}
            />
            <HomeTab.Screen
                name="/home/mine"
                component={MineScreen}
                options={{
                    title: '我',
                    tabBarIcon: () => {
                        return <Icon name="wo" />;
                    }
                }}
            />
        </HomeTab.Navigator>
    );
};

export default HomeStackScreen;
