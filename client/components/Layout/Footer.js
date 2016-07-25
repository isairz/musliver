import React from 'react'
import { FormattedMessage } from 'react-intl'

// Import Style
import styles from './Footer.css'

export function Footer () {
  return (
    <div className={styles.footer}>
      <p>&copy; 2016 &middot; <FormattedMessage id='siteTitle' /> Inc.</p>
      <p><FormattedMessage id='twitterMessage' /> : <a href='https://twitter.com/@prev_ious' target='_Blank'>@prev_ious</a></p>
    </div>
  )
}

export default Footer
