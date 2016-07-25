import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router'

// Import Style
import styles from './Side.css'

export function Side (props) {
  return (
    <div className={styles['side-widget']}>
      <div className={styles['side-menu']}>
        <h3 className={styles['headline']}>
          <FormattedMessage id='characters' />
        </h3>
        <nav>
          <ul>
            <li><Link to='/Characters/Honoka'><FormattedMessage id='honoka' /></Link></li>
            <li><Link to='/Characters/Eli'><FormattedMessage id='eli' /></Link></li>
            <li><Link to='/Characters/Kotori'><FormattedMessage id='kotori' /></Link></li>
            <li><Link to='/Characters/Umi'><FormattedMessage id='umi' /></Link></li>
            <li><Link to='/Characters/Rin'><FormattedMessage id='rin' /></Link></li>
            <li><Link to='/Characters/Maki'><FormattedMessage id='maki' /></Link></li>
            <li><Link to='/Characters/Nozomi'><FormattedMessage id='nozomi' /></Link></li>
            <li><Link to='/Characters/Hanayo'><FormattedMessage id='hanayo' /></Link></li>
            <li><Link to='/Characters/Nico'><FormattedMessage id='nico' /></Link></li>
          </ul>
        </nav>
        <Link to='/manga/upload'>
          <h3 className={styles['headline']}>
            <FormattedMessage id='addManga' />
          </h3>
        </Link>
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
