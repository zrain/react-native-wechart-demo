import React from 'react';
import Icon from '@assets/iconfont';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackIconComponent = () => {
    const navigation = useNavigation();

    const onPressHandler = () => {
        navigation.goBack();
    };

    return (
        <TouchableWithoutFeedback activeOpacity={1} onPress={onPressHandler}>
            <View style={styles.wrapper}>
                <Icon name="fanhui" style={styles.backIcon} color="#272727" />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingHorizontal: 12,
        justifyContent: 'center'
    },
    backIcon: {
        flex: 1
    }
});

export default BackIconComponent;
