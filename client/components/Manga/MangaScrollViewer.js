import React, { PropTypes } from 'react'

import styles from './MangaScrollViewer.css'

export function MangaScrollViewer ({ manga }) {
  return (
    <article>
      {Array.apply(null, {length: manga.page}).map(Function.call, (index) =>
        <img className={styles.page} src={`/files/manga/${manga.id}/${index}p.jpg`} />
      )}
    </article>
  )
}

MangaScrollViewer.propTypes = {
  manga: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
  }).isRequired,
}

export default MangaScrollViewer
