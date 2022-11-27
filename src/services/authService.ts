import {base64} from './helperService';

const authService = {
    setUser() {
        const _tempData = {};
        return _tempData;
    },
    removeUser() {
        localStorage.removeItem('temp');
        return null;
    },
    user() {
        const _tempData: string | null = localStorage.getItem('temp');

        if (!_tempData) return null;

        const user = JSON.parse(base64.decode(_tempData));
        return {
            emailAddress: user?.emailAddress,
            accessToken: user?.accessToken,
        };
    }
}

export {authService};