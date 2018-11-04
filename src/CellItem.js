import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const CellItem = (property) => {

    return (
        <TouchableOpacity style={styles.containerView}
                          onPress={() => {
                              property.onCellPress(property);
                          }}>
            <Text style={styles.imageViewContainer}>
                {property.item.title}
            </Text>
        </TouchableOpacity>
    );
};
export default CellItem;

const styles = StyleSheet.create({
    containerView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    imageViewContainer: {
        justifyContent: 'center',
        height:100,
    },
});
