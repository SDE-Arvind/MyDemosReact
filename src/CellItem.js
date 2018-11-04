import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CellItem = (property) => {


    return (
        <TouchableOpacity style={styles.containerView}
                          onPress={() => {
                              property.onCellPress(property);
                          }}>
            <Text numberOfLines={2} style={styles.titleStyle}>
                {property.item.title}
            </Text>
            <View style={[styles.rowStyles, {justifyContent: 'space-between'}]}>
                <Text style={{color: "green"}}> {'Votes: ' + property.item.score}</Text>
                <Text style={{color: "green"}}> {'Answers: ' + property.item.answer_count}</Text>
            </View>

            <View style={styles.rowStyles}>
                <Text style={{color: "yellow"}}> {'Author: ' + property.item.owner.display_name}</Text>
            </View>

            <View style={styles.rowStyles}>
                {/*<Text> {'Tags: '+property.item.tags[0]}</Text>*/}
            </View>

        </TouchableOpacity>
    );
};
export default CellItem;

const styles = StyleSheet.create({
    containerView: {
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 10,
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 5, height: 10},
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },

    titleStyle: {
        justifyContent: 'center',
        fontWeight: 'bold'
    },

    rowStyles: {
        marginTop: 5,
        flexDirection: 'row',

    }
});
