import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground,Image, TouchableOpacity,Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Avatar, Divider, Badge, Button, withBadge } from 'react-native-elements'
import { SliderBox } from 'react-native-image-slider-box';
import CardSilder from 'react-native-cards-slider';
import Star from 'react-native-star-view';
import Styles from '../../styles';

const DeviceWidth = Dimensions.get('window').width
console.disableYellowBox = true;
class MemoryHome extends Component {
    constructor(props) {
        super(props);
      
      }
    
      static navigationOptions = ({ navigation }) => ({
        title: "Account",
        headerStyle: {
          height: DeviceWidth/8,
          // elevation: 0,
          // shadowOpacity: 0,
          // borderBottomWidth: 0,
          },
          headerTitleStyle: {
            textAlign: 'center',
            flexGrow:1,
            alignSelf:'center',
        },
    })

    render() {
        return (
            <React.Fragment>
       
            <View style={styles.container}>

            <View style={styles.boxTitle}>
           
            <View style={{flexDirection:"row"}}>
            <Text style={{fontSize:DeviceWidth/25, color:'#34495e', fontWeight:'500'}}>Nurchulis</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Account")}>
            <Text style={{position: 'absolute', left: 40, color:'#2980b9'}}>Edit</Text>
            </TouchableOpacity>
            
            
            </View>
            </View>

            <View style={styles.boxContent}>
                <Text style={{fontSize:DeviceWidth/23, color:'#2c3e50', fontWeight:'700'}}>Tabunganku</Text>
               
                
            <View style={{flexDirection:"row", marginTop:20}}>
               
                <Icon name="book" size={DeviceWidth/25} style={{marginRight:30}} color="#34495e"/>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Tabunganku")}>
                <Text style={{fontSize:DeviceWidth/25}}>Tabungan Tanah</Text>
                </TouchableOpacity>
                </View>
                <Divider style={{ backgroundColor: '#95a5a6', width:'88%', marginTop:10, marginLeft:50 }} />       
            
            
            <View style={{flexDirection:"row", marginTop:20}}>
                <Icon name="clock" size={DeviceWidth/25} style={{marginRight:30}} color="#34495e"/>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Showdebit")}>
                <Text style={{fontSize:DeviceWidth/25}}>Show Debit history</Text>
                </TouchableOpacity>
                </View>
                <Divider style={{ backgroundColor: '#95a5a6', width:'88%', marginTop:10, marginLeft:50 }} />       
            
            <View style={{flexDirection:"row", marginTop:20}}>
                <Icon name="download" size={DeviceWidth/25} style={{marginRight:30}} color="#34495e"/>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Downloaddebit")}>
                <Text style={{fontSize:DeviceWidth/25}}>Download Debit history</Text>
                </TouchableOpacity>
                </View>
                <Divider style={{ backgroundColor: '#95a5a6', width:'88%', marginTop:10, marginLeft:50 }} />        
            

            </View>


            <View style={styles.boxContent}>
                
            <View style={{flexDirection:"row", marginTop:20}}>
                <Icon name="question-circle" size={DeviceWidth/23} style={{marginRight:30}} color="#34495e"/>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Help")}>
                <Text style={{fontSize:DeviceWidth/25}}>Help</Text>
                </TouchableOpacity>
                </View>
                <Divider style={{ backgroundColor: '#95a5a6', width:'88%', marginTop:10, marginLeft:50 }} />         
            
            
            <View style={{flexDirection:"row", marginTop:20}}>
                <Icon name="sticky-note" size={DeviceWidth/23} style={{marginRight:30}} color="#34495e"/>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Terms")}>
                <Text style={{fontSize:DeviceWidth/25}}>Terms of Service</Text>
                </TouchableOpacity>
                </View>
                <Divider style={{ backgroundColor: '#95a5a6', width:'88%', marginTop:10, marginLeft:50 }} />       
            
            <View style={{flexDirection:"row", marginTop:20}}>
                <Icon name="shield-alt" size={DeviceWidth/23} style={{marginRight:30}} color="#34495e"/>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Privacy")}>
                <Text style={{fontSize:DeviceWidth/25}}>Privacy Policy</Text>
                </TouchableOpacity>
                </View>
                <Divider style={{ backgroundColor: '#95a5a6', width:'88%', marginTop:10, marginLeft:50 }} />        
            
            <View style={{flexDirection:"row", marginTop:20}}>
                <Icon name="star" size={DeviceWidth/25} style={{marginRight:30}} color="#34495e"/>
                <Text style={{fontSize:DeviceWidth/25}}>Rate Tabungan Tanah App</Text>
                </View>
                <Divider style={{ backgroundColor: '#95a5a6', width:'88%', marginTop:10, marginLeft:50 }} />        
            
            </View>

            <View style={styles.boxContent}>
            <View style={{flex:1,justifyContent: "center",alignItems: "center", color:'#e74c3c'}}>
                 <Text style={{color:'#e74c3c', fontSize:DeviceWidth/25, fontWeight:'bold'}}>Logout</Text>
            </View>
            </View>


            </View>


        
       
            </React.Fragment>
        );
    }
}

export default MemoryHome;
const styles = StyleSheet.create({
    gridView: {
      marginTop: 10,
      flex: 1,
    },
    container:{
    backgroundColor:'#ecf0f1',
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 0,
      height: 150,
    },
    star:{
        width: 100,
        height: 20,
        fontSize:10,
        marginBottom: 20,
    },
    image: {
        height:70,
        width:DeviceWidth/7,
        alignItems: 'center',
        justifyContent:'center',
      },
      paragraph: {
          textAlign:'center',
          fontSize:16,
          marginTop:-10,
          color:'white',
          fontWeight:'bold'
      },
    title:{
        width:'87%',
        fontSize:21,
        color:'#2c3e50',
        flexWrap: "wrap",
        fontWeight:"400"
    },
    badge:{
        width:DeviceWidth/2,
    },
    boxTitle:{
      padding:15,  
      backgroundColor:'white',
      height:"auto",
    },
    boxContent:{
        marginTop:20,
        backgroundColor:'white',
        height:'auto',
        padding:20
      },
      boxSimilar:{
        marginTop:20,
        backgroundColor:'white',
        height:340,
       
      },
      headerButton: {
        height: 44,
        width: 44,
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
 
    textStyle:{
 
      color: '#fff',
      fontSize:22
    }

  });