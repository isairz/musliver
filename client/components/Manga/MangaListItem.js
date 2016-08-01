import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { FormattedDate, FormattedMessage } from 'react-intl'

// Import Style
import styles from './MangaListItem.css'

function MangaListItem ({ manga }) {
  return (
    <article className={styles.manga}>
      <p className={styles.thumbnailWrap}>
        <Link to={`/manga/${manga.id}`}>
          <div className={styles.thumbnail} style={{ backgroundImage: `url(/files/manga/${manga.id}/0s.jpg)` }} />
        </Link>
      </p>
      <div className={styles.data}>
        <h3 className={styles.title}>
          <Link to={`/manga/${manga.id}`}>
            {manga.title}
          </Link>
        </h3>
        {manga.author && <div className={styles.author}>{manga.author}</div>}
        {manga.type && <div className={styles.type}><FormattedMessage id={manga.type} /></div>}
        {manga.characters && <div className={styles.characters}>{manga.characters.map(
          character =>
            <Link to={`/manga/character/${character}`}><FormattedMessage id={character} /></Link>)
        }</div>}
        {manga.createdAt && <div className={styles.createdAt}><FormattedDate value={manga.createdAt} /></div>}
      </div>
    </article>
  )
}

MangaListItem.propTypes = {
  manga: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default MangaListItem
