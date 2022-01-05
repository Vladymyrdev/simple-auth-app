import {
	AuthActionEnum,
	SetAuthAction,
	SetUserAction,
	UserActionEnum,
} from './types';

export const logout = (): SetAuthAction => {
	return {
		type: AuthActionEnum.SET_LOGOUT,
		payload: false,
	};
};

export const login = (v: boolean): SetAuthAction => {
	return {
		type: AuthActionEnum.SET_LOGIN,
		payload: v,
	};
};

export const setUser = (values: any): SetUserAction => {
	return {
		type: UserActionEnum.SET_USER,
		payload: values,
	};
};
