import React from 'react'
import { withRouter } from 'react-router'
import connect from 'react-redux/es/connect/connect'
import { Link } from 'react-router-dom'
import { urlify } from '../../lib/helpers'

class CategorySidebar extends React.Component {
  getStepsForPages(category, pages) {
    if (!pages) {
      return []
    }
    const steps = []

    for (const page of pages) {
      const isOverview = page.url.endsWith('/')
      const title = isOverview ? 'Overview' : page.title
      const url = `/pages/${category}` + !isOverview ? `/${urlify(title)}` : ''

      steps.push(
        <li key={page.url}>
          <Link to={url} className={`text ${this.isActivePage(page, isOverview) ? 'is-active' : ''}`}>
            {title}
          </Link>
        </li>,
      )
    }
    return steps
  }

  render() {
    let activeCategoryName = this.props.match.params.category
    const activeCategoryPages = this.props.categories[urlify(activeCategoryName.toLowerCase())]

    return (
      <div className={'category-sidebar'}>
        <h1 className={'title'}>Smart contracts</h1>
        <aside className="menu">
          <p className={'menu-label'}>General</p>
          <ul className="menu-list">{this.getStepsForPages(activeCategoryName, activeCategoryPages)}</ul>
        </aside>
      </div>
    )
  }

  isActivePage(page, isOverview) {
    return (
      (isOverview && !this.props.match.params.page) ||
      (this.props.match.params.page && this.props.match.params.page.toLowerCase() === urlify(page.title.toLowerCase()))
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
})

const ConnectedCategorySidebar = connect(mapStateToProps)(CategorySidebar)
export default withRouter(ConnectedCategorySidebar)
