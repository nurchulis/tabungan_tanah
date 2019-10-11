import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../styles';

class MemoryHome extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Produk",
    })

    render() {
        return (
            <View style={Styles.container}>
                <Text>Memory Settings</Text>
                <Icon name="memory" size={48} />

            </View>
        );
    }
}

export default MemoryHome;