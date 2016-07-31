
import React, { PropTypes } from 'react'

export function MangaScrollViewer ({ manga }) {
  return (
    <article>
      {Array.apply(null, {length: manga.page}).map(Function.call, (index) =>
        <img src={`/files/manga/${manga.id}/${index}p.jpg`} />
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
