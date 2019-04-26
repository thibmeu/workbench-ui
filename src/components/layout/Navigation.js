import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import CategoryFilter from '../search/CategoryFilter'
import LoadingIndicator from './LoadingIndicator'
import { connect } from 'react-redux'
import { loadUserProfile } from '../../actions/user'
import brandLogoBlue from '../../assets/img/brand-logo-blue-small.png'
import brandLogoWhite from '../../assets/img/brand-logo-white-small.png'

class Navigation extends React.Component {
  constructor() {
    super()
    this.state = {
      isSearchActive: false,
      isTop: true,
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.setSearchActive = this.setSearchActive.bind(this)
  }

  componentDidMount() {
    this.loadProfile()
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.loadProfile()
  }

  loadProfile() {
    if (!this.props.user.loading && !this.props.user.authenticated && !this.props.user.error) {
      this.props.loadProfile()
    }
  }

  render() {
    return (
      <nav
        className={`navbar is-fixed-top short-background-color-transition ${
          this.state.isTop ? 'is-transparent' : 'has-shadow-bottom'
        }`}
        ref={el => {
          this.element = el
        }}
      >
        <div className={'navbar-brand'}>
          <Link to={'/'}>
            <img className={'image'} src={this.getHeaderLogo()} alt={'Logo'} />
          </Link>
        </div>
        <div className={'navbar-end'}>
          <LoadingIndicator />
          {this.getSearchComponent()}
          {this.getLoginOrProfileNav()}
        </div>
      </nav>
    )
  }

  getSearchComponent() {
    if (!this.state.isSearchActive) {
      return (
        <div
          onClick={() => this.setSearchActive()}
          className={`navbar-item ${this.state.isTop ? 'has-text-white' : ''}`}
        >
          <i className={'fas fa-search'} />
        </div>
      )
    } else {
      return (
        <div className={`navbar-item is-1 ${this.state.isTop ? 'has-text-white' : ''}`}>
          <CategoryFilter />
        </div>
      )
    }
  }

  getLoginOrProfileNav() {
    if (this.props.user.authenticated) {
      return (
        <div>
          <NavLink
            className={`navbar-item ${this.state.isTop ? 'has-text-white' : ''}`}
            activeClassName={'is-active'}
            to={'/profile'}
          >
            {this.props.user.displayName}
          </NavLink>
          <NavLink
            className={`navbar-item ${this.state.isTop ? 'has-text-white' : ''}`}
            // activeClassName={'is-active'}
            to={'/logout'}
          >
            Logout
          </NavLink>
        </div>
      )
    } else {
      return (
        <NavLink
          className={`navbar-item ${this.state.isTop ? 'has-text-white' : ''}`}
          // activeClassName={'is-active'}
          to={'/login'}
        >
          Login
        </NavLink>
      )
    }
  }

  getHeaderLogo() {
    return this.state.isTop ? brandLogoWhite : brandLogoBlue
  }

  setSearchActive() {
    this.setState({
      ...this.state,
      isSearchActive: !this.state.isSearchActive,
    })
  }

  handleScroll(e) {
    this.setState({
      ...this.state,
      isTop: document.scrollingElement.scrollTop < this.element.clientHeight,
    })
  }
}

const mapStateToProps = state => ({
  user: state.appState.user,
})

const mapDispatchToProps = dispatch => ({
  loadProfile: () => dispatch(loadUserProfile()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation)
