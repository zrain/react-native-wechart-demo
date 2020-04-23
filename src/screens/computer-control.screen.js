import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const ComputerControlScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>电脑控制 Modal</Text>
            <Button onPress={() => navigation.goBack()} title="Dismiss" />
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

export default ComputerControlScreen;
