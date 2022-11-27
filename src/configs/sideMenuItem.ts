import {paths} from './constants';
import DashboardWhite from '../assets/images/DashboardWhite.png';
import AuditWhite from '../assets/images/AuditWhite.png';
import CareerWhite from '../assets/images/responseWhite.png';

interface propsMenuItem {
    name: string;
    to: string;
}

export interface propsMenuList {
    name: string;
    to: string;
    icon?: any;
    sub?: propsMenuItem[];
}

export const adminNavMenuList: propsMenuList[] = [
  
    {
        name: 'My City List',
        to: paths.accounts.myCity,
        icon: AuditWhite
    },
  
    {
        name: 'Search city',
        to: paths.accounts.searchCity,
        icon: CareerWhite
    },
    {
        name: 'Add City',
        to: paths.accounts.addcity,
        icon: CareerWhite
    },

    {
        name: 'User List',
        to: paths.accounts.userList,
        icon: DashboardWhite
    },

];
