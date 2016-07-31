import { INTEGER, STRING } from 'sequelize'
import sequelize from './'

const ItemTag = sequelize.define('item_tag', {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tag_id: {
    type: INTEGER,
    unique: 'item_tag_taggable',
  },
  taggable: {
    type: STRING,
    unique: 'item_tag_taggable',
  },
  taggable_id: {
    type: INTEGER,
    unique: 'item_tag_taggable',
    references: null,
  },
})

export default ItemTag
