import React, { PropTypes, Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'

import styles from './MangaUpload.css'
import { addMangaRequest, fetchMangas } from 'redux/manga'

class MangaUpload extends Component {
  componentDidMount () {
    this.props.dispatch(fetchMangas())
  }

  handleAddManga = (name, title, content) => {
    this.props.dispatch(addMangaRequest({ name, title, content }))
  };

  render () {
    return (
      <div>
        <h2 className={styles['headline']}><FormattedMessage id='createNewManga' /></h2>
        <div className={styles['form-content']}>
          <input placeholder={this.props.intl.messages.title} className={styles['form-field']} ref='title' />
          <input placeholder={this.props.intl.messages.type} className={styles['form-field']} ref='type' />
          <input placeholder={this.props.intl.messages.author} className={styles['form-field']} ref='author' />
          <input placeholder={this.props.intl.messages.characters} className={styles['form-field']} ref='characters' />
          <input placeholder={this.props.intl.messages.tags} className={styles['form-field']} ref='tags' />
          <input placeholder={this.props.intl.messages.file} className={styles['form-field']} type='file' ref='files' />
          <textarea placeholder={this.props.intl.messages.postContent} className={styles['form-field']} ref='content' />
          <a className={styles['post-submit-button']} href='#' onClick={this.addManga}><FormattedMessage id='submit' /></a>
        </div>
      </div>
    )
  }
}

// Retrieve data from store as props
function mapStateToProps (state) {
  return {
    intl: state.intl,
  }
}

MangaUpload.propTypes = {
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
}

MangaUpload.contextTypes = {
  router: React.PropTypes.object,
}

export default connect(mapStateToProps)(MangaUpload)
