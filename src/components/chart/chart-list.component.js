import * as React from 'react';
import { StyleSheet, VirtualizedList } from 'react-native';
import ChartItem from './chart-item.component.js';

const ChartListComponent = ({ data: listData = [] }) => {
    const getItemCount = data => {
        return data.length;
    };

    const getItem = (data, index) => {
        const itemData = data[index];
        return itemData;
    };

    const keyExtractor = item => {
        return item && item.id && item.id.toString();
    };

    return (
        <VirtualizedList
            style={styles.chartList}
            data={listData}
            initialNumToRender={4}
            renderItem={({ item }) => <ChartItem data={item} />}
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
