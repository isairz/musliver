import { Router } from 'express'
import multer from 'multer'

import Manga from '../models/manga'
import route from '../util/async-route'

const router = new Router()
const upload = multer({ dest: './temp' })

router.route('/')
  .get(route(async (req, res) => {
    const mangas = await Manga.findAll({ order: 'id desc' })
    res.json({ mangas })
  }))
  .post(upload.single('file'), route(async (req, res) => {
    const saved = await Manga.upload(req.body, req.file)
    res.json({ manga: saved })
  }))

router.route('/:id')
  .get(route(async (req, res) => {
    const manga = await Manga.findOne({ where: { id: req.params.id } })
    res.json({ manga })
  }))
  .delete(route(async (req, res) => {
    await Manga.destroy({ where: { id: req.params.id } })
    res.status(200).end()
  }))

export default router
