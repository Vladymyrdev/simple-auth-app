import { Layout } from 'antd';
import { FC, useEffect } from 'react';
import { AppRouter } from '../RootRouter/AppRouter';
import { FooterApp } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import { useUserContext } from '../AuthProvider/context';
import { AuthService } from '../../services/AuthService';

export const App: FC = () => {
	const { dispatch } = useUserContext();

	useEffect(() => {
		AuthService.checkLogin(dispatch);
	}, [dispatch]);

	return (
		<Layout>
			<Navbar />
			<Layout.Content>
				<AppRouter />
			</Layout.Content>
			<FooterApp />
		</Layout>
	);
};
