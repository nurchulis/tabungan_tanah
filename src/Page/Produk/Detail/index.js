/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, { Component } from 'react';
import { StyleSheet, Text, ImageBackground, View,Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Badge, Button } from 'react-native-elements'
import { SliderBox } from 'react-native-image-slider-box';
import CardSilder from 'react-native-cards-slider';
import Star from 'react-native-star-view';
import Icon from 'react-native-vector-icons/FontAwesome5';
import  About  from '../components/About';

import SwipeablePanel from 'rn-swipeable-panel';

const DeviceWidth = Dimensions.get('window').width
class Detail extends Component {
	constructor(props) {
    super(props);
    this._detailTenant = this._detailTenant.bind(this);
		this.state = {
      isOpen: false,
      ButtonPilih:'Pilih Kavling',
			content: () => null,
			fullWidth: true,
			customPanel: false,
			customPanelState: {
				isOpen: false,
				openLarge: false,
				fullWidth: false,
				noBackgroundOpacity: false,
				closeButton: false
      },
      images: [
        'https://s3-ap-southeast-1.amazonaws.com/propertytoday/sphgeckoxwnulfqyavzmdjtbr10_-_Copy.jpg',
        'https://s3-ap-southeast-1.amazonaws.com/propertytoday/lowuyedizrgvhjskbqpxcaftmWhatsApp_Image_2019-07-03_at_09.32.45_1.jpeg',
        'https://s3-ap-southeast-1.amazonaws.com/propertytoday/jvmlhfegyuadorszqnciwbpxt3.jpg',
        'https://s3-ap-southeast-1.amazonaws.com/propertytoday/xowjfsdkmgpziheaulytvcbqnnanggulan_permai_3.jpg'
      ]
		};
	}

	componentDidMount = () => {};

	openAboutPanel = () => {
		this.setState({
			isOpen: true,
      openLarge: true,
      ButtonPilih:'Selanjutnya',
			closeButton: this.closePanel,
			noBackgroundOpacity: false,
			content: () => <About iki="m2"/>
		});
	};

	closePanel = () => {
		this.setState({
			customPanelState: { ...this.state.customPanelState, isOpen: false },
      isOpen: false,
      ButtonPilih:'Pilih Kavling',
			content: () => null
		});
  };

  switchOnPress = (open) => {
        switch (open) {
          case 'about':
            return this.openAboutPanel;
          default:
            return this.props.openDefaultPanel;
        }
  };

  cekButton(){
    if(this.state.ButtonPilih == 'Pilih Kavling'){
      return(
      <React.Fragment>
      <Button title=" Ask"
      icon={<Icon name="facebook-messenger" size={25} color="white"/>}
        buttonStyle={{width:DeviceWidth/2, backgroundColor:'#e67e22', height:DeviceWidth/7 }} />

        <Button
          onPress={this.switchOnPress('about')}
          title="Pilih Kavling" buttonStyle={{width:DeviceWidth/2, height:DeviceWidth/7 }} />
          </React.Fragment>
      )
    }else{
      return(
      <Button
      onPress={() => this.props.navigation.navigate("Skema")}
      title={this.state.ButtonPilih} buttonStyle={{width:DeviceWidth, height:DeviceWidth/7 }} />
      )
    }
  }
  
  
  static navigationOptions = ({ navigation }) => ({
      
    headerTransparent: true,

    headerTintColor: 'transparent',
    headerLeft: (
        <TouchableOpacity
        onPress={ () => { navigation.goBack() }}
        style={styles.headerButton}>
        <Icon name="arrow-left" size={DeviceWidth/20} color="white"/>
      </TouchableOpacity>
      )
  
  })

  _detailTenant =(_id)=>{
    this.props.navigation.navigate("Skema");
  }


	render() {
		const panelState = this.state.customPanelState.isOpen ? this.state.customPanelState : this.state;

		return (
      <React.Fragment>  
			<SafeAreaView style={styles.container}>
			
      <View style={{
        	position: 'relative',
		height: '100%',
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'center',
		backgroundColor: '#EEF4F6'
      }}>

<React.Fragment>
            
            <ScrollView>

            <View><SliderBox 
             circleLoop
             dotColor="#f39c12"
             inactiveDotColor="#ecf0f1"
             sliderBoxHeight={DeviceWidth/1.4}
             images={this.state.images} /></View>
            <View style={styles.container}>

            <View style={styles.boxTitle}>
            <View style={{flexDirection:"row"}}>
                <Text style={styles.title}>Dijual kavling siap huni sedayu residence murah dan strategis</Text>
                <ImageBackground source={{uri: 'https://i.ibb.co/BgXNN2Y/bookmark-ribbon.png'}} style={styles.image}>
                <Text style={styles.paragraph}>12X{'\n'}Bayar</Text>
                </ImageBackground>
            </View>
                <Text style={{color:'#e67e22',fontSize:25, fontWeight:'bold', marginTop:-20,marginBottom:20}}>Rp.2.500.000</Text>


            <View style={{flexDirection:"row"}}>
                <Star score={3} style={styles.star} />
                <Text style={{color:'#f39c12',fontSize:DeviceWidth/27}}> 2/4</Text>
                <Text style={{color:'#95a5a6',fontSize:15}}> (544) </Text>
                <Text style={{color:'#95a5a6',fontSize:15}}>| 23 Tersedia</Text>

                <Badge badgeStyle={{right:0, alignSelf: 'flex-end', marginLeft:5, backgroundColor:'#9b59b6'}} status="warning" value="exclusive"/>
            </View>

            <View style={{flexDirection:"row", width:"100%"}}>   
                <Button buttonStyle={{width:DeviceWidth/2.9, margin:2, borderColor:'#34495e'}} icon={<Icon name="heart" size={20} color="#34495e"/>} title={<Text style={{color:"#34495e"}}> 300 Suka</Text>} type="outline" />
                <Button buttonStyle={{width:DeviceWidth/2.9, margin:2, borderColor:'#34495e'}} icon={<Icon name="star" size={20} color="#34495e"/>} title={<Text style={{color:"#34495e"}}> 120 Favorit</Text>} type="outline" />
                <Button buttonStyle={{width:DeviceWidth/6, margin:2, borderColor:'#34495e'}}  icon={<Icon name="share-alt" size={20} color="#34495e"/>}  type="outline" />
            
            </View>

            </View>

            <View style={styles.boxContent}>
                <Text style={{fontSize:DeviceWidth/22, color:'#2c3e50', fontWeight:'700'}}>Detail Produk</Text>

                <Text>           
                Dengan hadirnya JORR dan Exit Tol Jogja-Solo adalah sarana untuk memperlancar transportasi,
                mempercepat perjalanan menuju suatu daerah. Dengan demikian tentu akan berdampak pada sektor wisata dan pertumbuhan ekonomi. Milikilah tanah kavling di 
                Prambanan Residence untuk mendapatkan keuntungan dari pesatnya perkembangan infrastruktur di Jogja timur.
                </Text>

                <Text>

Ngomong-ngomong, tahukah Anda besaran untung yang dinikmati konsumen pembeli tanah di Wates tahun lalu? Di atas 40 % pertahun ternyata!

Hadirnya bandara YIA Jogja melambungkan nilai tanah. Ini fakta. Mari kelapangan, kunjungi ratusan lokasi proyek kami  jika ingin bukti tambahan.

Selling Point :

- Legalitas SHM

- Kapling Matang siap bangun

- Luas kapling Ideal

                </Text>

                
            </View>
            </View>


            <View style={styles.boxSimilar}>
            <Text style={{fontSize:DeviceWidth/22, color:'#2c3e50', paddingLeft:20, paddingTop:20, fontWeight:'700'}}>Produk Terkait</Text>
  <CardSilder style={{marginTop: 30}}>
          <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'skyblue'}}>
          <ImageBackground source={{uri:'https://export-download.canva.com/DADkzUx1IHo/29/0/0001-3196211265.png?response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Twitter%2520Matikan%2520Fitur%2520Tweet%2520via%2520SMS%2520Setelah%2520Akun%2520CEO-nya%2520Diretas.png&response-expires=Sat%2C%2007%20Sep%202019%2015%3A06%3A09%20GMT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190907T133140Z&X-Amz-SignedHeaders=host&X-Amz-Expires=5668&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20190907%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a5581120e5bc6b0ef864ce3e0b93ae2d728146021f4571a411ba71a4390a5dc7'}}
            style={{height: 170, width: '100%', position: 'relative', top: 0, left: 0 }}> 
             <Button
              onPress={() => this.props.navigation.navigate("News")}
              buttonStyle={{borderRadius: 5, backgroundColor:'#2ecc71', width:100, height:30, alignSelf: 'flex-end', marginRight: 10, marginBottom: 0, marginTop:120}} title='Baca' />
            
            </ImageBackground>
          </View>
          
          <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'skyblue'}}>
          <ImageBackground source={{uri:'https://export-download.canva.com/DADkzXXN3dk/19/0/0001-3196455472.png?response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Ibu%2520Kota%2520Pindah%2520ke%2520Kalimantan%252C%2520Ambil%2520Momentum%2520Koleksi%2520Saham-saham%2520Ini.png&response-expires=Sat%2C%2007%20Sep%202019%2016%3A03%3A33%20GMT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190907T140603Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7049&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20190907%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=32f95b6ffeaaee47ec8a502fbc528119f5bb53c13579f0d60b7633da7e2cea77'}}
            style={{height: 170, width: '100%', position: 'relative', top: 0, left: 0 }}> 
         
             <Button buttonStyle={{borderRadius: 5, backgroundColor:'#2ecc71', width:100, height:30, alignSelf: 'flex-end', marginRight: 10, marginBottom: 0, marginTop:120}} title='Baca' />
            </ImageBackground>
          </View>

        <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'skyblue'}}>
          <ImageBackground source={require('../../../components/assets/icon/produk2.png')}
            style={{height: 170, width: '100%', position: 'relative', top: 0, left: 0 }}> 
             <Button buttonStyle={{borderRadius: 5, backgroundColor:'#2ecc71', width:100, height:30, alignSelf: 'flex-end', marginRight: 10, marginBottom: 0, marginTop:120}} title='Baca' />
            </ImageBackground>
          </View>


        <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'skyblue'}}>
          <ImageBackground source={require('../../../components/assets/icon/produk3.png')}
            style={{height: 170, width: '100%', position: 'relative', top: 0, left: 0 }}> 
             <Button buttonStyle={{borderRadius: 5, backgroundColor:'#2ecc71', width:100, height:30, alignSelf: 'flex-end', marginRight: 10, marginBottom: 0, marginTop:120}} title='Baca' />
            </ImageBackground>
          </View>

        <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'skyblue'}}>
          <ImageBackground source={require('../../../components/assets/icon/produk4.png')}
            style={{height: 170, width: '100%', position: 'relative', top: 0, left: 0 }}> 
             <Button buttonStyle={{borderRadius: 5, backgroundColor:'#2ecc71', width:100, height:30, alignSelf: 'flex-end', marginRight: 10, marginBottom: 0, marginTop:120}} title='Baca' />
            </ImageBackground>
          </View>


        </CardSilder>
</View>
            </ScrollView>
       

            </React.Fragment>


      </View>
      	<SwipeablePanel
					fullWidth={panelState.fullWidth}
					noBackgroundOpacity={panelState.noBackgroundOpacity}
					openLarge={panelState.openLarge}
					isActive={panelState.isOpen}
					onClose={this.closePanel}
					onPressCloseButton={panelState.closeButton ? this.closePanel : null}
				>
					{this.state.content()}
				</SwipeablePanel>
			
      </SafeAreaView>
    
<View style={ styles.bottomView} >
<View style={{flexDirection:"row", width:DeviceWidth}}>           
{this.cekButton()}
</View>

</View>
</React.Fragment>


		);
	}
}


export default Detail;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#EEF4F6'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
  },

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
      fontSize:DeviceWidth/22,
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