/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ActivityIndicator, FlatList, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Header, Input, Item} from 'native-base';
import SearchIcon from './resources/search.png'
import CellItem from "./CellItem";

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            searchedText: '',
            response: []
            //     response :[
            //     {
            //         owner: {
            //             display_name: "DiegoP.",
            //             profile_image: "https://www.gravatar.com/avatar/315b95cdcac83705c10ea14e239aeaf5?s=128&d=identicon&r=PG",
            //
            //         },
            //         answer_count: 25,
            //         score: 979,
            //         link: "https://stackoverflow.com/questions/6768793/get-the-full-url-in-php",
            //         title: "Get the full URL in PHP"
            //     },
            //     {
            //         owner: {
            //             profile_image: "https://www.gravatar.com/avatar/315b95cdcac83705c10ea14e239aeaf5?s=128&d=identicon&r=PG",
            //             display_name: "George Mauer",
            //         },
            //         answer_count: 25,
            //         score: 856,
            //         link: "https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router",
            //         title: "Programmatically navigate using react router"
            //     },
            //     {
            //         owner: {
            //             profile_image: "https://www.gravatar.com/avatar/36e4f1786bbe6ec3169a147bf54f91c1?s=128&d=identicon&r=PG",
            //             display_name: "jjujuma",
            //         },
            //
            //         answer_count: 3,
            //         score: 716,
            //         link: "https://stackoverflow.com/questions/1226714/how-to-get-the-browser-to-navigate-to-url-in-javascript",
            //         title: "How to get the browser to navigate to URL in JavaScript"
            //     },
            //     {
            //         owner: {
            //             profile_image: "https://i.stack.imgur.com/8fqP5.jpg?s=128&g=1",
            //             display_name: "MilMike",
            //         },
            //         answer_count: 13,
            //         score: 528,
            //         link: "https://stackoverflow.com/questions/680785/on-window-location-hash-change",
            //         title: "On - window.location.hash - Change?"
            //     },
            //     {
            //         owner: {
            //             profile_image: "https://www.gravatar.com/avatar/469a4a84e0af3168c0e6d17f1b941e75?s=128&d=identicon&r=PG",
            //             display_name: "PhillipKregg",
            //         },
            //         answer_count: 6,
            //         score: 494,
            //         link: "https://stackoverflow.com/questions/12863663/complex-nesting-of-partials-and-templates",
            //         title: "Complex nesting of partials and templates"
            //     },
            //     {
            //         owner: {
            //             profile_image: "https://i.stack.imgur.com/Ots0M.jpg?s=128&g=1",
            //             display_name: "Sergey Tihon",
            //         },
            //         answer_count: 14,
            //         score: 484,
            //         link: "https://stackoverflow.com/questions/38008334/angular-rxjs-when-should-i-unsubscribe-from-subscription",
            //         title: "Angular/RxJs When should I unsubscribe from `Subscription`"
            //     },
            //     {
            //         owner: {
            //             display_name: "user137726"
            //         },
            //         answer_count: 24,
            //         score: 440,
            //         link: "https://stackoverflow.com/questions/1122381/force-div-to-100-of-parent-div-height-without-specifyingparents-height",
            //         title: "Force div to 100% of parent div height without specifyingparent&#39;s height"
            //     },
            //     {
            //         owner: {
            //             profile_image: "https://i.stack.imgur.com/GZRsz.jpg?s=128&g=1",
            //             display_name: "beebcon",
            //         },
            //         answer_count: 20,
            //         score: 421,
            //         link: "https://stackoverflow.com/questions/17074365/status-bar-and-navigation-bar-appear-over-my-views-bounds-in-ios-7",
            //         title: "Status bar and navigation bar appear over my view&#39;s bounds in iOS 7"
            //     },
            //     {
            //         owner: {
            //             profile_image: "https://www.gravatar.com/avatar/3c6597370b476903ed475f70b4b3ce31?s=128&d=identicon&r=PG",
            //             display_name: "EGHDK",
            //         },
            //         answer_count: 5,
            //         score: 389,
            //         link: "https://stackoverflow.com/questions/11377472/navigation-drawer-google-vs-youtube",
            //         title: "Navigation Drawer (Google+ vs. YouTube)"
            //     },
            //     {
            //         owner: {
            //             profile_image: "https://www.gravatar.com/avatar/6c394d34cecf70d88fb50720ca07d023?s=128&d=identicon&r=PG",
            //             display_name: "sozhen",
            //         },
            //         answer_count: 9,
            //         score: 376,
            //         link: "https://stackoverflow.com/questions/11995591/sublime-text-2-show-file-navigation-in-sidebar",
            //         title: "Sublime Text 2 - Show file navigation in sidebar"
            //     }
            // ]
        };
        this.page = 1;
        this.pageSize = 10;
    }

    // pagging on reaches end
    onEndReaches() {
        this.page++;
        this.loadData();

    }

    // load data on query submit
    onSubmitHandler() {
        this.page = 1;
        this.loadData();
    }

    //load data from server
    loadData() {
        // create url to search result
        const url = 'https://api.stackexchange.com/2.2/search/advanced?page=' + this.page + '&pagesize=' + this.pageSize + '&order=desc&sort=votes&q=' + this.state.searchedText + '&site=stackoverflow'

        this.setState({isLoading: true});

        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {

                console.log(responseJson);

                this.setState({
                    isLoading: false,
                    response: this.state.response.concat(responseJson.items),
                });

            })
            .catch((error) => {
                this.setState({isLoading: false});
                console.error(error);
            });
    }

    // Open detail screen
    onCellPress(prop) {
        this.props.navigation.navigate({
            key: 'Details',
            routeName: 'Details',
            params: {
                url: prop.item.link,
                title: prop.item.title,
            }
        });
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

    // render list
    randerList() {
        // this.state.searchedData
        return (
            <View style={{marginBottom: 60}}>
                <FlatList
                    data={this.state.response}
                    renderItem={({item, index}) => {
                        return (
                            <CellItem
                                item={item}
                                itemIndex={index}
                                onCellPress={this.onCellPress.bind(this)}
                            />
                        )
                    }}
                    onEndReached={() => this.onEndReaches()}
                    disableVirtualization={true}/>
            </View>
        )
    }

    // render the Screen UI
    render() {
        return (
            <View style={styles.container}>
                {this.loadSearchHeader()}

                {this.state.isLoading ? <ActivityIndicator
                    animating={this.state.isLoading}
                    color='#ff2600'
                    size="large"
                    style={{justifyContent: 'center', alignItems: 'center'}}/> : null}

                {this.randerList()}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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


