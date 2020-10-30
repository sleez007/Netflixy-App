import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from "styled-components";
import DevTools from './DevTools';
import store from '../store'
import StyledContainer from "../components/styledContainer";
import theme from '../constants/theme';

export default ()=>{
   return  (<React.StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <StyledContainer>
                <DevTools/>
            </StyledContainer>
        </ThemeProvider>
    </Provider>
  </React.StrictMode>);
}