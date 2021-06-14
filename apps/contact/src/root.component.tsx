import React from "react";
import AppStyle from './appStyle';
import Header from "./components/Header";
import styled from "styled-components";
import { Provider } from "react-redux";
import { store } from "./store";
import InfoList from "./components/InfoList";



const ContactRoot = styled.div`
    padding: 15px 45px;
    height: calc(100% - 30px);
`

export default function Root() {
    return (
        <Provider store={store}>
            <ContactRoot>
                <AppStyle />
                <Header />
                <InfoList />
            </ContactRoot>
        </Provider>
    )
}
