import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChartContentItemComponent = ({ data }) => {
    const navigation = useNavigation();

    const selfInnerStyle = {};

    const selfImgWrapperStyle = {};

    const seflContentStyle = {};

    if (data.userInfo.isSelf === true) {
        selfInnerStyle.flexDirection = 'row-reverse';

        selfImgWrapperStyle.marginLeft = 12;
        selfImgWrapperStyle.marginRight = 0;

        seflContentStyle.marginLeft = 50;
        seflContentStyle.marginRight = 0;
        seflContentStyle.backgroundColor = '#a9e979';
    }

    const onPressHandler = () => {
        navigation.navigate('/profile', {
            data
        });
    };

    return (
        <View style={styles.wrapper}>
            <View style={[styles.inner, selfInnerStyle]}>
                <TouchableWithoutFeedback onPress={onPressHandler}>
                    <View style={[styles.imgWrapper, selfImgWrapperStyle]}>
                        <Image
                            style={styles.img}
                            source={data.userInfo.avatarUri}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <View style={[styles.content, seflContentStyle]}>
                    <Text style={styles.contentText}>{data.content}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginVertical: 8,
        marginHorizontal: 12
    },
    inner: {
        minHeight: 40,
        flex: 1,
        flexDirection: 'row'
    },
    content: {
        flex: 1,
        overflow: 'hidden',
        marginRight: 50,
        padding: 12,
        backgroundColor: '#ffffff',
        borderRadius: 4
    },
    contentText: {
        fontFamily: 'PingFangSC-Light',
        fontSize: 15,
        letterSpacing: 1,
        fontWeight: '400',
        color: '#061d01'
    },
    imgWrapper: {
        marginRight: 12
    },
    img: {
        height: 40,
        width: 40,
        borderRadius: 4
    }
});

export default ChartContentItemComponent;
