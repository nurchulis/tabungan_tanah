import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
const DeviceWidth = Dimensions.get('window').width
class ExampleOne extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Claster Graha Balaicatur murah dan ....",
        headerStyle: {height: DeviceWidth/8},
       
        
        headerRight: (
          <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.navigate("Tambah_saldo")} >
          <Icon name="question-circle" size={25} color="#2c3e50"/>
        </TouchableOpacity>
        )
       
    
    })

  defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
      justifyContent: 'center'
    }
  };

  onNextStep = () => {
    console.log('called next step');
  };

  onPaymentStepComplete = () => {
    alert('Payment step completed!');
  };

  onPrevStep = () => {
    console.log('called previous step');
  };

  onSubmitSteps = () => {
    console.log('called on submit step.');
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor:'white' }}>
        <ProgressSteps 
            activeStep={0}>
          <ProgressStep
            label="Bayar Dp"
            onNext={this.onPaymentStepComplete}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
          >
            <View style={{ alignItems: 'center' }}>
            
  <Image source={require('../../../../components/assets/icon/pay.png')}  style={{margin:15, width:150, height:150}} />        
             <Text style={{fontSize:15}}>Silakan lakukan pembayatan DP,dengan kode dibawah</Text>
              <Text style={{fontSize:25, color:'black', marginTop:20, fontWeight:'blod'}}>3308182112</Text>

              <Text style={{fontSize:15, color:'#3498db', marginTop:25}}>Metode Pembayaran ?</Text>
             <Button type="outline" title="Pembayaran" buttonStyle={{marginTop:30}}/>           
              </View>
          </ProgressStep>
          <ProgressStep
            label="Konfirmasi"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
          >
            <View style={{ alignItems: 'center' }}>

  <Image source={require('../../../../components/assets/icon/confrim.png')}  style={{margin:15, width:150, height:150}} />        
             <Text style={{fontSize:15}}>Pembayaran anda sudah di Confrim, dan dinyatakan diterima</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Angsuran"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
          >
            <View style={{ alignItems: 'center' }}>

  <Image source={require('../../../../components/assets/icon/angsuran.png')}  style={{margin:15, width:150, height:150}} />        
             <Text style={{fontSize:15}}>Tahap Angsuran</Text>

             <Button type="outline" title="Dicicil" buttonStyle={{marginTop:30}}/>    
            </View>
          </ProgressStep>
          <ProgressStep
            label="Selesai"
            onPrevious={this.onPrevStep}
            onSubmit={this.onSubmitSteps}
            scrollViewProps={this.defaultScrollViewProps}
          >
            <View style={{ alignItems: 'center' }}>

  <Image source={require('../../../../components/assets/icon/selamat.png')}  style={{margin:15, width:150, height:150}} />        
             <Text style={{fontSize:15}}>Selamat pembeian anda sudah lunas</Text>

             <Button type="outline" title="Buka" buttonStyle={{marginTop:30}}/>    
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
}

export default ExampleOne;
const styles = StyleSheet.create({


    headerButton: {
      height: 44,
      width: 44,
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  }
  
  });