import * as React from 'react';
import { StyleSheet, VirtualizedList } from 'react-native';
import ChartViewItem from './chart-view-item.component.js';

const ChartListComponent = ({ data }) => {
    const getItemCount = list => {
        return list.length;
    };

    const getItem = (list, index) => {
        const itemData = list[index];
        return itemData;
    };

    const keyExtractor = item => {
        return item && item.id && item.id.toString();
    };

    return (
        <VirtualizedList
            style={styles.chartList}
            data={data}
            initialNumToRender={4}
            renderItem={({ item }) => <ChartViewItem data={item} />}
            keyExtractor={keyExtractor}
            getItemCount={getItemCount}
            getItem={getItem}
        />
    );
};

const styles = StyleSheet.create({
    chartList: {
        flex: 1,
        backgroundColor: '#ededed'
    }
});

export default ChartListComponent;
