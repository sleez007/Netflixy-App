import React from 'react';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import store from '../store'

export default ()=>{
   return  (<React.StrictMode>
    <Provider store={store}>
      <div>
        <h1>Hello root component</h1>
        <DevTools/>
      </div>
    </Provider>
  </React.StrictMode>)
}