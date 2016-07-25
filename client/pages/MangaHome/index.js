import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

// Import Components
import MangaList from 'components/Manga/MangaList'

import { fetchMangas, getMangas } from 'redux/manga'

class MangaHome extends Component {
  componentDidMount () {
    this.props.dispatch(fetchMangas())
  }

  render () {
    return (
      <div>
        <MangaList mangas={this.props.mangas} headline='Recent Manga' />
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
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
}

MangaHome.contextTypes = {
  router: React.PropTypes.object,
}

export default connect(mapStateToProps)(MangaHome)
