import { STRING } from 'sequelize'
import sequelize from './'

const Tag = sequelize.define('tag', {
  name: { type: STRING, allowNull: false, validate: { notEmpty: true } },
})

export default Tag
