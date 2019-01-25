import React from 'react';
import Navigation from './layout/Navigation';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Login from './user/Login';
import Pages from './Pages';
import Page from './Page';
import {loadPages} from "../actions";
import {connect} from "react-redux";
import Footer from './layout/Footer';

class App extends React.Component {

    componentDidMount() {
        this.props.loadPages();
    }

    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div>
                    <Navigation/>
                    <Route exact path='/?advanced' component={Home}/>
                    <Route exact path='/' component={Home}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/pages/:category/:page' component={Page}/>
                    <Switch>
                        <Redirect from='/start' to='/pages/introduction'/>
                        <Route exact path='/pages/:category' component={Pages}/>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadPages: () => dispatch(loadPages())
    };
};

export default connect(null, mapDispatchToProps)(App);
