import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Dimensions } from 'react-native';
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Rp. 2500.000',
      tgl: '27 Mei 2019',
      kegunaan: 'Pembayaran cicilan'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Rp. 3500.000',
      tgl : '2 April 2019',
      kegunaan: 'Pembayaran cicilan'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Rp. 200.000',
      tgl : '19 Februari 2019',
      kegunaan: 'Pengisian saldo'
    },
  ];
  
const DeviceWidth = Dimensions.get('window').width
function Item({ title, tgl,kegunaan }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.kegunaan}>{kegunaan}</Text>
        <Text style={{position: 'absolute', right: 10, marginTop:10}}>{tgl}</Text>
      </View>
    );
  }
class MemoryHome extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Show debit",
        headerStyle: {height: DeviceWidth/8},
    })

  
       
    

    render() {
        return (
            <SafeAreaView style={styles.container}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => <Item tgl={item.tgl} kegunaan={item.kegunaan} title={item.title} />}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
        );
    }
}

export default MemoryHome;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white'
    },
    item: {
      backgroundColor: '#ecf0f1',
      padding: 10,
      marginVertical: 8,
      flexDirection:"row",
      marginHorizontal: 16,
    },
    title: {
      fontSize: DeviceWidth/22,
      color:'#f1c40f',
      fontWeight:'bold',
      marginRight:20
    },
    kegunaan:{
      fontSize: DeviceWidth/30,
      color:'#bdc3c7',
      textAlignVertical:'center',
      
    }
  });