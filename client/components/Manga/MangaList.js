import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

// Import Components
import MangaListItem from './MangaListItem'

import { deleteMangaRequest } from 'redux/manga'

// Import Style
import styles from './MangaList.css'

function MangaList ({ mangas = [], dispatch }) {
  const handleDeleteManga = manga => {
    if (confirm('Do you want to delete this manga')) { // eslint-disable-line
      dispatch(deleteMangaRequest(manga))
    }
  }
  return (
    <div className={styles['listwrap']}>
      {
        mangas.map(manga => (
          <MangaListItem
            manga={manga}
            key={manga.id}
            onDelete={() => handleDeleteManga(manga.id)}
          />
        ))
      }
    </div>
  )
}

MangaList.propTypes = {
  mangas: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps (store) {
  return {
  }
}

export default connect(mapStateToProps)(MangaList)
