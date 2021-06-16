import React, { useEffect, useState } from "react";
import AppStyle from './appStyle';
import Header from "./components/Header";
import styled, { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./store";
import InfoList from "./components/InfoList/InfoList";
import { DarkTheme, BaseTheme } from "./themes";



const ContactRoot = styled.div`
    padding: 15px 45px;
    height: calc(100% - 30px);
`



export default function Root() {
    const [isDark, setIsDark] = useState<boolean>(
        localStorage.getItem("dark-theme")
            ? JSON.parse(localStorage.getItem("dark-theme"))
            : false
    );
    const onThemeChanged = (e: CustomEvent) => {
        setIsDark(e.detail.isDark);
    }
    useEffect(() => {
        window.addEventListener("themeChanged", onThemeChanged);
        return () => {
            window.removeEventListener("themeChanged", onThemeChanged);
        }
    }, []);

    return (
        <ThemeProvider theme={isDark ? DarkTheme : BaseTheme}>
            <Provider store={store}>
                <ContactRoot>
                    <AppStyle />
                    <Header />
                    <InfoList />
                </ContactRoot>
            </Provider>
        </ThemeProvider>
    )
}
