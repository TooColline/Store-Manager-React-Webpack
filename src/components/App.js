import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Navigation from './helpers/Navigation';

import '../../public/css/style.css';
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navigation />
                    <Switch>
                        <Route exact={true} path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={Signup} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;