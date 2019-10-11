import React from 'react';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
//import MemoryScreen from './Memory';
import Produk from './Produk';
import Home from './Dashboard';
import Produk_detail from './Produk/Detail'
import News_kpti from './News'
import Account from './Account'
import Chat from './Chat'
import Skema from './Payment/Skema'
import Done from './Payment/Done'
import DetailTabunganku from './Account/Tabunganku/DetailTabungan'
import Tambah_saldo from './Payment/Saldo/Tambah_saldo'
import Pilih from './Produk/Pilih'
import Bookmark from './Bookmark';

//import { fromLeft } from 'react-navigation-transitions';
const SettingsTabs = createMaterialTopTabNavigator({
    Dashboard: {
        screen: Home,
        navigationOptions: {
            title: "Home",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="home"
                    size={20}
                    color={tintColor} />
            )
        }
    },
    Produk: {           
        screen: Produk,
        navigationOptions: {
            tabBarLabel: "Produk",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="box"
                    size={20}
                    color={tintColor} />
            )
        }
    },
    Chat: {
        screen: Chat,
        navigationOptions: {
            tabBarLabel: "Chat",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="comment-dots"
                    size={20}
                    color={tintColor} />
            )
        }
    },
    Akun: {
        screen: Account,
        navigationOptions: {
            tabBarLabel: "Akun",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="user-alt"
                    size={20}
                    color={tintColor} />
            )
        }
    }

},
{
    initialRouteName: 'Dashboard',
    tabBarOptions: {
        showIcon: true,
        upperCaseLabel:false,
        labelStyle: {
            fontSize: 12,
        },
        tabStyle: {
           marginBottom:-10,
        },
       // renderIndicator: () => null,
        indicatorStyle:{
            //opacity:0,
            backgroundColor:'#f39c12'
        },
        allowFontScaling:true,
        activeTintColor: '#f39c12',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'white',
        }
      },
  animationEnabled: true,
  tabBarPosition:'bottom',
  },
  
);


const App = createStackNavigator(
    {
      Splash: {
        screen: SettingsTabs,
        navigationOptions: {
            header: null,
        }
    },
      Produku: {
        screen: Produk_detail,
        navigationOptions: {
            tabBarLabel: "Akun",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="user-alt"
                    size={25}
                    color={tintColor} />
            )
        }
    },
    Bookmark: {
        screen: Bookmark,
        navigationOptions: {
            tabBarLabel: "Akun",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="user-alt"
                    size={25}
                    color={tintColor} />
            )
        }
    },
    
    Skema: {
        screen: Skema,
        navigationOptions: {
            tabBarLabel: "Akun",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="user-alt"
                    size={25}
                    color={tintColor} />
            )
        }
    },
    Done:{
        screen: Done,
        navigationOptions: {
            tabBarLabel: "Akun",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="user-alt"
                    size={25}
                    color={tintColor} />
            )
        }
    },
    Pilih:{
        screen: Pilih,
        navigationOptions: {
            tabBarLabel: "Akun",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="user-alt"
                    size={25}
                    color={tintColor} />
            )
        }
    },
    DetailTabunganku:{
        screen: DetailTabunganku,
        navigationOptions: {
            tabBarLabel: "Akun",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="user-alt"
                    size={25}
                    color={tintColor} />
            )
        }
    },
    
    News: {
        screen: News_kpti,
        navigationOptions: {
            tabBarLabel: "Akun",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="user-alt"
                    size={25}
                    color={tintColor} />
            )
        }
    },
    Tambah_saldo: {
        screen: Tambah_saldo,
        navigationOptions: {
            tabBarLabel: "Tambah Saldo",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="user-alt"
                    size={25}
                    color={tintColor} />
            ),
            headerStyle: { elevation: 0,
                shadowOpacity: 0}
        }
    }
    },
    {
      initialRouteName: 'Splash',
      transitionConfig: () => ({
        transitionSpec: {
          duration: 0,
        },
      }),
    }
  )
  

//Issue: the tab navigator needs to be wrapped inside a stack navigator
export default createStackNavigator({ App }, { mode:"modal",headerMode: "none" });