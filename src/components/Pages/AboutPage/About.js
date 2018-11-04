import React from 'react';
import ScrollToNext from '../../ScrollToNext/ScrollToNext'
import ScrollToPrev from '../../ScrollToPrev/ScrollToPrev'
import './style.scss'

const About = () => {
  return(
    <div className='about_page'>
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
        <h1>ABOUT</h1>
        <p>askdljfhkajbdfgkljhdfkahjgsdfjhakjdshvlkjadbsdlkbfkadjfsbgkjdshakj</p>
      </div>
        <ScrollToPrev pageSelector=".home_page"/>
        <ScrollToNext pageSelector=".projects_page"/>
    </div>
  )
}

export default About;
