import React, { PropTypes } from 'react'
import { Link } from 'react-router'

// Import Style
import styles from './MangaListItem.css'

function MangaListItem (props) {
  return (
    <article className={styles['single-manga']}>
      <p className={styles['manga-thumbnail']}>
        <Link to='/'>
          <img src='/' />
        </Link>
      </p>
      <div className={styles['manga-data']}>
        <h3 className={styles['manga-title']}>
          <Link to={`/mangas/${props.manga.slug}-${props.manga.cuid}`} >
            {props.manga.title}
          </Link>
        </h3>
      </div>
    </article>
  )
}

MangaListItem.propTypes = {
  manga: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default MangaListItem
