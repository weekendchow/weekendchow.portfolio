import React from 'react';
import NavBar from '../../Nav/NavBar'
import ScrollToNext from '../../ScrollToNext/ScrollToNext'
import './style.scss'

const Home = () => {
  return(
    <div className='home_page'>
      <NavBar />
      <div className='home_without_nav'>
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
          <div className='home_content'>
            <h2>I like coding and make magic page.</h2>
            <h2>Find magic in this page !</h2>
          </div>
        </div>
        <ScrollToNext pageSelector=".about_page"/>
      </div>


    </div>
  )
}

export default Home;
