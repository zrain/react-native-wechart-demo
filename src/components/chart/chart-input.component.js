import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from '@assets/iconfont';

const ChartInputComponent = () => {
    return (
        <View style={styles.warpper}>
            <View style={styles.left}>
                <Icon name="huatongyuyin" size={24} color={'#272727'} />
            </View>
            <View style={styles.inner}>
                <TextInput style={styles.textInput} allowFontScaling={false} />
            </View>
            <View style={styles.right}>
                <Icon name="xiaolian" size={24} color={'#272727'} />
                <Icon name="paizhao" size={24} color={'#272727'} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    warpper: {
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f6f6f6'
    },
    inner: {
        flex: 1
    },
    left: {
        paddingLeft: 10,
        paddingRight: 10
    },
    right: {
        width: 60,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        fontFamily: 'PingFangSC-Regular',
        height: 39,
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#f5f5f5',
        borderRadius: 4,
        backgroundColor: '#ffffff',
        paddingHorizontal: 4,
        paddingVertical: 4
    }
});

export default ChartInputComponent;
