import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='icons'>
        <a href='https://github.com/weekendchow'>
          <FontAwesomeIcon icon={['fab', 'github']}  className='brand-icon' size='2x' flip='both'/ >
        </a>
        <a href='https://www.linkedin.com/in/mozhou216/'>
          <FontAwesomeIcon icon={['fab', 'linkedin']}  className='brand-icon' size='2x' flip='both' />
        </a>
        <a href='https://twitter.com/MoZhouHere'>
          <FontAwesomeIcon icon={['fab', 'twitter']}  className='brand-icon' size='2x' flip='both' />
        </a>
        <a href='https://www.instagram.com/weekendchow/'>
          <FontAwesomeIcon icon={['fab', 'instagram']}  className='brand-icon' size='2x' flip='both' />
        </a>
      </div>
      <div className='footer-name'>
        website by Mo Zhou
      </div>
    </div>
  )
}

export default Footer
