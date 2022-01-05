import {
	AuthAction,
	AuthActionEnum,
	AuthState,
	UserAction,
	UserActionEnum,
} from './types';

export const initialState: AuthState = {
	isAuth: false,
	user: { Nickname: '', Username: '', password: '', remember: true },
};

export const authReducer = (
	state: AuthState,
	action: AuthAction | UserAction
): AuthState => {
	switch (action.type) {
		case AuthActionEnum.SET_LOGOUT:
			return { ...state, isAuth: action.payload };
		case AuthActionEnum.SET_LOGIN:
			return { ...state, isAuth: action.payload };
		case UserActionEnum.SET_USER:
			return { ...state, user: action.payload };
		default:
			throw new Error('Error');
	}
};
