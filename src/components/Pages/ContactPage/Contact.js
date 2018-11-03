import React from 'react'
import ScrollToTop from '../../ScrollToTop/ScrollToTop'
import './style.scss'

const Contact = () => {
  return(
    <div className='contact_page'>
      <div className='name'>
        <div className='name_container'>
          <div className='firstName'>Mo</div>
          <div className='lastName'>Zhou</div>
        </div>
        <div className='name_container'>
          <div className='firstName'>Mo</div>
          <div className='lastName'>Zhou</div>
        </div>
      </div>
      <div className='content_grid'>
        <div>Iamcontent</div>
      </div>
      <ScrollToTop pageSelector=".home_page"/>

    </div>
  )
}

export default Contact;
