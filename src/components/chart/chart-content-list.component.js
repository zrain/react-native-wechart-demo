import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Image,
    Text,
    Platform,
    Keyboard,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native';

const ChartContentListComponent = ({ data }) => {
    const cancelFocusPressHandler = () => {
        Keyboard.dismiss();
    };

    const scrollViewRef = useRef(null);

    const [disabled, setDisabled] = useState(false);

    const renderItem = item => (
        <View style={styles.itemWrapper} key={item.id}>
            <Image style={styles.img} source={item.userInfo.avatarUri} />
            <Text style={styles.itemText}>{item.userInfo.name}</Text>
            <Text style={styles.itemText}>{item.content}</Text>
            <Text style={styles.itemText}>{item.date}</Text>
        </View>
    );

    useEffect(() => {
        let _subscriptions;

        const keyboardShowHandler = () => {
            scrollViewRef?.current?.scrollToEnd({ animated: true });
            setDisabled(true);
        };

        const keyboardHideHandler = () => {
            setDisabled(false);
        };

        if (Platform.OS === 'ios') {
            _subscriptions = [
                Keyboard.addListener('keyboardWillShow', keyboardShowHandler),
                Keyboard.addListener('keyboardWillHide', keyboardHideHandler)
            ];
        } else {
            _subscriptions = [
                Keyboard.addListener('keyboardDidShow', keyboardShowHandler),
                Keyboard.addListener('keyboardDidHide', keyboardHideHandler)
            ];
        }
        return () => {
            _subscriptions.forEach(subscription => {
                subscription.remove();
            });
        };
    }, []);

    return (
        <TouchableWithoutFeedback onPress={cancelFocusPressHandler}>
            <ScrollView
                style={styles.content}
                scrollEnabled={!disabled}
                ref={scrollViewRef}
            >
                {data.map(item => {
                    return renderItem(item);
                })}
            </ScrollView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#ededed'
    },
    itemWrapper: {
        justifyContent: 'center'
    },
    itemText: {
        height: 44,
        marginLeft: 20
    }
});

export default ChartContentListComponent;
