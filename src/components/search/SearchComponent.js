import React from 'react'
import { withRouter } from 'react-router-dom'
import DifficultyFilter from './DifficultyFilter'
import CategoryFilter from './CategoryFilter'
import PageList from './PageList'
import CategoryList from './CategoryList'

class Search extends React.Component {
  render() {
    return (
      <section className="section" id={'advanced'}>
        <div className={'search-top-bar columns is-flex is-vcentered is-justified'}>
          <a onClick={this.props.history.goBack}>
            <h3 className="is-3">
              <span className={'icon'}>
                <i className={'fas fa-chevron-left'} />
              </span>
              <span>Back</span>
            </h3>
          </a>
          <DifficultyFilter />
        </div>
        <PageList />
      </section>
    )
  }
}

export default withRouter(Search)
