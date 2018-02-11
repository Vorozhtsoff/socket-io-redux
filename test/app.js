import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './configure-store';


const store = configureStore({});

export default class App extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                <div>Hello world</div>
            </Provider>
        );
    }
}