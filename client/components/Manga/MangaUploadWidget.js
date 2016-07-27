import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import { addMangaRequest } from 'redux/manga'
import { characters, bookTypes } from 'constants/manga'
import styles from './MangaUploadWidget.css'

export class MangaUploadWidget extends Component {
  onSubmit = (e) => {
    e.preventDefault()
    const payload = new FormData(e.target)
    console.log(payload)
    this.props.dispatch(addMangaRequest(payload))
  }

  render () {
    const { className, intl } = this.props
    return (
      <div className={className || ''}>
        <form className={styles['form-content']} onSubmit={this.onSubmit}>
          <input placeholder={intl.messages.title} className={styles['form-field']} name='title' />
          <input placeholder={intl.messages.author} className={styles['form-field']} name='author' />
          <div className={styles['form-field']} >
            {bookTypes.map(name =>
              <span key={name} className={styles['form-checkbox']}>
                <label>
                  <input type='radio' name='type' value={name} />
                  <FormattedMessage id={name} />
                </label>
              </span>
            )}
          </div>
          <div className={styles['form-field']} >
            {characters.map(name =>
              <span key={name} className={styles['form-checkbox']}>
                <label>
                  <input type='checkbox' name='characters' value={name} />
                  <FormattedMessage id={name} />
                </label>
              </span>
            )}
          </div>
          <input placeholder={intl.messages.file} className={styles['form-field']} type='file' name='file' />
          <textarea placeholder={intl.messages.postContent} className={styles['form-field']} name='content' />
          <input className={styles['form-field']} type='submit'></input>
        </form>
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
