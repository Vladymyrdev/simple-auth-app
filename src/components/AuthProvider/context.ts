import React, { createContext, useContext } from 'react';
import { initialState } from './reducer';
import { AuthState, SetAuthAction, SetUserAction } from './reducer/types';

export interface AppContextInterface {
	state: AuthState;
	dispatch: React.Dispatch<SetAuthAction | SetUserAction>;
}

const initialValues: AppContextInterface = {
	state: initialState,
	dispatch: () => {},
};

export const UserContext = createContext<AppContextInterface>(initialValues);

export const useUserContext = () => useContext(UserContext);
