import { createStackNavigator } from 'react-navigation';
import Home from './home';
import Tabunganku from './Tabunganku'
import Account from './Editaccount'
import Showdebit from './ShowDebit'
import Downloaddebit from './DownloadDebit'
import Help from './Help'
import Terms from './Termsofservice'
import Privacy from './Privacypolicy'

export default createStackNavigator({
    Home,
    Tabunganku,
    Account,
    Showdebit,
    Downloaddebit,
    Help,
    Terms,
    Privacy

})