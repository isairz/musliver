import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import Title from 'components/Layout/Title'
import MangaScrollViewer from 'components/Manga/MangaScrollViewer'

import { fetchManga, getManga } from 'redux/manga'

export function MangaDetailPage (props) {
  if (!props.manga) {
    return <div>fail</div>
  }
  return (
    <div>
      <Helmet title={props.manga.title} />
      <Title>{props.manga.title}</Title>
      <MangaScrollViewer manga={props.manga} />
    </div>
  )
}

// Actions required to provide data for this component to render in sever side.
MangaDetailPage.need = [params => {
  return fetchManga(params.id)
}]

// Retrieve data from store as props
function mapStateToProps (state, props) {
  return {
    manga: getManga(state, Number(props.params.id)),
  }
}

MangaDetailPage.propTypes = {
  manga: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
}

export default connect(mapStateToProps)(MangaDetailPage)
