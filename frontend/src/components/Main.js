import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Header from './Header/Header'
import Home from './Home/Home';
import User from './User/User';

class Main extends Component {
    render(){
        return(
            <div className="mainComponent">
                <Route path="/" component={Home} exact />
                <Route path="/Home" component={Home} />
                <Route path="/User" component={User} />
            </div>
        )
    }
}

export default Main;