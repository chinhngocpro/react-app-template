import React from "react";
import {ConfigProvider} from "antd";
import {IntlProvider} from "react-intl";
import {ThemeProvider} from "styled-components";
import {useSelector} from "react-redux";
import AppLocale from "../languages";
import Themes from "../themes";

export default function AppProvider({children}) {

    const selectedLang  = useSelector(state => state.LangProvider.lang);
    const selectedTheme = useSelector(state => state.ThemeProvider.theme);

    const locale = AppLocale[selectedLang];
    const theme  = Themes[selectedTheme];

    return (
        <ConfigProvider locale={locale.antD}>
            <IntlProvider locale={locale.locale} messages={locale.messages}>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </IntlProvider>
        </ConfigProvider>
    )
}