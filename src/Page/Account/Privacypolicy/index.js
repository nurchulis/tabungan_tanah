import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../../styles';

const DeviceWidth = Dimensions.get('window').width
class MemoryHome extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Tabunganku",
        headerStyle: {height: DeviceWidth/8},
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