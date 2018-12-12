import React from 'react';
import {connect} from 'react-redux';
import {selectPage} from '../../actions';
import propTypes from 'prop-types';

class PagePreview extends React.Component {

    render() {
        if (this.props.page) {
            const page = this.props.page;
            return (<div>


                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title">
                            {page.title}
                        </p>
                        <span className='is-pulled-right delete'
                              onClick={() => this.handlePageSelect(null)}>Close</span>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            <p>ID: <strong>{page.id}</strong></p>
                            <p><strong className='tag'>{page.difficulty}</strong></p>
                            <p>
                                Summary: <strong>{page.summary}</strong>
                            </p>
                            <p>
                                Categories:
                                <strong>
                                    {page.categories.map(cat => <span key={cat} className='tag catItem'>{cat}</span>)}
                                </strong>
                            </p>
                            <p>URL: <strong>{page.url}</strong></p>
                        </div>
                    </div>
                    <footer className="card-footer">
                        {this.getPageNavigatorJSX('Previous', page.previous)}
                        {this.getPageNavigatorJSX('Next', page.next)}
                    </footer>
                </div>

            </div>)
        } else {
            return <div>no page selected</div>
        }
    }

    getNameOfPageId(pageId) {
        return this.props.pages.find(page => page.id === pageId).title;
    }

    getPageNavigatorJSX(label, pageId) {
        if (pageId) {
            return <button className="card-footer-item" onClick={() => {
                this.handlePageSelect(pageId)
            }}>{label}: {this.getNameOfPageId(pageId)}</button>
        } else {
            return <p className="card-footer-item"></p>;
        }
    }

    handlePageSelect(pageId) {
        this.props.selectPage(pageId);
    }
}

const mapStateToProps = state => {
    return {
        page: state.userSettings.activePage
            ? state.pages.find(page => page.id === state.userSettings.activePage)
            : null,
        pages: state.pages
    };
};

const mapDispatchToProps = dispatch => {
    return {
        selectPage: pageId => dispatch(selectPage(pageId))
    };
};

PagePreview.propTypes = {
    pages: propTypes.array,
    page: propTypes.object
};

const ConnectedPagePreview = connect(mapStateToProps, mapDispatchToProps)(PagePreview);
export default ConnectedPagePreview;
