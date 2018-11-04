import React, {Component} from 'react';
import {StyleSheet, Text, View, WebView} from 'react-native';
import {Body, Header} from "native-base";

class DetailScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            url: this.props.navigation.state.params.url,
            title: this.props.navigation.state.params.title,
        };
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header
                    androidStatusBarColor={'red'}
                    style={{backgroundColor: 'red',}}>
                    <Body
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "flex-start"
                        }}>
                    <Text numberOfLines={1} style={styles.header}>{this.state.title} </Text>

                    </Body>
                </Header>

                <WebView
                    source={{uri: this.state.url}}
                />
            </View>
        );
    }
}

export default DetailScreen;

const styles = StyleSheet.create({
    header: {color: 'white', fontWeight: 'bold'},
});

