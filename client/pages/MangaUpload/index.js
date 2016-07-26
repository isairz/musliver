import React, { PropTypes, Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'

import Title from 'components/Layout/Title'
import MangaUploadWidget from 'components/Manga/MangaUploadWidget'

class MangaUpload extends Component {
  render () {
    return (
      <div>
        <Title><FormattedMessage id='createNewManga' /></Title>
        <MangaUploadWidget />
      </div>
    )
  }
}

MangaUpload.propTypes = {
  intl: PropTypes.object.isRequired,
}

export default connect(
  state => ({
    intl: state.intl,
  })
)(MangaUpload)
