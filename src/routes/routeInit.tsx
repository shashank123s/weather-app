import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import RouteApp from './routeApp';
import AppThemeProvider from '../providers/appThemeProvider';

function RouteInit() {
    return (
        <BrowserRouter>
            <AppThemeProvider>
                <RouteApp/>
            </AppThemeProvider>
        </BrowserRouter>
    );
}

export default RouteInit;