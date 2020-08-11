import { combineReducers } from 'redux';
import LangProvider from './LanguageProvider/reducer'
import ThemeProvider from './ThemeProvider/reducer'

export default combineReducers({
    LangProvider,
    ThemeProvider
});