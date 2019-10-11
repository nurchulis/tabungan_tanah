import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import Client from './Page'

const App = createSwitchNavigator(
  {
    Splash: Client
  },
  {
    initialRouteName: 'Splash',
    
    
  }
)

export default createAppContainer(App)