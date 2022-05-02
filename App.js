// //import liraries
import React from 'react';
import AppStack from '././app/src/Routes';
import {Provider} from 'react-redux';
import {store} from './app/src/redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default App;
