import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import { addMangaRequest } from 'redux/manga'
import { characters, bookTypes } from 'constants/manga'
import styles from './MangaUploadWidget.css'

export class MangaUploadWidget extends Component {
  addManga = () => {
    const nameRef = this.refs.name
    const titleRef = this.refs.title
    const contentRef = this.refs.content
    if (nameRef.value && titleRef.value && contentRef.value) {
      this.props.dispatch(addMangaRequest({
        name: nameRef.value,
        title: titleRef.value,
        content: contentRef.value,
      }))
      nameRef.value = titleRef.value = contentRef.value = ''
    }
  };

  render () {
    const { className, intl } = this.props
    return (
      <div className={className || ''}>
        <div className={styles['form-content']}>
          <input placeholder={intl.messages.title} className={styles['form-field']} ref='title' />
          <input placeholder={intl.messages.author} className={styles['form-field']} ref='author' />
          <div className={styles['form-field']} >
            {bookTypes.map(name =>
              <span key={name} className={styles['form-checkbox']}>
                <input type='radio' id={`type_${name}`} name='type' value={name} ref='type' />
                <label htmlFor={`type_${name}`}><FormattedMessage id={name} /></label>
              </span>
            )}
          </div>
          <div className={styles['form-field']} >
            {characters.map(name =>
              <span key={name} className={styles['form-checkbox']}>
                <input type='checkbox' id={`characters_${name}`} name='characters' value={name} ref='characters' />
                <label htmlFor={`characters_${name}`}><FormattedMessage id={name} /></label>
              </span>
            )}
          </div>
          <input placeholder={intl.messages.file} className={styles['form-field']} type='file' ref='files' />
          <textarea placeholder={intl.messages.postContent} className={styles['form-field']} ref='content' />
          <a className={styles['post-submit-button']} href='#' onClick={this.addManga}><FormattedMessage id='submit' /></a>
        </div>
      </div>
    )
  }
}

MangaUploadWidget.propTypes = {
  className: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
}

export default connect(
  state => ({
    intl: state.intl,
  })
)(MangaUploadWidget)
