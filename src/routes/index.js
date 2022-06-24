import { Switch } from 'react-router-dom';

import Route from '../routes/Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from  '../pages/Home';
import RoadMap from  '../pages/RoadMap';
import Notes from  '../pages/Notes';
import Weather from  '../pages/Weather';
import Profile from  '../pages/Profile';

function Routes() {
	return (
		<Switch>
			<Route exact path='/' component={SignIn} />
			<Route exact path='/signup' component={SignUp} />

			<Route exact path='/home' component={Home} isPrivate />
			<Route exact path='/roadmaps' component={RoadMap} isPrivate />
			<Route exact path='/notes' component={Notes} isPrivate />
			<Route exact path='/weather' component={Weather} isPrivate />
			<Route exact path='/profile' component={Profile} isPrivate />
		</Switch>
	);
}

export default Routes;