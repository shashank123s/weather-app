import * as React from "react";
import {httpRequest} from "../services/httpService";
import {paths} from "../configs/constants";
export interface PropRoute {
    path: string;
    element?: React.ReactNode | null;
}

export const getAccountsLogin = (formData: any) => {
    const data = {
        email: formData?.keyUser,
        password: formData?.keyPassword
    }
    return httpRequest.post(paths.api.accounts.login, data);
};


export const getUserList = (formData: any) => {
    const url = `${paths.api.accounts.joinMeList}`; 
    return httpRequest.get(url);
}

export const getSaveCityList = (formData: any) => {
    const url = `${paths.api.accounts.insightList}`;
    return httpRequest.get(url);
}


export const addCity = (data: any) => {
    return httpRequest.post(paths.api.accounts.addCity, data);
}







