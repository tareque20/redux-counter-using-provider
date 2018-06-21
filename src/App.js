import React from 'react';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import CounterApp from './containers/CounterApp';
import counter from './reducers';

const store = createStore(counter);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <CounterApp />
            </Provider>
        )
    }
}
