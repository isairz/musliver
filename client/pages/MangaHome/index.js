import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import Title from 'components/Layout/Title'
import MangaList from 'components/Manga/MangaList'

import { fetchMangas, getMangas } from 'redux/manga'

class MangaHome extends Component {
  componentDidMount () {
    this.props.dispatch(fetchMangas())
  }

  render () {
    return (
      <div>
        <Title>Recent Manga</Title>
        <MangaList mangas={this.props.mangas} />
      </div>
    )
  }
}

// Actions required to provide data for this component to render in sever side.
MangaHome.need = [() => { return fetchMangas() }]

// Retrieve data from store as props
function mapStateToProps (state) {
  return {
    mangas: getMangas(state),
  }
}

MangaHome.propTypes = {
  mangas: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
}

MangaHome.contextTypes = {
  router: React.PropTypes.object,
}

export default connect(mapStateToProps)(MangaHome)
