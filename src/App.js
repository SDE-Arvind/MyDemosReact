/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Header, Input, Item} from 'native-base';
import Toast from 'react-native-simple-toast';
import SearchIcon from './resources/search.png'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowSearchedResults: false,
            searchedText: '',
            searchedData: [],
        };
    }


    // Clearing text from Search Bar
    clearSearchBarText() {
        if (this.state.searchedText.length > 0) {
            this.setState({
                searchedText: '',
                isShowSearchedResults: false,
            });
        } else {
        }
    }

    onSubmitHandler() {

        Toast.showWithGravity("Call API to get data for: " + this.state.searchedText, Toast.LONG, Toast.CENTER);
    }

    // Loading header containing search bar
    loadSearchHeader() {
        return (
            <Header
                searchBar
                rectangle
                autoCorrect={false}
                style={{backgroundColor: 'red'}}
                iosBarStyle="light-content"
                androidStatusBarColor={'red'}
            >
                <Item style={styles.SearchBarClass}>
                    <Input
                        placeholderTextColor='white'
                        style={{color: 'white'}}
                        onChangeText={text => this.setState({
                            searchedText: text
                        })}
                        placeholder={"Search Questions"}
                        value={this.state.searchedText}
                        onSubmitEditing={(event) => this.onSubmitHandler(event)}
                    />
                </Item>
                <View style={{justifyContent: 'center', marginLeft: 5}}>
                    <TouchableOpacity onPress={() => this.onSubmitHandler()}>
                        <Image style={{height: 25, width: 25}} source={SearchIcon}/>
                    </TouchableOpacity>
                </View>
            </Header>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.loadSearchHeader()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    SearchBarClass: {
        backgroundColor: 'red',
        color: 'white',
        borderBottomColor: 'white',
        borderWidth: 10,
    },
    searchResultTextStyle: {
        color: 'red',
        fontSize: 22,
        padding: 10,
    },
    FlatListContainerStyle: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'white',
    },
});


