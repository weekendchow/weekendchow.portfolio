import React from 'react';
import ScrollToNext from '../../ScrollToNext/ScrollToNext'
import ScrollToPrev from '../../ScrollToPrev/ScrollToPrev'
import './style.scss'

const Projects = () => {
  return(
    <div className='projects_page'>
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
      <ScrollToPrev pageSelector=".about_page"/>
      <ScrollToNext pageSelector=".contact_page"/>

    </div>
  )
}

export default Projects;
