import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebseContext } from './store/Context';
import Context from './store/Context';
import firebase from './firebase/config'

ReactDOM.render(
    <FirebseContext.Provider value={{firebase}}>
        <Context>
            <App />
        </Context>
    </FirebseContext.Provider>
    , document.getElementById('root')
    );
