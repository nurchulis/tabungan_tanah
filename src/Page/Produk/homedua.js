import React, {Component} from "react";
import {RecyclerListView, LayoutProvider, DataProvider} from "recyclerlistview";
//import CardProduk from "./List(example)/CardProduk";
//import DataProduk from "./List(example)/DataProduk";
import { View, Text, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../styles';
import { Dropdown } from 'react-native-material-dropdown';
import { Button} from 'react-native-elements'


let {height, width} = Dimensions.get('window');

const DeviceWidth = Dimensions.get('window').width
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
  let FlightData = [
    {
        type: "FL_ITEM",
        values: {
            imgUrl: "https://s3-ap-southeast-1.amazonaws.com/propertytoday/ijzndxethcwbpgvkoryfqmaslWhatsApp_Image_2019-07-20_at_17.08.50_2.jpeg",
            startTime: "Kota Jogja Mekar Ke Barat, Untung Beli Tanah Dekat YIA Wates",
            endTime: "Bantul, Yogyakarta",
            cost: "1.600.000",
            duration: "2hr 45min",
            stops: "Non Stop",
            color:'#3498db'
        }
    },
    {
        type: "FL_ITEM",
        values: {
            imgUrl: "https://s3-ap-southeast-1.amazonaws.com/propertytoday/fwaterhobsxjqizvulpmgdkynIMG_20180815_082051.JPG",
            startTime: "Tanah Terbaik di Prambanan, Lokasi Strategis Harga Terjangkau",
            endTime: "Bantul, Yogyakarta",
            cost: "5.500.000",
            duration: "2hr 45min",
            stops: "Non Stop"
        }
    },
    {
        type: "FL_ITEM",
        values: {
            imgUrl: "https://s3-ap-southeast-1.amazonaws.com/propertytoday/zbndaxjqmogyelifvsukchprta.JPG",
            startTime: "Dekat EXIT TOL SOLO Tanah Kapling Standar Perumahaan Lebar Jalan 5 Meter",
            endTime: "Bantul, Yogyakarta",
            cost: "1.800.000",
            duration: "2hr 45min",
            stops: "Non Stop",
            color:'#e67e22'
        }
    },
    {
        type: "FL_ITEM",
        values: {
            imgUrl: "https://s3-ap-southeast-1.amazonaws.com/propertytoday/iszmjqpftbwancluxeyvdohgk1.JPG",
            startTime: "Jasmine Village Sumberadi",
            endTime: "Bantul, Yogyakarta",
            cost: "3.100.000",
            duration: "2hr 45min",
            stops: "Non Stop",
            color:'#1abc9c'
        }
    },
    {
        type: "FL_ITEM",
        values: {
            imgUrl: "https://s3-ap-southeast-1.amazonaws.com/propertytoday/uymgjhqfekixbasctvrwplzdn1.jpeg",
            startTime: "200 an m2,Efektif perumahan: Griya Mulia Kaliurang Sleman",
            endTime: "Bantul, Yogyakarta",
            cost: "1.200.000",
            duration: "2hr 45min",
            stops: "Non Stop",
            color:''
        }
    },
    {
        type: "FL_ITEM",
        values: {
            imgUrl: "https://s3-ap-southeast-1.amazonaws.com/propertytoday/zmoagvlhnutfxiqwrjdebcspyRumah_dijual_Yogyakarta_Bantul_Kulon_Progo_Sleman_Klaten_5.jpg",
            startTime: "Kavling Jalur NYIA, Cocok Buat Ruko: Tersisa 1 Kavling",
            endTime: "Bantul, Yogyakarta",
            cost: "800.000",
            duration: "2hr 45min",
            stops: "Non Stop",
            color:'#f39c12'
        }
    },
    {
        type: "FL_ITEM",
        values: {
            imgUrl: "https://s3-ap-southeast-1.amazonaws.com/propertytoday/wjmuripbkdtvqenaxsycozfhgWhatsApp_Image_2019-07-20_at_17.08.50_1.jpeg",
            startTime: "Kavling Ekslusif Yogyakarta Dekat Bandara YIA SHM Harga Terjangkau ",
            endTime: "Bantul, Yogyakarta",
            cost: "3.400.000",
            duration: "2hr 45min",
            stops: "Non Stop",
            color:'#e74c3c'
        }
    },
    {
        type: "FL_ITEM",
        values: {
            imgUrl: "https://s3-ap-southeast-1.amazonaws.com/propertytoday/ezivgcmtybsafxrnquhpdljwk1_fp_4.jpg",
            startTime: "Punya Investasi Di Area Sedayu Bantul Jaminan Cepat Kaya",
            endTime: "Bantul, Yogyakarta",
            cost: "2.500.000",
            duration: "2hr 45min",
            stops: "Non Stop",
            color:'#8e44ad'
        }
    },
    {
        type: "FL_ITEM",
        values: {
            imgUrl: "https://s3-ap-southeast-1.amazonaws.com/propertytoday/dnhvrbltzmiujxqopfgkasyec2.jpg",
            startTime: "Tanah 1,6 Jutaan Dekat Bandara Wates UNTUNG GEDE Banget !! SHM-P",
            endTime: "Bantul, Yogyakarta",
            cost: "1.500.000",
            duration: "2hr 45min",
            stops: "Non Stop",
            color:'#16a085'
        }
    },
    {
        type: "FL_ITEM",
        values: {
            imgUrl: "https://s3-ap-southeast-1.amazonaws.com/propertytoday/ucxwfqbkinmglhstzpvdrojeafgsjfdjfdjhd_162.jpg",
            startTime: "Bangun Guest House Di Area Bandara YIA. Dijamin Untung Besar",
            endTime: "Bantul, Yogyakarta",
            cost: "900.000",
            duration: "2hr 45min",
            stops: "Non Stop",
            color:'#e67e22'
        }
    },
    {
        type: "FL_ITEM",
        values: {
            imgUrl: "https://s3-ap-southeast-1.amazonaws.com/propertytoday/wvbfxmjyglrasokezniupctdqInvestasi_Bangun_Kos_Dekat_UII_5.jpg",
            startTime: "Jaminan Cepat Kaya Tanah Kavling Di Daerah Bantul Jogjakarta",
            endTime: "Bantul, Yogyakarta",
            cost: "1.500.000",
            duration: "2hr 45min",
            stops: "Non Stop",
            color:'#3498db'
        }
    },
    {
        type: "FL_ITEM",
        values: {
            imgUrl: "https://s3-ap-southeast-1.amazonaws.com/propertytoday/zmoagvlhnutfxiqwrjdebcspyRumah_dijual_Yogyakarta_Bantul_Kulon_Progo_Sleman_Klaten_5.jpg",
            startTime: "Nyamannya Tinggal Di Pusat Kota, Kerennya Anda Mulai Cari Tanah",
            endTime: "Bantul, Yogyakarta",
            cost: "800.000",
            duration: "2hr 45min",
            stops: "Non Stop",
            color:'#2ecc71'
        }
    },
    {
        type: "FL_ITEM",
        values: {
            imgUrl: "https://s3-ap-southeast-1.amazonaws.com/propertytoday/wjmuripbkdtvqenaxsycozfhgWhatsApp_Image_2019-07-20_at_17.08.50_1.jpeg",
            startTime: "Codongcatur Elok",
            endTime: "Bantul, Yogyakarta",
            cost: "3.400.000",
            duration: "2hr 45min",
            stops: "Non Stop",
            color:'#c0392b'
        }
    },
    {
        type: "FL_ITEM",
        values: {
            imgUrl: "https://s3-ap-southeast-1.amazonaws.com/propertytoday/ezivgcmtybsafxrnquhpdljwk1_fp_4.jpg",
            startTime: "Prambanan Residence",
            endTime: "Bantul, Yogyakarta",
            cost: "2.500.000",
            duration: "2hr 45min",
            stops: "Non Stop",
            color:'#1abc9c'
        }
    },
    {
        type: "FL_ITEM",
        values: {
            imgUrl: "https://s3-ap-southeast-1.amazonaws.com/propertytoday/dnhvrbltzmiujxqopfgkasyec2.jpg",
            startTime: "Pasir Putih View",
            endTime: "Bantul, Yogyakarta",
            cost: "1.500.000",
            duration: "2hr 45min",
            stops: "Non Stop",
            color:'#f39c12'
        }
    },
    {
        type: "FL_ITEM",
        values: {
            imgUrl: "https://s3-ap-southeast-1.amazonaws.com/propertytoday/ucxwfqbkinmglhstzpvdrojeafgsjfdjfdjhd_162.jpg",
            startTime: "Griya Mulia Pengasih",
            endTime: "Bantul, Yogyakarta",
            cost: "900.000",
            duration: "2hr 45min",
            stops: "Non Stop",
            color:'#3498db'
        }
    },
    {
        type: "FL_ITEM",
        values: {
            imgUrl: "https://s3-ap-southeast-1.amazonaws.com/propertytoday/wvbfxmjyglrasokezniupctdqInvestasi_Bangun_Kos_Dekat_UII_5.jpg",
            startTime: "Beli Tanah Kavling Di Kulonprogo Sekarang Juga dan nikmati Untungnya",
            endTime: "Bantul, Yogyakarta",
            cost: "1.500.000",
            duration: "2hr 45min",
            stops: "Non Stop",
            color:'#2ecc71'
        }
    },
    
    
   
];
class Produk extends Component {
    
    constructor(args) {
        super(args);
        this.state = {
            dataProvider: new DataProvider((r1, r2) => {
                return r1 !== r2
            }).cloneWithRows(FlightData)
        };
        this._layoutProvider = new LayoutProvider((i) => {
            return this.state.dataProvider.getDataForIndex(i).type;
        }, (type, dim) => {
            switch (type) {
                default:
                    dim.width = width;
                    dim.height = 190;

            }
        });
        this._renderRow = this._renderRow.bind(this);
    }
    _renderRow(type, data) {
                return (<View  style={styles.outerContainer}>
           
                    <View style={[styles.itemContainer, { backgroundColor: data.values.color }]}>
                  <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Produku")}
                  style={{
                  flex: 1,
                  width: '100%',
                  height: 130,
                  resizeMode: 'cover'
                  }}>
                  <ImageBackground
                  source={{uri:data.values.imgUrl}}
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
                    <Text style={styles.itemName}>{data.values.startTime}</Text>
                    <Text style={styles.itemAlamat}>{data.values.endTime}</Text>
                    <Text style={styles.itemCode}>Rp.{data.values.cost}/m2</Text>
                  </View>
        
        
                </View>);
    }
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
            flex:1,
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
        <View style={styles.container}>

            <RecyclerListView rowRenderer={this._renderRow} dataProvider={this.state.dataProvider}
                              layoutProvider={this._layoutProvider}/>



        </View>
        </React.Fragment>
        )
    }
}
export default Produk
const styles = {
    container: {
        flex: 1,
        padding:5,

    },
    header:{
        height: 65,
        backgroundColor:'orange',
        alignItems:"center",
        flexDirection:"row",
        elevation:4
    },
    headerText:{
        color:'white',
        fontSize:18,
        marginLeft: 16,
        paddingBottom:3
    },
    backIcon:{
        height:23,
        width:23,
        marginLeft:16
    },
    headerButton: {
        height: 44,
        width: 44,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    outerContainer:{
        flex:1,
        alignItems:'stretch'
    },
    container_card: {
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
}