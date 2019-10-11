import React, {Component} from "react";
import {Text, View,Image, TouchableOpacity, ImageBackground} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class FlightCard extends Component {
    render() {
        return(
        <View  style={styles.outerContainer}>
           
            <View style={[styles.itemContainer, { backgroundColor: '#FFF' }]}>
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Produku")}
          style={{
          flex: 1,
          width: '100%',
          height: 130,
          resizeMode: 'cover'
          }}>
          <ImageBackground
          source={{uri:this.props.data.values.imgUrl}}
          style={{
          flex: 1,
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
          position:'relative'
          }}
          /> 
          </TouchableOpacity>
            <TouchableOpacity 
             onPress={() => alert('Ditambahkan Di Bookmark!')}
            style={{top:0,right:0,position:'absolute',flex:1}}>
            <Icon style={styles.bookmarkButton} name="star" size={25} color="#ecf0f1" />
            </TouchableOpacity>
            <Text style={styles.itemName}>{this.props.data.values.startTime}</Text>
            <Text style={styles.itemAlamat}>{this.props.data.values.endTime}</Text>
            <Text style={styles.itemCode}>Rp.Ciba==/m2</Text>
          </View>


        </View>);
    }
}
const styles = {
    outerContainer:{
        flex:1,
        alignItems:'stretch'
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#FFFFFF",
    },
    finalPriceText: {
        marginLeft:16,
        color:'blue',
        fontSize:16,
    },
    image: {
        height: 50,
        width: 50,
        marginRight: 16,
    },
    line: {
        height: 1.5,
        backgroundColor: "#d3d3d3"
    },
    gridView: {
        marginTop: 10,
        flex: 1,
      },
      itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 0,
        height: 180,
      },
      itemName: {
        fontSize: 16,
        bottom:25,
        width:'100%',
        height:'15%',
        padding:5,
        color: '#fff',
        backgroundColor: 'rgba(43, 61, 79, 0.45)',
        fontWeight: '600',
        top:0,right:0,position:'absolute',
        
      },
      itemAlamat:{
        color:'#fff',
        padding:5,
        fontSize:17,
        backgroundColor: 'rgba(43, 61, 79, 0.45)',
        bottom:0,left:0,position:'absolute',flex:1
      },
      itemCode: {
        color:'#fff',
        padding:5,
        fontSize:17,
        backgroundColor: 'rgba(43, 61, 79, 0.45)',
        bottom:0,right:0,position:'absolute',flex:1
      },
      bookmarkButton:{
        padding:3,
        borderBottomLeftRadius:5,
        backgroundColor:'#e67e22'
      },
      headerButton: {
        height: 44,
        width: 44,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }
}