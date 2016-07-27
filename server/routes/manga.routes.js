import { Router } from 'express'
import multer from 'multer'

import Manga from '../models/manga'
import route from '../util/async-route'

const router = new Router()
const upload = multer({ dest: './temp' })

router.route('/')
  .get(route(async (req, res) => {
    const mangas = await Manga.findAll()
    res.json({ mangas })
  }))
  .post(upload.single('file'), route(async (req, res) => {
    const saved = await Manga.upload(req.body, req.file)
    res.json({ manga: saved })
  }))

export default router
