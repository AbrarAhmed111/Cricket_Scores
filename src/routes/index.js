import Cube from '../components/Cube';
import Login from '../views/Login';
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
		component: Cube,
		layout: 'main',
	},
];
export default routes;