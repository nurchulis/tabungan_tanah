import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome5';
import ImageZoom from 'react-native-image-pan-zoom';/* You have to install this package*/
import Styles from '../../../styles';

import { Button, Divider} from 'react-native-elements'
import { FlatGrid } from 'react-native-super-grid';
const DeviceWidth = Dimensions.get('window').width

class HomeProduk extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Pilih Kavling",
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
        
        
        const items = [
            { 'key':'1',name: 'A1', luas:'222', code: '#e74c3c', angsuran:'Rp. 15.000.000', bulan:'12'}, 
            { 'key':'2',name: 'A2', luas:'222', code: '#e74c3c', angsuran:'Rp. 25.000.000', bulan:'8' },

            { 'key':'9',name: 'B1', luas:'222', code: '#3498db', angsuran:'Rp. 15.000.000', bulan:'12'}, 
            { 'key':'10',name: 'B2', luas:'222', code: '#3498db', angsuran:'Rp. 25.000.000', bulan:'8' },
            { 'key':'11',name: 'B3', luas:'222', code: '#3498db', angsuran:'Rp. 45.000.000', bulan:'4'},


            { 'key':'17',name: 'C1', luas:'222', code: '#9b59b6', angsuran:'Rp. 15.000.000', bulan:'12'}, 
            { 'key':'18',name: 'C2', luas:'222', code: '#9b59b6', angsuran:'Rp. 25.000.000', bulan:'8' },
            { 'key':'19',name: 'C3', luas:'222', code: '#9b59b6', angsuran:'Rp. 45.000.000', bulan:'4'},
            { 'key':'20',name: 'C4', luas:'222', code: '#9b59b6',  angsuran:'Rp. 65.000.000', bulan:'3' },


            { 'key':'17',name: 'C1', luas:'222', code: '#2ecc71', angsuran:'Rp. 15.000.000', bulan:'12'}, 
            { 'key':'18',name: 'C2', luas:'222', code: '#2ecc71', angsuran:'Rp. 25.000.000', bulan:'8' },
            { 'key':'19',name: 'C3', luas:'222', code: '#2ecc71', angsuran:'Rp. 45.000.000', bulan:'4'},
            { 'key':'20',name: 'C4', luas:'222', code: '#2ecc71',  angsuran:'Rp. 65.000.000', bulan:'3' },
            

          ];
      
        return (
          <React.Fragment>
            <View style={styles.container}>
            
            
            
            <View style={{flexDirection:"row", padding:10}}>
            <Text style={{textAlign:'left', marginLeft:10, color:'#f39c12',fontWeight:'700', fontSize:20}}>
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
          <View style={{height:200, alignContent:'flex-start', marginVertical:10}}>
          <ImageZoom cropWidth={DeviceWidth}
                      cropHeight={DeviceWidth/2}
                      imageWidth={200}
                      imageHeight={200}>
               <Image style={{width:200, height:200, alignContent:'flex-start', alignItems:'flex-start'}}
                      source={{uri:'https://s3-ap-southeast-1.amazonaws.com/propertytoday/qvjuiadstfxwlkpohyzcrenmgfgh_41.jpg'}}/>
           </ImageZoom>  
          </View>
                <FlatGrid
        itemDimension={150}
        items={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Text style={styles.angsuranTitle}>{item.name}</Text>
          <Text style={styles.angsuranTitle}>{item.angsuran}</Text>
          
          <Text style={{color:'white', fontSize:15}}>{item.luas} m2</Text>
          </View>
        )}
      />
            </View>
            <View style={ styles.bottomView} >

        <View style={{flexDirection:"row", width:DeviceWidth}}>           
       <Button
        onPress={() => this.props.navigation.navigate("Skema")}
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
      marginBottom:60,
    },
    container: {
        flex: 1,
        backgroundColor:"#FFFFFF",
    },
    itemContainer: {
      borderRadius: 5,
      padding: 10,
      height: 70,
      flex:1,justifyContent: "center",alignItems: "center"
    },
    angsuranTitle:{
        fontSize:15,
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

