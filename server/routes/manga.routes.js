import { Router } from 'express'
import * as MangaController from '../controllers/Manga.controller'

const router = new Router()

// Get all Mangas
router.route('/mangas').get(MangaController.getMangaList)

export default router
