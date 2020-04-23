import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from '@yuandana/react-redux-x';
import { ChartViewListComponent } from '@components';

const HomeScreen = ({ viewList }) => {
    return (
        <View style={styles.wrapper}>
            <ChartViewListComponent data={viewList} />
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
        viewList: state.app.ChartModule.viewList
    };
})(HomeScreen);
