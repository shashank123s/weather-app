import {authService} from './authService';

type ActionType = "SET_USER" | "Lily" | "Roy";

export interface PropReducerAction {
    user?: any;
    type?: ActionType;
}

export const initialState = {
    user: authService.user()
};

const StateReducerService = (state: any, action: PropReducerAction) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default StateReducerService;