import React, { Component } from 'react';
import ReactNative, {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    FlatList,
    Keyboard,
    KeyboardAvoidingView,
    Animated
} from 'react-native';

var dataSources = [];

export default class ChatInput extends Component {
    _keyExtractor = (item, index) => item.id;

    constructor(props) {
        super(props);
        dataSources = this.generateBig();
        console.log(dataSources);
    }

    _renderItem = ({ item }) => (
        <View style={{ justifyContent: 'center' }} key={item.id}>
            <Text key={item.id} style={styles.renderItem}>
                {item.data}
            </Text>
        </View>
    );

    generateBig() {
        var str = [];
        for (var i = 65; i < 91; i++) {
            // str.push(String.fromCharCode(i));
            var dict = {};
            let value = String.fromCharCode(i);
            dict.id = i.toString();
            dict.data = value;
            str.push(dict);
        }
        return str;
    }

    componentWillMount() {
        this.keyboardWillShowSub = Keyboard.addListener(
            'keyboardWillShow',
            this.keyboardWillShow
        );
        this.keyboardWillHideSub = Keyboard.addListener(
            'keyboardWillHide',
            this.keyboardWillHide
        );
    }

    componentWillUnmount() {
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
    }

    keyboardWillShow = event => {
        this.refs.flatList.scrollToIndex({
            animated: true,
            index: this.generateBig().length - 1,
            viewPosition: 0.5
        });
    };

    keyboardWillHide = event => {
        this.refs.flatList.scrollToIndex({
            animated: true,
            index: this.generateBig().length - 1,
            viewPosition: 1.9
        });
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <FlatList
                    ref={'flatList'}
                    data={dataSources}
                    renderItem={this._renderItem}
                    // ItemSeparatorComponent={ItemDivideComponent}
                    keyExtractor={this._keyExtractor}
                />
                <TextInput
                    style={styles.inputView}
                    returnKeyType="search"
                    placeholder="请输入消息"
                />
                <View style={{ height: 20 }} />
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'flex-end',
        backgroundColor: '#F5FCFF',
        flexDirection: 'column'
    },
    list: {
        marginTop: 30
    },
    inputView: {
        height: 45,
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        paddingLeft: 5,
        borderColor: '#ccc',
        borderRadius: 4
    },
    renderItem: {
        height: 44,
        marginLeft: 20
    }
});

class ItemDivideComponent extends Component {
    render() {
        return <View style={{ height: 1, backgroundColor: 'skyblue' }} />;
    }
}

// https://stackoom.com/question/3x7JO/%E5%A6%82%E4%BD%95%E5%AF%B9React-Native-Reanimated%E4%B8%AD%E7%9A%84Keyboard%E4%BA%8B%E4%BB%B6%E5%81%9A%E5%87%BA%E5%8F%8D%E5%BA%94
