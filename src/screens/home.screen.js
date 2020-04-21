import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from '@yuandana/react-redux-x';
import { ChartListComponent } from '@components';

const HomeScreen = ({ chartList }) => {
    return (
        <View style={styles.wrapper}>
            <ChartListComponent data={chartList} />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    }
});

export default connect(state => {
    return {
        chartList: state.app.HomeModule.chartList
    };
})(HomeScreen);
