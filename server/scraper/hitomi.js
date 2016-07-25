import fetch from 'isomorphic-fetch'

export function scrapMangaList () {
  return fetch('https://hitomi.la/galleries0.json')
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json)
    }
    return json.map(({id, l, g, type, n, a, t}) => ({
      id,
      language: l,
      title: n,
      tags: t,
    }))
  })
}

export function scrapThumbnail (id) {
  return fetch(`https://hitomi.la/galleryblock/${id}.html`)
  .then(response => response.text())
  .then(body => {
    return body.match(/<img src="(.*)">/)[1]
  })
}

export function scrapPageList (id) {
  return fetch(`https://hitomi.la/reader/${id}.html`)
  .then(response => response.text())
  .then(body => {
    let res = []
    const myRe = /<div class="img-url">(.*)<\/div>/g
    let myArray
    while ((myArray = myRe.exec(body)) !== null) {
      res.push(myArray[1])
    }
    return res
  })
}
