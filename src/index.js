import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./redux/store";
import AppProvider from "./core/containers/AppProvider";
import AppRoute from "./core/containers/router";
import Boot from './redux/boot';

const App = () => (
    <Provider store={store}>
        <AppProvider>
            <AppRoute/>
        </AppProvider>
    </Provider>
)
Boot()
    .then(() => App())
    .catch(error => console.error(error));

ReactDOM.render(<App/>,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
