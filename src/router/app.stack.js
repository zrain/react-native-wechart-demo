import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ChartScreen, ProfileScreen } from '@screens';
import TestKavScreen from '@screens/test-kav.screen.js';
import { BackIconComponent } from '@components';
import HomeTabs from './home-tabs.js';

const AppStack = createStackNavigator();

// 获取当前页面的 routeName
const getRouteNameByRoute = route => {
    // Access the tab navigator's state using `route.state`
    const routeName = route.state
        ? // Get the currently active route name in the tab navigator
          route.state.routes[route.state.index].name
        : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
          // In our case, it's "Feed" as that's the first screen inside the navigator
          route.params?.screen;
    return routeName;
};

const getHeaderTitle = route => {
    const routeName = getRouteNameByRoute(route);
    switch (routeName) {
        case '/home/contact':
            return '通讯录';
        case '/home/find':
            return '发现';
        case '/home/mine':
            return '我';
        default:
            return '微信';
    }
};

const getHeaderShown = route => {
    const routeName = getRouteNameByRoute(route);
    if (routeName === '/home/mine') {
        return false;
    }
    return true;
};

const getChartScreenHeaderTitle = route => {
    const { itemData = {} } = route?.params;
    const { name = '' } = itemData;
    return name;
};

const getProfileScreenHeaderTitle = route => {
    const { name = '' } = route?.params?.data?.userInfo;
    return name;
};

const MainStackScreen = () => {
    return (
        <AppStack.Navigator>
            <AppStack.Screen
                name="/home"
                component={HomeTabs}
                options={({ route }) => ({
                    headerTitle: getHeaderTitle(route),
                    headerShown: getHeaderShown(route)
                })}
            />
            <AppStack.Screen
                name="/chart"
                component={ChartScreen}
                options={({ route }) => ({
                    headerTitle: getChartScreenHeaderTitle(route),
                    headerBackTitleVisible: false,
                    headerLeft: () => {
                        return <BackIconComponent />;
                    },
                    headerStyle: {
                        backgroundColor: '#ededed'
                    }
                })}
            />
            <AppStack.Screen
                name="/profile"
                component={ProfileScreen}
                options={({ route }) => ({
                    headerTitle: getProfileScreenHeaderTitle(route),
                    headerBackTitleVisible: false,
                    headerLeft: () => {
                        return <BackIconComponent />;
                    },
                    headerStyle: {
                        backgroundColor: '#ededed'
                    }
                })}
            />
            <AppStack.Screen name="/test-kav" component={TestKavScreen} />
        </AppStack.Navigator>
    );
};

export default MainStackScreen;
