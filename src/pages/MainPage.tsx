import { SmileOutlined } from '@ant-design/icons';
import { FC, useEffect } from 'react';
import { useUserContext } from '../components/AuthProvider/context';
import { AuthService } from '../services/AuthService';

const Login: FC = () => {
	const {
		state: { user, isAuth },
	} = useUserContext();
	const name = user?.Username?.toUpperCase();

	console.log(user);

	useEffect(() => {
		AuthService.setAuth(isAuth);
	}, [isAuth]);

	return (
		<div className="user__login">
			<span>Hi, {name}</span>
			<SmileOutlined />
		</div>
	);
};

export default Login;
