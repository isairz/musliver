import callApi from '../util/apiCaller'

export const ADD_POST = 'ADD_POST'
export const ADD_POSTS = 'ADD_POSTS'
export const DELETE_POST = 'DELETE_POST'
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST'

const initialState = {
  data: [],
  showAddPost: true,
}

export default function PostReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_POST :
      return {
        ...state,
        data: [action.post, ...state.data],
      }

    case ADD_POSTS :
      return {
        ...state,
        data: action.posts,
      }

    case DELETE_POST :
      return {
        ...state,
        data: state.data.filter(post => post.cuid !== action.cuid),
      }

    case TOGGLE_ADD_POST:
      return {
        ...state,
        showAddPost: !state.showAddPost,
      }

    default:
      return state
  }
}

export const getPosts = state => state.post.data
export const getPost = (state, cuid) => state.post.data.filter(post => post.cuid === cuid)[0]
export const getShowAddPost = state => state.post.showAddPost

export function addPost (post) {
  return {
    type: ADD_POST,
    post,
  }
}

export function addPosts (posts) {
  return {
    type: ADD_POSTS,
    posts,
  }
}

export function deletePost (cuid) {
  return {
    type: DELETE_POST,
    cuid,
  }
}

export const addPostRequest = post => dispatch =>
  callApi('posts', 'post', {
    post: {
      name: post.name,
      title: post.title,
      content: post.content,
    },
  }).then(res => dispatch(addPost(res.post)))

export const fetchPosts = () => dispatch =>
  callApi('posts').then(res => dispatch(addPosts(res.posts)))

export const fetchPost = cuid => dispatch =>
  callApi(`posts/${cuid}`).then(res => dispatch(addPost(res.post)))

export const deletePostRequest = cuid => dispatch =>
  callApi(`posts/${cuid}`, 'delete').then(() => dispatch(deletePost(cuid)))
