import React, { PropTypes } from 'react'
import { IndexLink, Link } from 'react-router'
import { FormattedMessage } from 'react-intl'

// Import Style
import styles from './Header.css'

export function Header (props, context) {
  const languageNodes = props.intl.enabledLanguages.map(
    lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  )

  return (
    <div className={styles.header}>
      <div className={styles['menu-switcher']}>
        <ul>
          <IndexLink to='/'>
            <li >
              <span className={styles['site-title']}><FormattedMessage id='siteTitle' /></span>
            </li>
          </IndexLink>
          <Link to='/manga'>
            <li className={context.router.isActive('/manga') ? styles.selected : ''}>
              <FormattedMessage id='manga' />
            </li>
          </Link>
          <Link to='/community'>
            <li className={context.router.isActive('/community') ? styles.selected : ''}>
              <FormattedMessage id='community' />
            </li>
          </Link>
        </ul>
      </div>
      <div className={styles['language-switcher']}>
        <ul>
          <li><FormattedMessage id='switchLanguage' /></li>
          {languageNodes}
        </ul>
      </div>
    </div>
  )
}

Header.contextTypes = {
  router: React.PropTypes.object,
}

Header.propTypes = {
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
}

export default Header
