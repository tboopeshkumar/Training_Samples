import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import DevTools from "./DevTools";
import StyledContainer from "../styled/StyledContainer";
import { ThemeProvider } from "styled-components"
import theme from "../constants/theme";
import App from "../components/App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router } from "react-router-dom";

const Root = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <StyledContainer>
                    <Router>
                        <App/>
                    </Router>
                    <DevTools />
                </StyledContainer>
            </ThemeProvider>
            <ToastContainer/>
        </Provider>
    );
};

export default Root;