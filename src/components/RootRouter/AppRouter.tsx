import { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useUserContext } from '../AuthProvider/context';
import { privateRoutes, publicRoutes, RouteNames } from '../../router';

export const AppRouter: FC = () => {
	const {
		state: { isAuth },
	} = useUserContext();

	return isAuth ? (
		<Switch>
			{privateRoutes.map((route) => (
				<Route
					path={route.path}
					exact={route.exact}
					component={route.component}
					key={route.path}
				/>
			))}
			<Redirect to={RouteNames.LOGIN} />
		</Switch>
	) : (
		<Switch>
			{publicRoutes.map((route) => (
				<Route
					path={route.path}
					exact={route.exact}
					component={route.component}
					key={route.path}
				/>
			))}
			<Redirect to={RouteNames.EVENT} />
		</Switch>
	);
};
