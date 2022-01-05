import React from 'react';
import {
	login,
	logout,
	setUser,
} from '../components/AuthProvider/reducer/actions';
import {
	AuthAction,
	UserAction,
} from '../components/AuthProvider/reducer/types';
import { JSONParser } from '../utils/JSONParser';

export class AuthService {
	static onLogin(dispatch: React.Dispatch<AuthAction>, values: any) {
		dispatch(login(true));
		localStorage.setItem('user', JSON.stringify(values));
	}

	static onLogout(dispatch: React.Dispatch<AuthAction>) {
		dispatch(logout());
		localStorage.removeItem('auth');
	}

	static checkLogin(dispatch: React.Dispatch<AuthAction | UserAction>) {
		const auth = JSONParser(localStorage.getItem('auth'));
		const user = JSONParser(localStorage.getItem('user'));
		dispatch(login(auth));
		dispatch(setUser(user));
	}

	static setUserData(dispatch: React.Dispatch<UserAction>) {
		const user = JSONParser(localStorage.getItem('user'));
		dispatch(setUser(user));
	}

	static setAuth(isAuth: boolean) {
		localStorage.setItem('auth', JSON.stringify(isAuth));
	}
}
