import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify"
import { PersistGate } from "redux-persist/integration/react";
import store, { persiststore } from "../store";
import DevTools from './DevTools';
import StyledContainer from "../styled/StyledContainer";
import theme from '../constants/theme';
import App from '../components/App';

export default ()=>{
   return  (<React.StrictMode>
    <Provider store={store}>
        <ToastContainer />
        <PersistGate persistor={persiststore} loading={null}>
            <ThemeProvider theme={theme}>
                <StyledContainer>
                    <Router>
                        <App />
                    </Router>
                    <DevTools/>
                </StyledContainer>
            </ThemeProvider>
        </PersistGate>
    </Provider>
  </React.StrictMode>);
}