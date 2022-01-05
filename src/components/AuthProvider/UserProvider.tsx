import { useReducer } from 'react';
import { authReducer, initialState } from './reducer';
import { AppContextInterface, UserContext } from './context';

export const UserProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initialState);

	const userValues: AppContextInterface = {
		state,
		dispatch,
	};

	return (
		<UserContext.Provider value={userValues}>{children}</UserContext.Provider>
	);
};
