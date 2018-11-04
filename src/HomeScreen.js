/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Header, Input, Item} from 'native-base';
import Toast from 'react-native-simple-toast';
import SearchIcon from './resources/search.png'
import CellItem from "./CellItem";

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowSearchedResults: false,
            searchedText: '',
            searchedData: [],
        };

        this.response = [
            {
                title: "Question dsaf safds afds sdg ffsdfgsdfgdgdgfh gdfhgdhfgds sdfgd afdgsf ",
                vote: "4",
                answers: "5",
                link: "http://stackoverflow.com/questions/53012847/onenote-copynotebook-function-suddenly-failing",
                author: "Arvind",
                profile_pic: "https://www.gravatar.com/avatar/eab35aabc62faba99083980e2ee3a885?s=128&d=identicon&r=PG&f=1",
                tags: ["android", "ios", "react"]
            },
            {
                title: "Question 2",
                vote: "4",
                answers: "5",
                link: "https://stackoverflow.com/questions/53012847/onenote-copynotebook-function-suddenly-failing",
                author: "Arvind",
                profile_pic: "https://www.gravatar.com/avatar/eab35aabc62faba99083980e2ee3a885?s=128&d=identicon&r=PG&f=1",
                tags: ["android", "ios", "react"]
            },
            {
                title: "Question 3",
                vote: "4",
                answers: "5",
                link: "https://stackoverflow.com/questions/53012847/onenote-copynotebook-function-suddenly-failing",
                author: "Arvind",
                profile_pic: "https://www.gravatar.com/avatar/eab35aabc62faba99083980e2ee3a885?s=128&d=identicon&r=PG&f=1",
                tags: ["android", "ios", "react"]
            },
            {
                title: "Question 4",
                vote: "4",
                answers: "5",
                link: "https://stackoverflow.com/questions/53012847/onenote-copynotebook-function-suddenly-failing",
                author: "Arvind",
                profile_pic: "https://www.gravatar.com/avatar/eab35aabc62faba99083980e2ee3a885?s=128&d=identicon&r=PG&f=1",
                tags: ["android", "ios", "react"]
            },
            {
                title: "Question 5",
                vote: "4",
                answers: "5",
                link: "https://stackoverflow.com/questions/53012847/onenote-copynotebook-function-suddenly-failing",
                author: "Arvind",
                profile_pic: "https://www.gravatar.com/avatar/eab35aabc62faba99083980e2ee3a885?s=128&d=identicon&r=PG&f=1",
                Tags: ["android", "ios", "react"]
            }, {
                title: "Question 5",
                vote: "4",
                answers: "5",
                link: "http://stackoverflow.com/questions/53012847/onenote-copynotebook-function-suddenly-failing",
                author: "Arvind",
                profile_pic: "https://www.gravatar.com/avatar/eab35aabc62faba99083980e2ee3a885?s=128&d=identicon&r=PG&f=1",
                tags: ["android", "ios", "react"]
            }, {
                title: "Question 6",
                vote: "4",
                answers: "5",
                link: "https://stackoverflow.com/questions/53012847/onenote-copynotebook-function-suddenly-failing",
                author: "Arvind",
                profile_pic: "https://www.gravatar.com/avatar/eab35aabc62faba99083980e2ee3a885?s=128&d=identicon&r=PG&f=1",
                tags: ["android", "ios", "react"]
            },
        ]
    }

    onSubmitHandler() {

        Toast.showWithGravity("Call API to get data for: " + this.state.searchedText, Toast.LONG, Toast.CENTER);
    }

    onCellPress(prop) {
        this.props.navigation.navigate({
            key: 'Details',
            routeName: 'Details',
            params: {
                url: prop.item.link,
                title: prop.item.title,
            }
        });

        Toast.showWithGravity("Cell Pressed: " + prop.item.title + this.state.searchedText, Toast.LONG, Toast.CENTER);
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
                {this.randerList()}
            </View>
        );
    }

    randerList() {
        return (
            <View>
                <FlatList
                    style={{backgroundColor: 'lightgray'}}
                    data={this.response}
                    renderItem={({item, index}) => {
                        return (
                            <CellItem
                                item={item}
                                itemIndex={index}
                                onCellPress={this.onCellPress.bind(this)}
                            />
                        )
                    }}
                />
            </View>
        )
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


