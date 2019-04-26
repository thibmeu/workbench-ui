import React from 'react'
import Navigation from './layout/Navigation'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Login from './user/Login'
import Logout from './user/Logout'
import Pages from './page/Pages'
import Page from './page/Page'
import { loadPages } from '../actions/pages'
import { connect } from 'react-redux'
import Footer from './layout/Footer'
import Profile from './user/Profile'
import ProfileEdit from './user/ProfileEdit'
import Playground from './Playground'
import SearchPage from './search/SearchPage'
import Testing from './testing/Testing'
import { Page404 } from './page/Page404'

class App extends React.Component {
  componentDidMount() {
    this.props.loadPages()
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Navigation />
          <Switch>
            <Route path={'/demo'} component={Playground} />
            <Route
              path={'/contact'}
              component={() => {
                window.open('mailto:contact@blockchainworkbench.com', '_blank')
                return null
              }}
            />
            <Route exact path={'/search'} component={SearchPage} />
            <Route exact path={'/'} component={Home} />
            <Route path={'/login/:app?'} component={Login} />
            <Route path={'/logout'} component={Logout} />
            <Route exact path={'/profile'} component={Profile} />
            <Route exact path={'/profile/edit'} component={ProfileEdit} />
            <Route path={'/pages/:category/:page'} component={Page} />
            <Redirect from={'/start'} to={'/pages/0Introduction'} />
            <Route exact path={'/pages/:category'} component={Pages} />
            <Route path={'/'} component={Page404} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadPages: () => dispatch(loadPages()),
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(App)
