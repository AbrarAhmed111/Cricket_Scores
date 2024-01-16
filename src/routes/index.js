import Home from '../components/home/Home';
import AuthView from '../views/auth/AuthView';
import Login from '../views/Login';
import MainView from '../views/MainView';
import Signup from '../views/Signup';


let routes = [
	{
		path: '/login',
		component: Login,
		layout: 'auth',
	},
	{
		path: '/signup',
		component: Signup,
		layout: 'auth',
	},
	{
		path: '/',
		component: Home,
		layout: 'main',
	},
];
export default routes;