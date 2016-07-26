import React, { PropTypes } from 'react'

import PostListItem from './PostListItem'

function PostList ({ posts, handleDeletePost }) {
  return (
    <div className='listView'>
      {
        posts && posts.map(post => (
          <PostListItem
            post={post}
            key={post.cuid}
            onDelete={() => handleDeletePost(post.cuid)}
          />
        ))
      }
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeletePost: PropTypes.func.isRequired,
}

export default PostList
