import React, { PropTypes } from 'react'
import { Link } from 'react-router'

// Import Style
import styles from './MangaListItem.css'

function MangaListItem ({ manga }) {
  return (
    <article className={styles['single-manga']}>
      <p className={styles['manga-thumbnail']}>
        <Link to={`/manga/${manga.id}`}>
          <div className={styles['manga-thumbnail-image']} style={{ backgroundImage: `url(/files/manga/${manga.id}/0s.jpg)` }} />
        </Link>
      </p>
      <div className={styles['manga-data']}>
        <h3 className={styles['manga-title']}>
          <Link to={`/manga/${manga.id}`}>
            {manga.title}
          </Link>
        </h3>
      </div>
    </article>
  )
}

MangaListItem.propTypes = {
  manga: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default MangaListItem
