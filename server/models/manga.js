import { ARRAY, DATE, INTEGER, STRING } from 'sequelize'
import sequelize from './'

const Manga = sequelize.define({
  title: { type: STRING },
  slug: { type: STRING },
  author: { type: STRING },
  type: { type: STRING },
  characters: { type: ARRAY(STRING) },
  publicationDate: { type: DATE },
  page: INTEGER,
})

export default Manga
