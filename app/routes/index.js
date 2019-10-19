import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {HomeScreen, CoinDetails} from '../screens';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    headerMode: 'none',
    navigationOptions: {
      header: null,
    },
  },

  Coin: {
    screen: CoinDetails,
    headerMode: 'none',
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(AppNavigator);
