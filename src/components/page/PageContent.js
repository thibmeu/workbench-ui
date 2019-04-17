import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { buildCategoryUrl, buildPageUrl, firstCategoryNameOrUnknown, urlify } from '../../lib/helpers'
import { loadPageContent } from '../../actions/pages'
import ContentArray from './ContentArray'

const ReactMarkdown = require('react-markdown')

class PageContent extends React.Component {
  componentDidMount() {
    this.loadCurrentPageContent()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.loadCurrentPageContent()
  }

  loadCurrentPageContent() {
    this.loadPageContent(this.props.page)
    if (this.props.page) {
      this.loadPageContent(this.getAdjacentCategoryPage(this.props.page.next))
      this.loadPageContent(this.getAdjacentCategoryPage(this.props.page.previous))
    }
  }

  loadPageContent(page) {
    if (page && !page.content && !page.loading && !page.error) {
      console.log(`Loading content for page ${page.title}`)
      this.props.loadPage(page.url)
    }
  }

  render() {
    if (this.props.page) {
      return (
        <div>
          {this.getPageContentJSX()}
          <div className={'level'}>
            <div className={'level-left'}>{this.getPreviousPageJSX()}</div>
            <div className={'level-left'}>{this.getNextPageJSX()}</div>
          </div>
        </div>
      )
    }
    return (
      <div>
        <h1 className="title has-text-centered">loading..</h1>
        <p className={'icon loading has-text-info'}>
          <i className={'fas fa-spinner fa-spin'} />
        </p>
      </div>
    )
  }

  getPageContentJSX() {
    if (this.props.page.content) {
      if (typeof this.props.page.content === 'string') {
        return <ReactMarkdown source={this.props.page.content} />
      }
      return (
        <div className="content-array mb30 has-text-left">
          <ContentArray content={this.props.page.content} />
        </div>
      )
    }
    if (this.props.page.error) {
      return <p className={'has-text-danger has-text-weight-bold'}>{this.props.page.error}</p>
    }
    return (
      <p className={'has-text-centered'}>
        <span className={'icon loading has-text-info has-text-centered is-large'}>
          <i className={'fas fa-spinner fa-spin'} />
        </span>
        <span>Loading content ...</span>
      </p>
    )
  }

  getNextPageJSX() {
    const nextPage = this.props.page ? this.getAdjacentCategoryPage(this.props.page.next, 'next') : null

    let url
    let text
    if (!nextPage || !nextPage.categories) {
      // Search page
      url = '/search'
      text = 'Choose next page'
    } else if (
      nextPage.categories &&
      nextPage.categories.map(c => c.toLowerCase()).includes(this.props.category.toLowerCase())
    ) {
      // Next Page
      url = buildPageUrl(this.props.category, nextPage.title)
      text = nextPage.title
    } else if (nextPage.url.endsWith('/')) {
      // Next Chapter
      url = buildCategoryUrl(nextPage.categories[0])
      text = nextPage.title
    } else {
      // Next Chapter
      url = buildPageUrl(nextPage.categories[0], nextPage.title)
      text = nextPage.title
    }

    return (
      <Link to={url} className={'button is-info is-outlined is-uppercase'}>
        <span>{text}</span>
        <div className={'icon'}>
          <i className={'fas fa-chevron-right'} />
        </div>
      </Link>
    )
  }

  getPreviousPageJSX() {
    const previousPage = this.props.page ? this.getAdjacentCategoryPage(this.props.page.previous, 'prev') : null

    if (!previousPage) {
      return null
    }

    const sameCategory =
      previousPage &&
      previousPage.categories &&
      previousPage.categories.map(c => urlify(c.toLowerCase())).includes(this.props.category.toLowerCase())

    let url
    if (sameCategory) {
      if (previousPage.url.endsWith('/')) {
        // Chapter overview
        url = buildCategoryUrl(this.props.category)
      } else {
        // Regular page
        url = buildPageUrl(this.props.category, previousPage.title)
      }
    } else {
      // Previous Chapter
      url = buildPageUrl(firstCategoryNameOrUnknown(previousPage.categories), previousPage.title)
    }

    return (
      <Link to={url} className={'button is-info is-outlined is-uppercase'}>
        <div className={'icon'}>
          <i className={'fas fa-chevron-left'} />
        </div>
        <span>{previousPage.title}</span>
      </Link>
    )
  }

  getAdjacentCategoryPage(nextPreviousContainer, info) {
    if (nextPreviousContainer) {
      const categoryIndex = this.props.page.categories
        .map(cat => urlify(cat.toLowerCase()))
        .indexOf(this.props.category.toLowerCase())
      if (categoryIndex !== -1) {
        return this.props.pages.find(
          page => page.url.toLowerCase() === nextPreviousContainer[categoryIndex].toLowerCase(),
        )
      } else if (info === 'next') {
        console.log('-1 next', this.props.page.categories, this.props.category)
      }
    }
  }
}

const mapStateToProps = state => ({
  pages: state.pages,
})

const mapDispatchToProps = dispatch => ({
  loadPage: pageUrl => dispatch(loadPageContent(pageUrl)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageContent)
