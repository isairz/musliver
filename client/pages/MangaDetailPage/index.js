import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { IndexLink } from 'react-router'
import Helmet from 'react-helmet'

import Title from 'components/Layout/Title'
import MangaListItem from 'components/Manga/MangaListItem'
import MangaScrollViewer from 'components/Manga/MangaScrollViewer'

import { fetchManga, getManga } from 'redux/manga'

export function MangaDetailPage (props) {
  if (!props.manga) {
    return <div>fail</div>
  }
  return (
    <div>
      <Helmet title={props.manga.title} />
      <Title><IndexLink to='/'>Manga</IndexLink> {'>'} {props.manga.title}</Title>
      <MangaListItem manga={props.manga} />
      <div style={{padding: '0 15px'}}>
        <MangaScrollViewer manga={props.manga} />
      </div>
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
