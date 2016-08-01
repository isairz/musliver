import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router'

import { characters, bookTypes } from 'constants/manga'
import styles from './Side.css'

export function Side (props) {
  // FIXME: Temp Admin
  const isAdmin = () => (window.location.hash === '#admin')
  return (
    <div className={styles['side-widget']}>
      <div className={styles['side-menu']}>
        <h3 className={styles['headline']}>
          <FormattedMessage id='type' />
        </h3>
        <nav>
          <ul>
            {bookTypes.map(name => (<li key={name}><Link to={`/type/${name}`}><FormattedMessage id={name} /></Link></li>))}
          </ul>
        </nav>
        <h3 className={styles['headline']}>
          <FormattedMessage id='characters' />
        </h3>
        <nav>
          <ul>
            {characters.map(name => (<li key={name}><Link to={`/characters/${name}`}><FormattedMessage id={name} /></Link></li>))}
          </ul>
        </nav>
        {isAdmin() && <Link to='/manga/upload'>
          <h3 className={styles['headline']}>
            <FormattedMessage id='addManga' />
          </h3>
        </Link>}
      </div>
    </div>
  )
}

Side.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps (store) {
  return {
    intl: store.intl,
  }
}

export default connect(mapStateToProps)(Side)
