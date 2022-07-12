import React from 'react';
import { Navbar } from '../../components'

import './styles.scss'

const Header = () => {
  return (
    <header className='header'>
        <div className="wrapper">
          <Navbar />
        </div>
    </header>
  )
}

export default Header