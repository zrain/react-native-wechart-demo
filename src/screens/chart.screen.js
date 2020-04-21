import React, { Component } from 'react';
import ReactNative, {
    View,
    Text,
    Platform,
    TextInput,
    StyleSheet,
    SafeAreaView,
    KeyboardAvoidingView
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from '@assets/iconfont';

class ChartScreen extends Component {
    scrollRef = null;

    // scrollToInput = reactNode => {
    //     this.scrollRef.props.scrollToFocusedInput(reactNode);
    // };

    // textInputOnFocus = event => {
    //     console.info(this);
    //     this.scrollToInput(ReactNative.findNodeHandle(event.target));
    // };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView
                    style={styles.wrapper}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    {/* 聊天记录区域 */}
                    {/* <KeyboardAwareScrollView
                        style={styles.content}
                        innerRef={ref => {
                            this.scrollRef = ref;
                        }}
                    >
                        <Text>聊天</Text>
                    </KeyboardAwareScrollView> */}
                    <View style={styles.content}>
                        <Text>聊天</Text>
                    </View>
                    {/* 输入框区域 */}
                    <View style={styles.inputWrapper}>
                        <View style={styles.inputLeft}>
                            <Icon
                                name="huatongyuyin"
                                size={24}
                                color={'#272727'}
                            />
                        </View>
                        <View style={styles.inputInner}>
                            <TextInput
                                style={styles.textInput}
                                // onFocus={this.textInputOnFocus}
                            />
                        </View>
                        <View style={styles.inputRight}>
                            <Icon name="xiaolian" size={24} color={'#272727'} />
                            <Icon name="paizhao" size={24} color={'#272727'} />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6'
    },
    // awareScrollWrapper: {
    //     flex: 1
    // },
    wrapper: {
        flex: 1,
        backgroundColor: '#ededed'
    },
    content: {
        flex: 1
    },
    inputWrapper: {
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f6f6f6'
    },
    inputInner: {
        flex: 1
    },
    inputLeft: {
        paddingLeft: 10,
        paddingRight: 10
    },
    inputRight: {
        width: 60,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        height: 39,
        borderWidth: 1,
        borderColor: '#f5f5f5',
        borderRadius: 4,
        backgroundColor: '#ffffff'
    }
});

export default ChartScreen;
