import React, { Component } from 'react';
import { Alert, Dimensions, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dropdown } from 'react-native-material-dropdown';
const DeviceWidth = Dimensions.get('window').width

class Expandable_ListView  extends React.Component  {
  constructor(props) {
    super(props);
    
    Obj = new App();
    this.state = {

        layout_Height: 0
  
      }
  }
  
  siaaap=()=>{
    Obj.ambilcuy();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.item.expanded) {
      this.setState(() => {
        return {
          layout_Height: null
        }
      });
    }
    else {
      this.setState(() => {
        return {
          layout_Height: 0
        }
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layout_Height !== nextState.layout_Height) {
      return true;
    }
    return false;
  }

  show_Selected_Category = (item) => {

    // Write your code here which you want to execute on sub category selection.
    Alert.alert(item);

  }
  cek_status(status){
   
    if(status=='Sedang dicicil'){
      return '#f1c40f'
    }else if(status == 'Sudah lunas'){
      return '#2ecc71'
    }else {
      return '#3498db'
    }
  }
  static navigationOptions = ({ navigation }) => ({
    title: "Tabunganku",
   

})

  render() {
    return (
      <View style={styles.Panel_Holder}>
        
        <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction} style={styles.category_View}>

          <Text style={styles.category_Text}>{this.props.item.category_Name} </Text>
            
          <Text style={{color:(this.cek_status(this.props.item.status))}}>{this.props.item.status}</Text>
            
          <Icon name="chevron-down" size={DeviceWidth/25} style={{marginRight:20}}  color="#95a5a6"/>

        </TouchableOpacity>

        <View style={{ height: this.state.layout_Height, overflow: 'hidden' }}>
        <Text style={{marginLeft:10}}>Anda Melakukan cicilan atau angsuran sebanyak</Text>

        <View style={{flexDirection:"row"}}>
        <Text style={{fontSize:20,color:'#f39c12', marginLeft:10}}>Angsuran 12 X</Text>

        <Text style={{fontSize:15,color:'#2980b9', marginLeft:10, position: 'absolute', right: 0}}>Ubah Skema Angsuran</Text>
        </View>
          {
            this.props.item.sub_Category.map((item, key) => (

              <TouchableOpacity key={key} style={styles.sub_Category_Text} 
              // onPress={this.show_Selected_Category.bind(this, item.name)}
              >

                
                <View style={{flexDirection:"row", marginTop:5}}>
                <Text style={{fontSize:15}}>
                Rp. {item.setoran}
                </Text>
                <Text style={{position: 'absolute', right: 0}}>
                {item.tgl}
                </Text>
                </View>




              </TouchableOpacity>

            ))
          }

          <View style={{ width: '100%', height: 1, marginTop:15, backgroundColor: '#000' }} />
          <View style={{flexDirection:"row", padding:10}}>
                <Text style={{fontSize:15}}>
                Total
                </Text>
                <Text style={{position: 'absolute',marginTop:10, right: 0, fontWeight:'bold'}}>
                Target: Rp. 150.000.000 / Rp. 75.000.000
                </Text>
          </View>
          <View style={{flexDirection:'row', width:DeviceWidth}}>          
              <Button
              buttonStyle={{backgroundColor:'#f39c12',width:DeviceWidth/2}}
                title="Cicil Rp. 25.000.000"
              />
              <Button 
      onPress={() => this.props.navigation.navigate("DetailTabunganku")}  
              buttonStyle={{backgroundColor:'#2980b9',width:DeviceWidth/2}}
                title="Lihat Progres"
              />
          </View>
        </View>

      </View>

    );
  }
}

export default class App extends Component {

  constructor(props) {
    super(props);
    this.ambilcuy = this.ambilcuy.bind(this);
    if (Platform.OS === 'android') {

      UIManager.setLayoutAnimationEnabledExperimental(true)

    }

    const array = [

      {
        expanded: false, category_Name: "Claster Graha Balacatur", status:'Sedang dicicil', sub_Category: [{ id: 1, setoran: '25.000.000', tgl:'25 jul 2019' },
        { id: 1, setoran: '25.000.000', tgl:'25 jul 2019' }, { id: 1, setoran: '25.000.000', tgl:'25 jul 2019' }]
      },

      {
        expanded: false, category_Name: "Jasmine Village Sumberadi", status:'Sudah lunas', sub_Category: [{ id: 1, setoran: '25.000.000', tgl:'25 jul 2019' },
        { id: 1, setoran: '25.000.000', tgl:'25 jul 2019' }, { id: 1, setoran: '25.000.000', tgl:'25 jul 2019' }]
      },

      {
        expanded: false, category_Name: "Perumahan Giripeni", status:'Menunggu DP', sub_Category: [{ id: 1, setoran: '25.000.000', tgl:'25 jul 2019' },
        { id: 1, setoran: '25.000.000', tgl:'25 jul 2019' }, { id: 1, setoran: '25.000.000', tgl:'25 jul 2019' }]
      },

      {
        expanded: false, category_Name: "Home Entertainment", status:'Sedang dicicil', sub_Category: [{ id: 1, setoran: '25.000.000', tgl:'25 jul 2019' },
        { id: 1, setoran: '25.000.000', tgl:'25 jul 2019' }, { id: 1, setoran: '25.000.000', tgl:'25 jul 2019' }]
      },

      {
        expanded: false, category_Name: "Sedayu Residenece", status:'Sedang dicicil', sub_Category: [{ id: 1, setoran: '25.000.000', tgl:'25 jul 2019' },
        { id: 1, setoran: '25.000.000', tgl:'25 jul 2019' }, { id: 1, setoran: '25.000.000', tgl:'25 jul 2019' }]
      },

      {
        expanded: false, category_Name: "Kitchen Appliances", status:'Sedang dicicil', sub_Category: [{ id: 1, setoran: '25.000.000', tgl:'25 jul 2019' },
        { id: 1, setoran: '25.000.000', tgl:'25 jul 2019' }, { id: 1, setoran: '25.000.000', tgl:'25 jul 2019' }]
      }
    ];

    this.state = { AccordionData: [...array] }
  }
  static navigationOptions = ({ navigation }) => ({
    title: "Tabunganku",
    headerStyle: {height: DeviceWidth/8},
   
    
    headerRight: (
      <TouchableOpacity
      style={styles.headerButton}
      onPress={() => navigation.navigate("Tambah_saldo")} >
      <Icon name="plus-square" size={25} color="#2c3e50"/>
    </TouchableOpacity>
    )
   

})

  update_Layout = (index) => {

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const array = [...this.state.AccordionData];

    array[index]['expanded'] = !array[index]['expanded'];

    this.setState(() => {
      return {
        AccordionData: array
      }
    });
  }
  ambilcuy (id) {
		this.props.navigation.navigate('Bookmark')
	}	

  render() {
    let data = [{
      value: 'Lunas',
    }, {
      value: 'Menungu DP',
    }, {
      value: 'Dicicil',
    }];
 
    return (
      <View style={styles.MainContainer}>
      
      <View style={{flexDirection:"row", padding:10, paddingBottom:DeviceWidth/15, paddingTop:DeviceWidth/20}}>
            <Text style={{textAlign:'left', marginLeft:10, color:'#2c3e50',fontWeight:'300', fontSize:DeviceWidth/22}}>
                Saldo Anda: 
            </Text>
            <Text style={{textAlign:'left', marginLeft:10, color:'#f39c12',fontWeight:'300', fontSize:DeviceWidth/22}}>
            Rp. 500.000.000</Text>
            
             <Dropdown
             itemTextStyle={{fontSize:5}}
             pickerStyle={{fontSize:5}}
             containerStyle={{width:DeviceWidth/4, position:'absolute', right:10, marginTop:-15}}
        label='Filter'
        data={data}
      />
              </View>
        <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}>
          {
            this.state.AccordionData.map((item, key) =>
              (
                <Expandable_ListView key={item.category_Name} navigation={this.props.navigation} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
              ))
          }
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: 'white',
  },

  iconStyle: {

    width: 30,
    height: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    tintColor: '#fff'

  },

  sub_Category_Text: {
    fontSize: 18,
    color: '#000',
    padding: 10
  },

  category_Text: {
    textAlign: 'left',
    color: '#2c3e50',
    fontSize: DeviceWidth/22,
    padding: 10
  },

  category_View: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ecf0f1'
  },

  Btn: {
    padding: 10,
    backgroundColor: '#FF6F00'
  },
  headerButton: {
    height: 44,
    width: 44,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
}

});