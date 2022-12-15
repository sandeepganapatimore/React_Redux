import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import CakeContainer from './Component/CakeContainer';
import React from 'react';
import HookContainer from './Component/HookContainer';
import IceCreamContainer from './Component/IceCreamContainer';
import NewCakeContainer from './Component/NewCakeContainer';
import UserComponent from './Component/UserComponent';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <IceCreamContainer />
        <HookContainer />
        <CakeContainer />
        <NewCakeContainer /> */}

        <UserComponent />
      </Provider>
    </div>
  );
}

export default App;
