import React from 'react';
import Login from '../pages/MainPage';
import Event from '../pages/LoginPage';

export interface IRoute {
	path: string;
	component: React.ComponentType;
	exact?: boolean;
}

export enum RouteNames {
	LOGIN = '/user',
	EVENT = '/',
}

export const privateRoutes: IRoute[] = [
	{
		path: RouteNames.LOGIN,
		exact: true,
		component: Login,
	},
];

export const publicRoutes: IRoute[] = [
	{
		path: RouteNames.EVENT,
		exact: true,
		component: Event,
	},
];
