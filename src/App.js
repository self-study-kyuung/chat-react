import React from 'react';
import { Link, Router, Route, Switch } from 'react-router-dom';
import ChatPage from './components/ChatPage/ChatPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';

const App = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" component={ChatPage} />
				<Route path="/login" component={LoginPage} />
				<Route path="/register" component={RegisterPage} />
			</Switch>
		</>
	);
};

export default App;
