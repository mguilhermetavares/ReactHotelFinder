import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions,
    Alert
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Splash extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../images/welcome_screen.jpg')} style={styles.wrapper}>
                    <View style={styles.container}>
                        <View style={styles.TopWrapper}>
                            <Text style={styles.title}>Boas vindas ao Aposentando.me!</Text>
                        </View>
                        <View style={styles.centerWrapper}>
                            <Text style={styles.title}>Vamos simular a sua aposentadoria?</Text>
                        </View>
                        <View style={styles.bottomWrapper}>
                            <Text style={styles.subtitle}>Primeira vez aqui?</Text>
                            <Text style={styles.title} onPress={(this.onLogin.bind(this))}>Não Sim</Text>
                        </View>
                    </View>
                </Image>
            </View>
        );
    }
    onLogin(){
        Alert.alert("teste");
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        width: windowWidth,
        height: windowHeight,
        flex: 1,
        resizeMode: 'cover'
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 20 
    },
    subtitle: {
        color: 'white',
        fontWeight: '200',
        fontSize: 26
    },
    TopWrapper: {
        flex: 1,

        justifyContent: 'center'
    },
    centerWrapper: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    bottomWrapper: {
        flex: 1,
        justifyContent: 'flex-end'
    }
});
