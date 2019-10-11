import React, { Component } from 'react';  
import { AppRegistry, FlatList,  
    StyleSheet, Text, View,Alert, Image, Dimensions, TouchableOpacity } from 'react-native';  
import Icon from 'react-native-vector-icons/FontAwesome5';
import Swipeout from 'react-native-swipeout';

const DeviceWidth = Dimensions.get('window').width
var swipeoutBtns = [
    {
        component: (
            <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              backgroundColor:'#e74c3c'
            }}
            >
        <Icon name="trash" size={20} color="white" style={{margin:5}}/>
        </View>
            )
    }
  ]
export default class FlatListBasics extends Component {  
    
    static navigationOptions = ({ navigation }) => ({
        title: "Bookmark",
        headerStyle: {height: DeviceWidth/8}
    })
    renderSeparator = () => {  
        return (  
            <View  
                style={{  
                    height: 1,  
                    width: "100%",  
                    backgroundColor: "#bdc3c7",  
                }}  
            />  
        );  
    };  
    //handling onPress action  
    getListViewItem = (item) => {  
        Alert.alert(item.title);  
    }  
  
    render() {  
        return (  
            <View Style={styles.container}>  
                <FlatList  
                    data={[  
                        {title: 'Perumahan GiripenBeli Tanah Kavling Di Kulonprogo Sekarang Juga dan nikmati Untungnya',gambar:'https://export-download.canva.com/DADkkiQys4A/48/0/0001-3169353113.png?response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Sedayu%2520Residence.png&response-expires=Thu%2C%2005%20Sep%202019%2005%3A54%3A08%20GMT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190905T043249Z&X-Amz-SignedHeaders=host&X-Amz-Expires=4878&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20190905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d72e0d3b5d90dffb0f77235c37b5363f2119db5036aae3a722f2ef5f9496e2f6'},
                        {title: 'Sedayu Residenece',gambar:'https://export-download.canva.com/DADkkiQys4A/21/0/0001-3169267301.png?response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Sedayu%2520Residence.png&response-expires=Thu%2C%2005%20Sep%202019%2005%3A31%3A23%20GMT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190905T042006Z&X-Amz-SignedHeaders=host&X-Amz-Expires=4276&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20190905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7ab747a35e429169a6a8149dcada962c7f45dfa9d865342430161ec0b6d9995b'}, 
                        {title: 'Jasmine Village Sumberadi',gambar:'https://export-download.canva.com/DADkkiQys4A/6/0/0001-3168522617.png?response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Sedayu%2520Residence.png&response-expires=Thu%2C%2005%20Sep%202019%2004%3A35%3A49%20GMT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190905T024301Z&X-Amz-SignedHeaders=host&X-Amz-Expires=6767&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20190905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=145dc8d40bcf6a9027c1137bac8d9a739dafc0ad906ffce5650757d79dd1e350'},
                        {title: 'Claster Graha Balacatur',gambar:'https://export-download.canva.com/DADkkiQys4A/56/0/0001-3169369777.png?response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Sedayu%2520Residence.png&response-expires=Thu%2C%2005%20Sep%202019%2006%3A19%3A56%20GMT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190905T043518Z&X-Amz-SignedHeaders=host&X-Amz-Expires=6277&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20190905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6e2c2898931fd5b3b42f4dec0fd39bce74f1049e9073653f9fa0a41369b277fe'},  
                    ]}  

                    renderItem={({item}) => 
                    
                    <React.Fragment> 
                    <Swipeout autoClose	 right={swipeoutBtns}>
                    
                 <TouchableOpacity style={{flexDirection:"row", backgroundColor:'white', padding:10}}   onPress={() => this.props.navigation.navigate("Produku")} >
                   
                        <Icon name="bookmark" size={23} color="#f39c12" style={{margin:5}}/>
                        <Text style={styles.item} /* onPress={this.getListViewItem.bind(this, item)} */ >
                          {item.title}</Text>
                          </TouchableOpacity>

                          <View style={{flex: 1}}>
                          <Text  style={styles.price} >Rp.25000.000</Text>
                          </View>

                       </Swipeout>
                        </React.Fragment>
                              }  
                    
                    ItemSeparatorComponent={this.renderSeparator}  
                />  
            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding:15
    },  
    item: {    
        fontSize: DeviceWidth/27,  
        marginTop:5,
        padding:5,
        height: DeviceWidth/10,  
        backgroundColor:'white'
    },  
    subtitle:{
        paddingLeft: 5, 
        fontSize: DeviceWidth/30,
        height: DeviceWidth/12,
        backgroundColor:'white'
    },
    price:{
        fontSize: DeviceWidth/25,
        flex:1,
        backgroundColor:'white',
        right:0,
        justifyContent: 'flex-end',
        color:'#f1c40f',
        padding:5,
        fontWeight:'bold',
        textAlign: 'right'
    },
    gambar:{
        width:DeviceWidth/9,
        height:DeviceWidth/9,
        margin:5
    }
})  
  
  
AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);  