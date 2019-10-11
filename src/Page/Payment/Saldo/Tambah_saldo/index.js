import React, { Component } from 'react';
import { View, Text,Dimensions, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Card} from 'react-native-elements'
import Styles from '../../../../styles';


const DeviceWidth = Dimensions.get('window').width
class MemoryHome extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Tambah Saldo",
        headerStyle: {
            height: DeviceWidth/8,
            elevation: 0,
            },
        headerRight: (
            <TouchableOpacity
            style={Styles.headerButton}
            onPress={() => navigation.navigate("Akun")} >
            <Icon name="question-circle" size={25} color="#2c3e50"/>
          </TouchableOpacity>
          ),
    })

    render() {
        return (

            <View style={styles.container}>
<Card
  containerStyle={{borderRadius:10,
        justifyContent: "center",
        width:'90%',
        alignItems: "center", padding:20, backgroundColor:'white'}}
  >
  <Image source={require('../../../../components/assets/icon/debit-card.png')}  style={{margin:15, width:150, alignSelf:'center', height:150}} />
                <Text style={{fontSize:20}}>Kode Tagihan Pembayaran Anda</Text>
                <Text style={{fontSize:25, marginTop:5, color:'#34495e',textAlign:'center'}}>8920192942</Text>

                
            <View style={{flexDirection:"row", alignSelf:'center'}}>
           
                <Text style={{fontSize:15, marginTop:5, color:'#2980b9',textAlign:'center'}}>
                <Icon name="redo" size={13} color="#2980b9" />
                Perbarui</Text>
                </View>

                <Text style={{marginTop:30, textAlign:'center'}}>Cara Pembayaran?</Text>


                <Text style={{marginTop:30, textAlign:'center'}}>Metode Pembayaran?</Text>


</Card>
            </View>

        );
    }
}

export default MemoryHome;
const styles = StyleSheet.create({
  
    container:{
        flex: 1,
        top:0,
        alignItems: "center",
        backgroundColor:"#FFFFFF",
    },
  });