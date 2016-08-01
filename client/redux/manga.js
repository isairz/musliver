import callApi from '../util/apiCaller'

const ADD_MANGA = 'ADD_MANGA'
const ADD_MANGAS = 'ADD_MANGAS'
const DELETE_MANGA = 'DELETE_MANGA'

// Initial State
const initialState = {
  data: [],
  showAddManga: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_MANGA :
      return {
        ...state,
        data: [...state.data, action.manga],
      }

    case ADD_MANGAS :
      return {
        ...state,
        data: action.mangas,
      }

    case DELETE_MANGA :
      return {
        ...state,
        data: state.data.filter(manga => manga.id !== action.id),
      }

    default:
      return state
  }
}

export const getMangas = state => state.manga.data
export const getManga = (state, id) => state.manga.data.filter(manga => manga.id === id)[0]
export const getShowAddManga = state => state.manga.showAddManga

export function addManga (manga) {
  return {
    type: ADD_MANGA,
    manga,
  }
}

export function addMangas (mangas) {
  return {
    type: ADD_MANGAS,
    mangas,
  }
}

export const fetchMangas = payload => dispatch =>
  callApi('manga').then(res => dispatch(addMangas(res.mangas)))

export const fetchManga = id => dispatch => {
  return callApi(`manga/${id}`).then(res => dispatch(addManga(res.manga)))
}

export function deleteManga (id) {
  return {
    type: DELETE_MANGA,
    id,
  }
}

export const addMangaRequest = payload => dispatch =>
  callApi('manga', 'post', payload, false)
    .then(res => dispatch(addManga(res.manga)))
    .catch(err => console.log(err))

export function deleteMangaRequest (id) {
  return (dispatch) => {
    return callApi(`manga/${id}`, 'delete').then(() => dispatch(deleteManga(id)))
  }
}
