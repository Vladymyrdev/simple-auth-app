export type User = {
	Username: string;
	Nickname: string;
	password: string;
	remember: boolean;
};

export interface AuthState {
	isAuth: boolean;
	user: User;
}

export enum AuthActionEnum {
	SET_LOGOUT = 'SET_LOGOUT',
	SET_LOGIN = 'SET_LOGIN',
}

export interface SetAuthAction {
	type: AuthActionEnum;
	payload: boolean;
}

export enum UserActionEnum {
	SET_USER = 'SET_USER',
}

export interface SetUserAction {
	type: UserActionEnum;
	payload: User;
}

export type UserAction = SetUserAction;

export type AuthAction = SetAuthAction;
