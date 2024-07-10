import store from './store';
import { TodoApp } from './components/TodoApp';

import React from 'react';
import { Provider } from 'react-redux';


const PAGE_CAP = 3


const App = () => {
    return (
        <Provider store={store}>
            <TodoApp pageCap={PAGE_CAP} />
        </Provider>
    )
}


export default App;
