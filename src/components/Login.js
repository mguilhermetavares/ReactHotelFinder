import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <ScrollView>
                <Image source={{ uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/' }} />
                <Text>
                    On iOS, a React Native ScrollView uses a native UIScrollView.
                    On Android, it uses a native ScrollView.

                    On iOS, a React Native Image uses a native UIImageView.
                    On Android, it uses a native ImageView.

                    React Native wraps the fundamental native components, giving you
                    the performance of a native app, plus the clean design of React.
                </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#3498db',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },
    subtitle: {
        color: 'white',
        fontWeight: '200',
        paddingBottom: 20
    },
    titleWrapper: {
        flex: 1,
        justifyContent: 'center'
    }
});