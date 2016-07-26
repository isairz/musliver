import { STRING } from 'sequelize'
import sequelize from './'

const Post = sequelize.define('post', {
  name: { type: STRING },
  title: { type: STRING },
  content: { type: STRING },
  slug: { type: STRING },
  cuid: { type: STRING },
})

export default Post
