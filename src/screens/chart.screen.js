import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import {
    ChartInputComponent,
    ChartContentListComponent,
    KeyboardAvoidingView
} from '@components';
import { connect } from '@yuandana/react-redux-x';

const ChartScreen = ({ chartHistory }) => {
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.wrapper}
                onKeyboardShow={this.onKeyboardShowHandler}
            >
                {/* 聊天内容区域 */}
                <ChartContentListComponent data={chartHistory} />
                {/* 聊天输入区域 */}
                <ChartInputComponent />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6'
    },
    wrapper: {
        flex: 1,
        backgroundColor: '#f6f6f6'
    },
    renderItem: {
        height: 44,
        marginLeft: 20
    }
});

export default connect(state => {
    return {
        chartHistory: state.app.ChartModule.history
    };
})(ChartScreen);
