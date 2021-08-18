import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.logo} />
      <span className={styles.navigationItem}>T.D. Diesel</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="https://truckpartsinventory.com/" activeClassName="active">
          Inventory
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/gallery/" activeClassName="active">
          Gallery
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/about/" activeClassName="active">
          About
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/contact/" activeClassName="active">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
