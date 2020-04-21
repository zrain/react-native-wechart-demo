import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const FindScreen = () => {
    return (
        <View style={styles.container}>
            <Text>发现</Text>
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

export default FindScreen;
