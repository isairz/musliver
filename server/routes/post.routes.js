import { Router } from 'express'
import route from '../util/async-route'
import sanitizeHtml from 'sanitize-html'
import cuid from 'cuid'
import slug from 'limax'

import Post from '../models/post'

const router = new Router()

router.route('/posts')
  .get(route(async (req, res) => {
    const posts = await Post.find().sort('-dateAdded')
    res.json({ posts })
  }))
  .post(route(async (req, res) => {
    if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
      res.status(403).end()
    }

    const newPost = new Post(req.body.post)

      // Let's sanitize inputs
    newPost.title = sanitizeHtml(newPost.title)
    newPost.name = sanitizeHtml(newPost.name)
    newPost.content = sanitizeHtml(newPost.content)

    newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true })
    newPost.cuid = cuid()
    newPost.save((err, saved) => {
      if (err) {
        res.status(500).send(err)
      }
      res.json({ post: saved })
    })
  }))

router.route('/posts/:cuid')
  .get(route(async (req, res) => {
    const post = await Post.findOne({ cuid: req.params.cuid })
    res.json({ post })
  }))
  .delete(route(async (req, res) => {
    const post = await Post.findOne({ cuid: req.params.cuid })

    await post.remove()
    res.status(200).end()
  }))

export default router
