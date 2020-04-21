import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const MineScreen = () => {
    return (
        <View style={styles.container}>
            <Text>我的</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MineScreen;
