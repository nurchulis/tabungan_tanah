
import React, { Component } from 'react';
import { View, Text,Dimensions, StyleSheet, TouchableOpacity,WebView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Spinner from 'react-native-loading-spinner-overlay';
import Styles from '../../styles';

const DeviceHeight = Dimensions.get('window').height
const DeviceWidth = Dimensions.get('window').width
class MemoryHome extends Component {
    state = {
        modalVisible: false,
        visible:true
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
       showSpinner() {
            console.log('Show Spinner');
            this.setState({ visible: true });
        }
    
        hideSpinner() {
            console.log('Hide Spinner');
            this.setState({ visible: false });
        }
    static navigationOptions = ({ navigation }) => ({
        title: "News",
        headerStyle: {height: DeviceWidth/8}
    })

    render() {
        return (
            <View style={Styles.container}>
 
 <Text>Hello World!</Text>

 <View style={{ height: DeviceHeight, width: DeviceWidth,overflow:'hidden' }}>
  <WebView
    source={{ uri: 'https://m.kumparan.com/@kumparantech/twitter-matikan-fitur-tweet-via-sms-setelah-akun-ceo-nya-diretas-1roR2ErY6AQ' }}
    scalesPageToFit={true}
  />
</View>        


            </View>
        );
    }
}

export default MemoryHome;