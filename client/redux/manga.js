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
        data: [action.manga, ...state.data],
      }

    case ADD_MANGAS :
      return {
        ...state,
        data: action.mangas,
      }

    case DELETE_MANGA :
      return {
        ...state,
        data: state.data.filter(manga => manga.cuid !== action.cuid),
      }

    default:
      return state
  }
}

export const getMangas = state => {
  return state.manga.data
}

export const getManga = (state, cuid) => state.manga.data.filter(manga => manga.cuid === cuid)[0]
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

export const fetchManga = cuid => dispatch =>
  callApi(`posts/${cuid}`).then(res => dispatch(addManga(res.manga)))

export function deleteManga (cuid) {
  return {
    type: DELETE_MANGA,
    cuid,
  }
}

export const addMangaRequest = payload => dispatch =>
  callApi('manga', 'post', payload, false)
    .then(res => dispatch(addManga(res.manga)))
    .catch(err => console.log(err))

export function deleteMangaRequest (cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'delete').then(() => dispatch(deleteManga(cuid)))
  }
}
