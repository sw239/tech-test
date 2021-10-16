import React, {Component} from "react";
import {Router, Route, Switch, HashRouter} from "react-router-dom";
import history from "./History";
import Home from "./Home";
import About from "./About";
import Solutions from "./Solutions";
import Contact from "./Contact";
import Event1 from "./Event1";
import Event2 from "./Event2";
import Event3 from "./Event3";
import Event4 from "./Event4";
import Event5 from "./Event5";
class App extends Component{
	render(){
		return(
		    <Router history={history}>
			  <HashRouter basename="/">
			  <Switch>
			  <Route exact path={'/'} render={(props) => (<Home {...props} />)} />
			  <Route exact path={'/Home'} render={(props) => (<Home {...props} />)} />
			  <Route exact path={'/About'} render={(props) => (<About {...props } />)} />
			  <Route exact path={'/Solutions'} render={(props) => (<Solutions {...props } />)} />
			  <Route exact path={'/Contact'} render={(props) => (<Contact {...props } />)} />
			  <Route exact path={'/Event1'} render={(props) => (<Event1 {...props } />)} />
			  <Route exact path={'/Event2'} render={(props) => (<Event2 {...props } />)} />
			  <Route exact path={'/Event3'} render={(props) => (<Event3 {...props } />)} />
			  <Route exact path={'/Event4'} render={(props) => (<Event4 {...props } />)} />
			  <Route exact path={'/Event5'} render={(props) => (<Event5 {...props } />)} />
			  </Switch>
			  </HashRouter>
			</Router>
		)
	}
}

export default App;
