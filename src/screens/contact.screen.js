import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ContactScreen = () => {
    return (
        <View style={styles.container}>
            <Text>通讯录</Text>
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

export default ContactScreen;
