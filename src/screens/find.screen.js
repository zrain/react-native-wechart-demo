import * as React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FindScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPress={() => {
                    navigation.navigate('/test-kav');
                }}
            >
                <Text>测试-KeyboardAvoidingComponent</Text>
            </TouchableWithoutFeedback>
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
