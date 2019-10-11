import React, { Component } from 'react';
import { Dimensions, View, Text, TouchableOpacity, ScrollView, Image,StatusBar, StyleSheet,ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Card, Button, Divider} from 'react-native-elements'
import CardSilder from 'react-native-cards-slider';
//import Styles from '../../styles';
const DeviceWidth = Dimensions.get('window').width
const DeviceHeight = Dimensions.get('window').height
class CPUHome extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Dashboard",
        headerStyle: {height: DeviceWidth/8}
    })
    
    render() {
        return (
          
            <View style={Styles.container}>

<StatusBar backgroundColor="white"  barStyle = "dark-content" />
            <ScrollView>

<View style={{marginTop:0,}}>
<ImageBackground
  source={require('../../components/assets/icon/not_activ.png')}
  style={{
    position: 'relative', // because it's parent
     flex: 1,
        width: DeviceWidth,
        height: DeviceWidth/10,
        resizeMode: 'cover'
  }}
> 
  <Button
    buttonStyle={{borderRadius: 5, 
      backgroundColor:'#2ecc71', 
      width:100, height:DeviceWidth/15, 
      alignSelf: 'flex-end', marginRight: 10, marginBottom: 0, marginTop:DeviceWidth/60
      }}
    title='Lengkapi' />
</ImageBackground>
</View>


   <Card
  resizeMode="center"
  containerStyle={{borderRadius:5, padding:-10, backgroundColor:'white'}}
  >
  <View style={{flex: 1, flexDirection: 'row'}}>
  
  <Image source={require('../../components/assets/icon/purse.png')}  style={{margin:15, width:30, height:30}} />
  <Text numberOfLines={1}
    adjustsFontSizeToFit style={{textAlignVertical:'center',marginTop:15, fontWeight:'400', marginBottom:15, fontSize:DeviceWidth/20, color:'#f39c12'}}>
    Rp. 500.000.000
  </Text>
    
  <TouchableOpacity 
style={{ 
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'}}
onPress={() => this.props.navigation.navigate("Tambah_saldo")}>

<View style={{ justifyContent: 'center', left:DeviceWidth/10, marginRight:0 }}>
<Icon name="plus-square" size={30} color="#e67e22" 
      style={{textAlignVertical:'center', right:0}}/>
</View>
</TouchableOpacity>

  </View>
  <Button
onPress={() => this.props.navigation.navigate("Tabunganku")}
    icon={
    <Icon
      name="wallet"
      size={13}
      color="white"
    />
    }
    buttonStyle={{borderRadius: 5, backgroundColor:'#e67e22', padding:10, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title=' Tabungaku' />
</Card>


<View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:5,
  }}>
    <View style={{marginLeft:15,
      flexDirection: 'row'}}>

<View style={{justifyContent:'center', alignItems:'center',width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginRight:20}} >
      <Image source={require('../../components/assets/icon/tanah.png')}  style={{margin:15, width:DeviceWidth/8, height:DeviceWidth/8}} />
      <Text style={{marginTop:-10}}>Tanah</Text>
        </View>

<TouchableOpacity
          onPress={() => this.props.navigation.navigate("Produk")} >
        <View style={{justifyContent:'center', alignItems:'center',width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginRight:10}} >
      <Image source={require('../../components/assets/icon/rumah.png')}  style={{margin:15, width:DeviceWidth/8, height:DeviceWidth/8}} />
      <Text style={{marginTop:-10}}>Rumah</Text>
        </View>
        </TouchableOpacity>


        <View style={{justifyContent:'center', alignItems:'center',width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginRight:20}} >
      <Image source={require('../../components/assets/icon/villa.png')}  style={{margin:15, width:DeviceWidth/8, height:DeviceWidth/8}} />
      <Text style={{marginTop:-10}}>Villa</Text>
        </View>

        <View style={{justifyContent:'center', alignItems:'center',width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginRight:20}} >
      <Image source={require('../../components/assets/icon/room.png')}  style={{margin:15, width:DeviceWidth/8, height:DeviceWidth/8}} />
      <Text style={{marginTop:-10}}>Kost</Text>
        </View>
    </View>
  </View>

<View style={{marginTop:20}}>
  <Divider style={{ backgroundColor: '#ecf0f1', marginBottom:5, height:15}} />
</View>


  <CardSilder style={{marginTop: 30}}>
          <View style={{height: 170, justifyContent:'center', borderRadius:60, alignItems:'center', backgroundColor: 'skyblue'}}>
          <ImageBackground source={require('../../components/assets/produk/1.png')} 
          imageStyle={{ borderRadius: 5 }}
            style={{height: 170, width: '100%', borderRadius:20, position: 'relative', top: 0, left: 0 }}> 
            {/*  
             <Button
              onPress={() => this.props.navigation.navigate("News")}
              buttonStyle={{borderRadius: 5, backgroundColor:'#2ecc71', width:100, height:30, alignSelf: 'flex-end', marginRight: 10, marginBottom: 0, marginTop:120}} title='Baca' />
            */}
            </ImageBackground>
          </View>
          
          <View style={{height: 170, justifyContent:'center', borderRadius:60, alignItems:'center', backgroundColor: 'skyblue'}}>
          <ImageBackground source={require('../../components/assets/icon/produk2.png')}
           imageStyle={{ borderRadius: 5 }}
            style={{height: 170, width: '100%', position: 'relative', top: 0, left: 0 }}> 
         
             <Button buttonStyle={{borderRadius: 5, backgroundColor:'#2ecc71', width:100, height:30, alignSelf: 'flex-end', marginRight: 10, marginBottom: 0, marginTop:120}} title='Baca' />
            </ImageBackground>
          </View>

        <View style={{height: 170, justifyContent:'center', borderRadius:60, alignItems:'center', backgroundColor: 'skyblue'}}>
          <ImageBackground source={require('../../components/assets/icon/produk2.png')}
           imageStyle={{ borderRadius: 5 }}
            style={{height: 170, width: '100%', position: 'relative', top: 0, left: 0 }}> 
             <Button buttonStyle={{borderRadius: 5, backgroundColor:'#2ecc71', width:100, height:30, alignSelf: 'flex-end', marginRight: 10, marginBottom: 0, marginTop:120}} title='Baca' />
            </ImageBackground>
          </View>


        <View style={{height: 170, justifyContent:'center',borderRadius:60, alignItems:'center', backgroundColor: 'skyblue'}}>
          <ImageBackground source={require('../../components/assets/icon/produk3.png')}
           imageStyle={{ borderRadius: 5 }}
            style={{height: 170, width: '100%', position: 'relative', top: 0, left: 0 }}> 
             <Button buttonStyle={{borderRadius: 5, backgroundColor:'#2ecc71', width:100, height:30, alignSelf: 'flex-end', marginRight: 10, marginBottom: 0, marginTop:120}} title='Baca' />
            </ImageBackground>
          </View>

        <View style={{height: 170, justifyContent:'center',borderRadius:60, alignItems:'center', backgroundColor: 'skyblue'}}>
          <ImageBackground source={require('../../components/assets/icon/produk4.png')}
           imageStyle={{ borderRadius: 10 }}
            style={{height: 170, width: '100%', position: 'relative', top: 0, left: 0 }}> 
             <Button buttonStyle={{borderRadius: 5, backgroundColor:'#2ecc71', width:100, height:30, alignSelf: 'flex-end', marginRight: 10, marginBottom: 0, marginTop:120}} title='Baca' />
            </ImageBackground>
          </View>


        </CardSilder>
        <View style={{marginLeft:15,marginTop:15, flexDirection:'row'}}>
                <Icon name="box" size={DeviceWidth/23} color="#e67e22" />
        <Text style={{fontSize:DeviceWidth/23, fontWeight:'bold'}}> Produk</Text></View>

<Card
  image={require('../../components/assets/produk/5.png')}
  containerStyle = {{borderRadius: 5}} 
  style={{borderRadius:30}}
  imageStyle={{height:DeviceWidth/2.5, width:'100%', borderTopLeftRadius:5, borderTopRightRadius:5, position: 'relative',  overflow: 'hidden'}}
  >
  <Text style={{marginBottom: 10, fontSize:DeviceWidth/30}}>
  Menghuni Jogja Memang Nyaman, Bagusnya Anda Mulai Cari Tanah
  </Text>
  
  <View style={{flexDirection:'row'}}>
  <Text style={{fontSize:15, fontWeight:'bold'}}>2.500.000 / m2</Text>
  <Text style={{fontSize:15, fontWeight:'bold'}}> SHM</Text>
  <View style={{flex: 1}}>
  <Button 
    onPress={() => this.props.navigation.navigate("Produku")}
    buttonStyle={{borderRadius: 5, backgroundColor:'#2ecc71', width:70, height:30, alignSelf: 'flex-end', marginRight: 0, marginBottom: 0}}
    title='Lihat' />
  </View>
  </View>

</Card>

<Card
 containerStyle = {{borderRadius: 10}} 
  style={{borderRadius:30}}
  imageStyle={{height:DeviceWidth/2.5, borderTopLeftRadius:5, borderTopRightRadius:5, alignSelf: 'stretch',  overflow: 'hidden'}}
 
  image={require('../../components/assets/produk/2.png')}>
  <Text style={{marginBottom: 10}}>
  Tanah Perumahan Luasan Ideal, Seharga Mobil Second dekat Balong Water Park
  </Text>
  <View style={{flexDirection:'row'}}>
  <Text style={{fontSize:15, fontWeight:'bold'}}>2.500.000 / m2</Text>
  <Text style={{fontSize:15, fontWeight:'bold'}}> SHM</Text>
  <View style={{flex: 1}}>
  <Button 
    onPress={() => this.props.navigation.navigate("Produku")}
    buttonStyle={{borderRadius: 5, backgroundColor:'#2ecc71', width:70, height:30, alignSelf: 'flex-end', marginRight: 0, marginBottom: 0}}
    title='Lihat' />
  </View>
  </View>
 
</Card>


<Card
containerStyle = {{borderRadius: 10}} 
  style={{borderRadius:30}}
  imageStyle={{height:DeviceWidth/2.5, borderTopLeftRadius:5, borderTopRightRadius:5, alignSelf: 'stretch',  overflow: 'hidden'}}
 
  image={require('../../components/assets/produk/3.png')}>
  <Text style={{marginBottom: 10}}>
  Nyamannya Tinggal Di Kota Gudeg, Bagusnya Anda Mulai Beli Tanah
  </Text>

  <View style={{flexDirection:'row'}}>
  <Text style={{fontSize:15, fontWeight:'bold'}}>2.500.000 / m2</Text>
  <Text style={{fontSize:15, fontWeight:'bold'}}> SHM</Text>
  <View style={{flex: 1}}>
  <Button 
    onPress={() => this.props.navigation.navigate("Produku")}
    buttonStyle={{borderRadius: 5, backgroundColor:'#2ecc71', width:70, height:30, alignSelf: 'flex-end', marginRight: 0, marginBottom: 0}}
    title='Lihat' />
  </View>
  </View>
</Card>


<Card
containerStyle = {{borderRadius: 10}} 
  style={{borderRadius:30}}
  imageStyle={{height:DeviceWidth/2.5, borderTopLeftRadius:5, borderTopRightRadius:5, alignSelf: 'stretch',  overflow: 'hidden'}}
 
  image={require('../../components/assets/produk/4.png')}>
  <Text style={{marginBottom: 10}}>
  Investasi Tanah UNTUNG GEDE Dekat Bandara Wates Jogja SHM-P
  </Text>

  <View style={{flexDirection:'row'}}>
  <Text style={{fontSize:15, fontWeight:'bold'}}>2.500.000 / m2</Text>
  <Text style={{fontSize:15, fontWeight:'bold'}}> SHM</Text>
  <View style={{flex: 1}}>
  <Button 
    onPress={() => this.props.navigation.navigate("Produku")}
    buttonStyle={{borderRadius: 5, backgroundColor:'#2ecc71', width:70, height:30, alignSelf: 'flex-end', marginRight: 0, marginBottom: 0}}
    title='Lihat' />
  </View>
  </View>
</Card>



<Card
containerStyle = {{borderRadius: 10}} 
  style={{borderRadius:30}}
  imageStyle={{height:DeviceWidth/2.5, borderTopLeftRadius:5, borderTopRightRadius:5, alignSelf: 'stretch',  overflow: 'hidden'}}
 
  image={require('../../components/assets/produk/5.png')}>
  <Text style={{marginBottom: 10}}>
  Rute PANSELA Menjangkau Jogja, Kavling Tanah Makin Diburu
  </Text>

  <View style={{flexDirection:'row'}}>
  <Text style={{fontSize:15, fontWeight:'bold'}}>2.500.000 / m2</Text>
  <Text style={{fontSize:15, fontWeight:'bold'}}> SHM</Text>
  <View style={{flex: 1}}>
  <Button 
    onPress={() => this.props.navigation.navigate("Produku")}
    buttonStyle={{borderRadius: 5, backgroundColor:'#2ecc71', width:70, height:30, alignSelf: 'flex-end', marginRight: 0, marginBottom: 0}}
    title='Lihat' />
  </View>
  </View>
</Card>


<View style={{marginTop:20, marginRight:15, marginLeft:15}}>
  <Divider style={{ backgroundColor: '#ecf0f1', height:2}} />
</View>
  <CardSilder style={{marginTop: 30, marginBottom:30}}>
          <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'skyblue'}}>
            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
              Iklan 1
            </Text>
          </View>
          <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'lightsalmon'}}>
            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
             Iklan 2
            </Text>
          </View>
          <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'teal'}}>
            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
              Iklan 3
            </Text>
          </View>
          <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'lightpink'}}>
            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
             Iklan 4
            </Text>
          </View>
        </CardSilder>

 </ScrollView>
            </View>
        );
    }
}



export default CPUHome;
const Styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor:"#FFFFFF",
  },
  logo: {
    width: 300,
    height: 400,
  },
  imagelogoContainer:{
  padding:700,  
  justifyContent: 'center',
  alignItems: 'center'
}
});