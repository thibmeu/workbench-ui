import React from 'react';
import PropTypes from 'prop-types';
import {getDifficultyColorForTag} from "../../lib/helpers";
import {connect} from 'react-redux';
import {selectPage} from '../../actions';
import {Link} from 'react-router-dom';

class PageListItem extends React.Component {
    render() {
        // const diff = `tag has-text-right topicDifficulty ${getDifficultyColorForTag(this.props.page.difficulty)}`;
        const diffTileClass = `tag is-pulled-right ${getDifficultyColorForTag(this.props.page.difficulty)}`;
        return (
            <div className='tile is-parent is-4 catLink'
                 onClick={() => this.handleClickElement(this.props.page.id)}>
                <div className='tile is-child box'>
                    <Link
                        to={`/pages/${this.props.page.categories[0].toLowerCase().replace(' ', '')}/${this.props.page.title.toLowerCase().replace(' ', '')}`}>
                        <p>
                            <span
                                className="title is-4">{this.props.page ? this.props.page.title : 'Page undefined'}</span>
                            <span className={diffTileClass}>{this.props.page.difficulty}</span>
                        </p>
                        <p className='content'>{this.props.page.description}</p>
                        <p className="content tags">
                            {this.props.page.categories.map((t, idx) =>
                                <span key={idx} className='tag catItem is-info'>{t}</span>)}
                        </p>
                    </Link>
                </div>
            </div>
        )
    }

    handleClickElement(pageId) {
        this.props.selectPage(pageId);
    }
}

PageListItem.propTypes = {
    topic: PropTypes.object
};

const mapDispatchToProps = dispatch => {
    return {
        selectPage: pageId => dispatch(selectPage(pageId))
    };
};

const ConnectedPageListItem = connect(null, mapDispatchToProps)(PageListItem);
export default ConnectedPageListItem;