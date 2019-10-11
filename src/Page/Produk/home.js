import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../styles';
import { Dropdown } from 'react-native-material-dropdown';
import { Button} from 'react-native-elements'
import { FlatGrid } from 'react-native-super-grid';

const DeviceWidth = Dimensions.get('window').width
const DeviceHeight = Dimensions.get('window').height

class HomeProduk extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Produk",
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

        headerRight: (
          <TouchableOpacity
          style={Styles.headerButton}
          onPress={() => navigation.navigate("Bookmark")} >
          <Icon name="bookmark" size={25} color="#2c3e50"/>
        </TouchableOpacity>
        )

    })
    
    render() {

      let data = [{
        value: 'DIY',
      }, {
        value: 'Bogor',
      }, {
        value: 'Bandung',
      }];
      let kategori = [{
        value: 'Rumah',
      }, {
        value: 'Ruko',
      }, {
        value: 'Tanah', 
      }];
        const items = [
            { 'key':'1',name: 'Kota Jogja Mekar Ke Barat, Untung Beli Tanah Dekat YIA Wates',harga:'2.500.000', code: '#1abc9c', url_produk:'https://s3-ap-southeast-1.amazonaws.com/propertytoday/oxgnvjsmktyhpcqirdulbezaf14.jpeg'}, 
            { 'key':'2',name: 'Giripeni Permai',harga:'1.900.000', code: '#2ecc71', url_produk:'https://s3-ap-southeast-1.amazonaws.com/propertytoday/hzdortsvcmqxfnygjulwikpbe10.jpeg' },
            { 'key':'3',name: 'Claster Indah Giripeni', harga:'1.500.000',code: '#3498db', url_produk:'https://s3-ap-southeast-1.amazonaws.com/propertytoday/fbvxpqgcdawinstkemhjuyorz2.jpg'},
            { 'key':'4',name: 'Jasmine Village Sumberadi',harga:'2.600.000', code: '#9b59b6',  url_produk:'https://s3-ap-southeast-1.amazonaws.com/propertytoday/xzrcoduesmibyqkhvngfjwtlp7.jpeg' },
            { 'key':'5',name: 'Balai Catur Residenece',harga:'4.500.000', code: '#34495e', url_produk:'https://s3-ap-southeast-1.amazonaws.com/propertytoday/dnhvrbltzmiujxqopfgkasyec2.jpg' }, 
            { 'key':'6',name: 'Claster Graha Balacatur',harga:'1.500.000', code: '#16a085', url_produk:'https://s3-ap-southeast-1.amazonaws.com/propertytoday/ucxwfqbkinmglhstzpvdrojeafgsjfdjfdjhd_162.jpg' },
            { 'key':'7',name: 'Codongcatur Elok',harga:'2.500.000', code: '#27ae60', url_produk:'https://s3-ap-southeast-1.amazonaws.com/propertytoday/wvbfxmjyglrasokezniupctdqInvestasi_Bangun_Kos_Dekat_UII_5.jpg'}, 
            { 'key':'8',name: 'Prambanan Residence',harga:'2.500.000', code: '#2980b9', url_produk:'https://s3-ap-southeast-1.amazonaws.com/propertytoday/dxnhfecatjilrskbpyumgqvozTanah_Kapling_Kaliurang_5.jpeg' },
            { 'key':'9',name: 'Griya Mulia Pengasih',harga:'900.000', code: '#8e44ad', url_produk:'https://s3-ap-southeast-1.amazonaws.com/propertytoday/wjmuripbkdtvqenaxsycozfhgWhatsApp_Image_2019-07-20_at_17.08.50_1.jpeg'}, 
            { 'key':'10',name: 'Taruma Residence',harga:'2.000.000', code: '#2c3e50', url_produk:'https://s3-ap-southeast-1.amazonaws.com/propertytoday/zmoagvlhnutfxiqwrjdebcspyRumah_dijual_Yogyakarta_Bantul_Kulon_Progo_Sleman_Klaten_5.jpg' },
            { 'key':'11',name: 'Pasir Putih View', harga:'500.000',code: '#f1c40f', url_produk:'https://s3-ap-southeast-1.amazonaws.com/propertytoday/ezivgcmtybsafxrnquhpdljwk1_fp_4.jpg' }, 
            { 'key':'12',name: 'Wisma Gripeni', harga:'700.000',code: '#e67e22', url_produk:'https://s3-ap-southeast-1.amazonaws.com/propertytoday/simcbykfaxrhtpwnedqugzljo4.jpeg' },

            { 'key':'13',name: 'Claster Indah Giripeni',harga:'800.000', code: '#3498db', url_produk:'https://s3-ap-southeast-1.amazonaws.com/propertytoday/zbndaxjqmogyelifvsukchprta.JPG'},
            { 'key':'14',name: 'Jasmine Village Sumberadi',harga:'3.500.000', code: '#9b59b6',  url_produk:'https://s3-ap-southeast-1.amazonaws.com/propertytoday/lhtcmkzpqagbjnwdfoyexviusWhatsApp_Image_2019-06-15_at_11.10.05_1.jpeg' },
            { 'key':'15',name: 'Balai Catur Residenece',harga:'1.500.000', code: '#34495e', url_produk:'https://s3-ap-southeast-1.amazonaws.com/propertytoday/iszmjqpftbwancluxeyvdohgk1.JPG' }, 
            { 'key':'16',name: 'Claster Graha Balacatur',harga:'500.000', code: '#16a085', url_produk:'https://s3-ap-southeast-1.amazonaws.com/propertytoday/uymgjhqfekixbasctvrwplzdn1.jpeg' },
            { 'key':'17',name: 'Codongcatur Elok',harga:'1.500.000', code: '#27ae60', url_produk:'https://s3-ap-southeast-1.amazonaws.com/propertytoday/ijzndxethcwbpgvkoryfqmaslWhatsApp_Image_2019-07-20_at_17.08.50_2.jpeg'}, 
          ];
        return (
          <React.Fragment>
          <View style={{backgroundColor:'white', flexDirection:"row" }}>
          <Dropdown
          itemTextStyle={{fontSize:5}}
          pickerStyle={{fontSize:5}}
          label='Pilih Lokasi'
          containerStyle={{width:DeviceWidth/3,marginLeft:20, backgroundColor:'white'}}
          data={data}
          />
          <Dropdown
          itemTextStyle={{fontSize:5}}
          pickerStyle={{fontSize:5}}
          label='Pilih Kategori'
          containerStyle={{width:DeviceWidth/3,marginLeft:20, backgroundColor:'white'}}
          data={kategori}
          />
<TouchableOpacity style={{ justifyContent: 'center', left:DeviceWidth/10, marginRight:20, marginTop:10 }}>
<View>
      <Button icon={
    <Icon
      name="search"
      size={15}
      color="white"
    />
    }
    buttonStyle={{backgroundColor:'#f39c12'}}
    />
</View>
</TouchableOpacity>
   
   </View>
            <View style={Styles.container}>
                <FlatGrid
        itemDimension={200}
        items={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Produku")}
          style={{
          flex: 1,
          width: '100%',
          height: 130,
          resizeMode: 'cover'
          }}>
          <ImageBackground
          source={{uri:item.url_produk}}
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
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemAlamat}>Bantul, Yogyakarta</Text>
            <Text style={styles.itemCode}>Rp. {item.harga}/m2</Text>
          </View>
        )}
      />
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
  });