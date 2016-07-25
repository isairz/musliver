import React, { Component, PropTypes } from 'react'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'

// Import Style
import styles from './MangaCreateWidget.css'

export class MangaCreateWidget extends Component {
  addManga = () => {
    const nameRef = this.refs.name
    const titleRef = this.refs.title
    const contentRef = this.refs.content
    if (nameRef.value && titleRef.value && contentRef.value) {
      this.props.addManga(nameRef.value, titleRef.value, contentRef.value)
      nameRef.value = titleRef.value = contentRef.value = ''
    }
  };

  render () {
    console.log(this.props.showAddManga)
    const cls = `${styles.form} ${(this.props.showAddManga ? styles.appear : '')}`
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}><FormattedMessage id='createNewManga' /></h2>
          <input placeholder={this.props.intl.messages.title} className={styles['form-field']} ref='title' />
          <input placeholder={this.props.intl.messages.type} className={styles['form-field']} ref='type' />
          <input placeholder={this.props.intl.messages.author} className={styles['form-field']} ref='author' />
          <input placeholder={this.props.intl.messages.characters} className={styles['form-field']} ref='characters' />
          <input placeholder={this.props.intl.messages.tags} className={styles['form-field']} ref='tags' />
          <input placeholder={this.props.intl.messages.tags} className={styles['form-field']} ref='tags' />
          <textarea placeholder={this.props.intl.messages.postContent} className={styles['form-field']} ref='content' />
          <a className={styles['post-submit-button']} href='#' onClick={this.addManga}><FormattedMessage id='submit' /></a>
        </div>
      </div>
    )
  }
}

MangaCreateWidget.propTypes = {
  addManga: PropTypes.func.isRequired,
  showAddManga: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(MangaCreateWidget)
