import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.navigationItem}>L'Abri</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          L'Abri
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/post/" activeClassName="active">
          이야기
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/eluhouse/" activeClassName="active">
          엘루하우스
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
