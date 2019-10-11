import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Picker, ImageBackground, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../../styles';
import { Card, ListItem, Button, Divider} from 'react-native-elements'
import { FlatGrid } from 'react-native-super-grid';
import { Dropdown } from 'react-native-material-dropdown';
const DeviceWidth = Dimensions.get('window').width
const DeviceHeight = Dimensions.get('window').height

class HomeProduk extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Pilih jenis Pembayaran",
        headerStyle: {height: DeviceWidth/8},
       

        headerRight: (
          <TouchableOpacity
          style={Styles.headerButton}
          onPress={() => navigation.navigate("Bookmark")} >
          <Text>Skema Cicilan</Text>
        </TouchableOpacity>
        )

    })
    
    render() {
      let data = [{
        value: 'Dengan saldo',
      }, {
        value: 'Pembayaran langsung',
      }
      ];
        const items = [
            { 'key':'1',name: 'Sedayu Residence', code: '#1abc9c', angsuran:'Rp. 15.000.000', bulan:'12'}, 
            { 'key':'2',name: 'Giripeni Permai', code: '#2ecc71', angsuran:'Rp. 25.000.000', bulan:'8' },
            { 'key':'3',name: 'Claster Indah Giripeni', code: '#3498db', angsuran:'Rp. 45.000.000', bulan:'4'},
            { 'key':'4',name: 'Jasmine Village Sumberadi', code: '#e74c3c',  angsuran:'Rp. 65.000.000', bulan:'3' },
            
          ];
      
        return (
          <React.Fragment>
            <View style={styles.container}>
            
            
            <View style={{flexDirection:"row", padding:10}}>
            <Text style={{textAlign:'left', marginLeft:10, color:'#f39c12', fontSize:15}}>
                Saldo Anda: Rp. 500.000.000
            </Text>
            <TouchableOpacity
            style={{position: 'absolute', right: 0}}
            onPress={() => this.props.navigation.navigate("Tambah_saldo")}
            >
            <Text style={{color:'#2980b9', padding:10}}>
                Tambah saldo
            </Text>
            </TouchableOpacity>
            </View>
            <Divider style={{ backgroundColor: '#34495e', marginTop:10 }} />

            <View style={{flexDirection:"row", padding:10}}>
            <Text style={{marginTop:15, fontSize:20}}>Pilih metode :</Text>
            <Dropdown
             containerStyle={{width:DeviceWidth/2,  marginTop:-15, marginLeft:20}}
        label='Dipilih'
        data={data}
      />
            </View>

                <FlatGrid
        itemDimension={130}
        items={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Text style={styles.angsuranTitle}>{item.angsuran}</Text>
          <Text style={{color:'white', fontSize:20}}>{item.bulan} Bulan</Text>
          </View>
        )}
      />
            </View>
            <View style={ styles.bottomView} >

        <View style={{flexDirection:"row", width:DeviceWidth}}>           
       <Button
        onPress={() => this.props.navigation.navigate("Done")}
        title="Selanjutnya" buttonStyle={{width:DeviceWidth, height:DeviceWidth/7 }} />
      </View>

      </View>   
      </React.Fragment>
        );
        
    }
}

export default HomeProduk;
const styles = StyleSheet.create({
    gridView: {
      marginTop: 10,
      flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor:"#FFFFFF",
    },
    itemContainer: {
      borderRadius: 5,
      padding: 0,
      height: 150,
      flex:1,justifyContent: "center",alignItems: "center"
    },
    angsuranTitle:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'

    },
    itemCode: {
      fontWeight: '400',
      fontSize: 12,
      backgroundColor: 'rgba(43, 61, 79, 0.45)',
      color: '#fff',
    },
    headerButton: {
      height: 44,
      width: 60,
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  },
  bottomView:{
 
    width: DeviceWidth,
    padding:0, 
    height: DeviceWidth/7, 
    backgroundColor: '#FF9800', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
  });