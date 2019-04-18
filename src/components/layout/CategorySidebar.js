import React from 'react'
import { withRouter } from 'react-router'
import connect from 'react-redux/es/connect/connect'
import { Link } from 'react-router-dom'
import { getNextPageData, getPreviousPageData, urlify } from '../../lib/helpers'

class CategorySidebar extends React.Component {
  getStepsForPages(category, pages) {
    if (!pages) {
      return []
    }
    const steps = []

    for (const page of pages) {
      const isOverview = page.url.endsWith('/')
      const title = isOverview ? 'Overview' : page.title
      const url = `/pages/${category}` + (!isOverview ? `/${urlify(title)}` : '')

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
    const activeCategoryName = this.props.match.params.category
    const activeCategoryPages = this.props.categories[urlify(activeCategoryName.toLowerCase())]

    const activePage = this.getCurrentPage()
    const previousUrl = getPreviousPageData(activePage, activeCategoryName, activeCategoryPages).url
    const nextUrl = getNextPageData(activePage, activeCategoryName, activeCategoryPages).url

    return (
      <div className={'category-sidebar border-shadow'}>
        <div className={'sidebar-header is-flex is-stretch has-text-centered'}>
          <Link to={previousUrl} className={'icon has-text-white has-background-info plr1'}>
            <i className={'fas fa-chevron-left'} />
          </Link>
          <div className={'is-3 has-text-white has-text-weight-bold has-flex-grow has-background-info pbt05 plr075'}>
            {activeCategoryName}
          </div>
          <Link to={nextUrl} className={'icon has-text-white has-background-info plr1'}>
            <i className={'fas fa-chevron-right'} />
          </Link>
        </div>
        <aside className="menu">
          <ul className="menu-list pbt5">{this.getStepsForPages(activeCategoryName, activeCategoryPages)}</ul>
        </aside>
      </div>
    )
  }

  getCurrentPage() {
    let category = this.props.match.params.category
    const pages = this.props.categories[urlify(category).toLowerCase()]

    if (!pages) {
      return null
    }
    return pages.find(page => urlify(page.title).toLowerCase() === this.props.match.params.page.toLowerCase())
  }

  isActivePage(page, isOverview) {
    return (
      (isOverview && !this.getCurrentPage()) || (this.getCurrentPage() && this.getCurrentPage().title === page.title)
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
})

const ConnectedCategorySidebar = connect(mapStateToProps)(CategorySidebar)
export default withRouter(ConnectedCategorySidebar)
