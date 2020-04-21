import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider } from '@yuandana/react-redux-x';
import Router from '@router';
import Store from '@store';

const App = () => {
    return (
        <Provider store={Store}>
            <Router />
        </Provider>
    );
};

export default App;
