import { Router } from 'express'
import route from '../util/async-route'
import sanitizeHtml from 'sanitize-html'
import cuid from 'cuid'
import slug from 'limax'

import Post from '../models/post'

const router = new Router()

router.route('/')
  .get(route(async (req, res) => {
    const posts = await Post.findAll()
    res.json({ posts })
  }))
  .post(route(async (req, res) => {
    if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
      res.status(403).end()
    }

    const post = req.body.post
    const saved = await Post.create({
      title: sanitizeHtml(post.title),
      name: sanitizeHtml(post.name),
      content: sanitizeHtml(post.content),
      slug: slug(post.title.toLowerCase(), { lowercase: true }),
      cuid: cuid(),
    })
    res.json({ post: saved })
  }))

router.route('/:cuid')
  .get(route(async (req, res) => {
    const post = await Post.findOne({ where: { cuid: req.params.cuid } })
    res.json({ post })
  }))
  .delete(route(async (req, res) => {
    await Post.destroy({ where: { cuid: req.params.cuid } })
    res.status(200).end()
  }))

export default router
