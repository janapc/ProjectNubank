import React from 'react';
import {StatusBar, YellowBox} from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

console.disableYellowBox = true;
const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
    <Routes />
  </>
);

export default App;
