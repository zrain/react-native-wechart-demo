import React, { useEffect, useRef } from 'react';
import { Platform, Animated, Keyboard } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

const KeyboardAvoidingView = props => {
    const { onKeyboardShow, onKeyboardHide } = props;

    // 用于Animated变化的键盘高度
    const keyboardHeight = useRef(new Animated.Value(0)).current;

    // 用于Animated变化的View向上移动的距离（负数）
    const negativeMarginTop = useRef(new Animated.Value(0)).current;

    // 安全区域视图的inset数据
    const safeAreaInsets = useSafeArea();

    // componentDidMount
    // 注册订阅事件，销毁时同时清除
    useEffect(() => {
        let _subscriptions;

        const keyboardShowHandler = event => {
            const height = event.endCoordinates.height - safeAreaInsets.bottom;
            Animated.parallel([
                Animated.spring(keyboardHeight, {
                    duration: event.duration,
                    stiffness: 1000,
                    damping: 500,
                    mass: 3,
                    toValue: height,
                    useNativeDriver: false
                }),
                Animated.spring(negativeMarginTop, {
                    duration: event.duration,
                    stiffness: 1000,
                    damping: 500,
                    mass: 3,
                    toValue: -height,
                    useNativeDriver: false
                })
            ]).start();

            onKeyboardShow && onKeyboardShow();
        };

        const keyboardHideHandler = event => {
            Animated.parallel([
                Animated.spring(keyboardHeight, {
                    duration: event.duration,
                    stiffness: 1000,
                    damping: 500,
                    mass: 3,
                    toValue: 0,
                    useNativeDriver: false
                }),
                Animated.spring(negativeMarginTop, {
                    duration: event.duration,
                    stiffness: 1000,
                    damping: 500,
                    mass: 3,
                    toValue: 0,
                    useNativeDriver: false
                })
            ]).start();

            onKeyboardHide && onKeyboardHide();
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
    }, [
        keyboardHeight,
        negativeMarginTop,
        onKeyboardHide,
        onKeyboardShow,
        safeAreaInsets.bottom
    ]);

    return (
        <Animated.View
            {...props}
            style={[
                props.style,
                {
                    paddingBottom: keyboardHeight,
                    marginTop: negativeMarginTop
                }
            ]}
        />
    );
};

export default KeyboardAvoidingView;
