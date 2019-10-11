import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'react-native-elements';
import Styles from '../../../styles';

const DeviceWidth = Dimensions.get('window').width
class MemoryHome extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Selamat proses pembelian berhasil",
        headerStyle: {height: DeviceWidth/8},
    })

    render() {
        return (
            <View style={Styles.container}>

                <Text style={{fontSize:20}}>Selamat pembelin produk berhasil</Text>

            <View style={{ alignItems: 'center' }}>
            
            <Image source={require('../../../components/assets/icon/pay.png')}  style={{margin:15, width:150, height:150}} />        
                       <Text style={{fontSize:15}}>Silakan ikuti langkah dengan klik tombol dibawah</Text>
          
                       <Button
                        onPress={() => this.props.navigation.navigate("DetailTabunganku")}
                         title="Langkah cicilan" buttonStyle={{marginTop:30, fontSize:25}}/>           
                        </View>

            </View>
        );
    }
}

export default MemoryHome;