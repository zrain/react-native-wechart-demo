import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AvatarList from '@assets/avatar/index.js';

const ChartItemComponent = ({ data }) => {
    const { name, id, date } = data;
    const navigation = useNavigation();
    const [active, setActive] = useState(false);

    const imgSource = AvatarList[id];

    const wrapperStyle = active
        ? [styles.wrapper, styles.activeWrapper]
        : styles.wrapper;

    const onPressInHandler = () => {
        setActive(true);
    };

    const onPressOutHandler = () => {
        setActive(false);
    };

    const onPressHandler = () => {
        navigation.navigate('/chart', {
            itemData: data
        });
    };

    return (
        <TouchableWithoutFeedback
            activeOpacity={1}
            onPressOut={onPressOutHandler}
            onPressIn={onPressInHandler}
            onPress={onPressHandler}
        >
            <View style={wrapperStyle}>
                <View style={styles.imgWrapper}>
                    <Image style={styles.img} source={imgSource} />
                </View>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.nameText}>{name}</Text>
                        <Text style={styles.dateText}>{date}</Text>
                    </View>
                    <View>
                        <Text style={styles.lastChartContentText}>
                            周杰伦: [图片]
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        overflow: 'hidden',
        backgroundColor: '#f7f7f7'
    },
    activeWrapper: {
        backgroundColor: '#dedede'
    },
    imgWrapper: {
        overflow: 'hidden',
        paddingTop: 12,
        paddingBottom: 12,
        marginRight: 12
    },
    img: {
        borderRadius: 5,
        height: 48,
        width: 48
    },
    content: {
        paddingTop: 12,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#e4e4e4',
        flex: 1
    },
    nameText: {
        fontSize: 16,
        paddingTop: 4,
        paddingBottom: 4,
        color: '#131313',
        fontWeight: '400'
    },
    dateText: {
        position: 'absolute',
        fontSize: 12,
        color: '#c6c6c6',
        right: 0,
        marginTop: 4
    },
    lastChartContentText: {
        fontSize: 14,
        paddingTop: 4,
        paddingBottom: 4,
        color: '#acacac'
    }
});

export default ChartItemComponent;
