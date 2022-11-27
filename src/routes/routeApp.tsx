import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { paths } from '../configs/constants';
import AuthLayout from '../components/layouts/authLayout';
// import { AxiosProvider } from '../providers/AxiosProvider';
import AppLayout from '../components/layouts/AppLayout';


const Login = lazy(() => import('../pages/auth/login'));
const UserList = lazy(() => import('../pages/userList'));
const MyCity = lazy(() => import('../pages/myCity'));
const SearchCity = lazy(() => import('../pages/searchCity'));
const Addcity = lazy(() => import('../pages/addcity'));

function RouteApp() {
    return (<>
        {/* <AxiosProvider /> */}
        <Routes>
            <Route path={paths.accounts.home} element={<AppLayout />}>
                <Route path={paths.accounts.userList} element={<Suspense fallback={""}><UserList /></Suspense>} />
                <Route path={paths.accounts.myCity} element={<Suspense fallback={""}><MyCity /></Suspense>} />
                <Route path={paths.accounts.searchCity} element={<Suspense fallback={""}><SearchCity /></Suspense>} />
                <Route path={paths.accounts.addcity} element={<Suspense fallback={""}><Addcity /></Suspense>} />
            </Route>
            <Route path={paths.home} element={<AuthLayout />}>
                <Route index element={<Suspense fallback={""}><Login /></Suspense>} />
            </Route>

        </Routes>
    </>);
}

export default RouteApp;