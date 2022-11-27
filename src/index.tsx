import React                               from 'react';
import ReactDOM                            from 'react-dom';
import RouteInit                           from './routes/routeInit';
import {StateProvider}                     from './providers/stateProvider';
import StateReducerService, {initialState} from './services/stateReducerService';

import './assets/scss/app.scss';

ReactDOM.render(
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer={StateReducerService}><RouteInit/></StateProvider>
    </React.StrictMode>,
    document.getElementById('root')
);