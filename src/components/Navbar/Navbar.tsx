import { Layout, Avatar, Button } from 'antd';
import { FC } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { useUserContext } from '../AuthProvider/context';
import { AuthService } from '../../services/AuthService';

export const Navbar: FC = () => {
	const {
		state: { user, isAuth },
		dispatch,
	} = useUserContext();
	const name = user?.Username.toUpperCase();

	const logoutHandler = () => {
		AuthService.onLogout(dispatch);
	};

	return (
		<Layout.Header style={{ width: '100%' }}>
			{isAuth ? (
				<>
					<Button type="primary" size="large" onClick={logoutHandler}>
						Log Out
					</Button>
					<div style={{ color: '#000', marginLeft: '20px' }}>{name}</div>
					<div className="user">
						<Avatar src="https://joeschmoe.io/api/v1/random" />
					</div>
				</>
			) : (
				<div className="user">
					<Avatar size={60} icon={<UserOutlined />} />
				</div>
			)}
		</Layout.Header>
	);
};
