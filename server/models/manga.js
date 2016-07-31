import { ARRAY, DATE, INTEGER, STRING } from 'sequelize'
import sequelize from './'

import decompress from 'decompress'
import fs from 'fs-promise'
import path from 'path'
import sharp from 'sharp'

const Manga = sequelize.define('manga', {
  title: { type: STRING, allowNull: false, validate: { notEmpty: true } },
  author: { type: STRING },
  type: { type: STRING },
  characters: { type: ARRAY(STRING) },
  publicationDate: { type: DATE },
  page: INTEGER,
})

Manga.upload = async (payload, file) => {
  const decompressOptions = {
    map: (unpack, idx) => ({
      ...unpack,
      path: idx + path.extname(unpack.path),
    }),
  }

  const makeThumbnail = (source, dest) => (
    sharp(source)
      .resize(null, 360)
      .toFile(dest)
  )

  const makePage = (source, dest) => (
    sharp(source)
      // .resize(null, 1080)
      .toFile(dest)
  )

  const tmpDir = file.path + '_'
  const targetDir = path.join(tmpDir, 'result')
  const unpacks = await decompress(file.path, tmpDir, decompressOptions)
  if (unpacks.length === 0) throw new Error('Not Compress File')

  await fs.mkdir(targetDir)

  let idx = 0
  for (let j = 0; j < unpacks.length; j++) {
    const unpack = unpacks[j]
    // const ext = path.extname(unpack.path)
    const source = unpack.data
    const thumbnail = path.join(targetDir, `${idx}s.jpg`)
    const page = path.join(targetDir, `${idx}p.jpg`)

    try {
      await makeThumbnail(source, thumbnail)
      await makePage(source, page)
      idx++
    } catch (err) {
      // Not Image file
    }
  }

  const saved = await Manga.create({ ...payload, page: idx })
  await fs.move(targetDir, `./files/manga/${saved.id}`)
  return saved
}

export default Manga
