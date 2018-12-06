import React from 'react';
import ScrollToNext from '../../ScrollToNext/ScrollToNext'
import ScrollToPrev from '../../ScrollToPrev/ScrollToPrev'
import img_avatar from '../../../image/img_avatar.png'
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
          <div className='firstName'>Week</div>
          <div className='lastName end'>end</div>
        </div>
      </div>
      <div className='content_grid'>
        <div className='about_title'>
          <div className='title'>
            <h1>ABOUT</h1>
          </div>
          <div className='avater'>
            <img src={img_avatar} width="40" height="40" alt='avater'/>
          </div>
        </div>

        <p>
          Yes, you probably already know my name when you open this site.
          I am <b>Mo Zhou</b>, a <b>Font-End developer</b> graduated from the <b>University of Ottawa</b>.
          Currently living in Ottawa, Canada.
        </p>
        <p>
          I enjoy the process of creating fun things since I was a child and great designs as well as fun concepts always attract me.
          In the meantime, I am a very logical and organized person.
          So, after years of education and self-teaching on programming, my skills in <b>HTML & CSS, JavaScript, jQuery, AJAX, ReactJS, React Native</b> and so on have been developed.
          Now I’m making interesting websites and apps that serving people and I’m loving it!
        </p>
        <p>
          It’s very lucky for me to accomplish my master degree in a different country.
          This opens up my perspective and I believe that <b>keep learning</b> and <b>keep travelling</b> will definitely make me a wiser person.
          So, if I am not coding now, you might find me exploring the world, learning new skills, watching movies, playing video games, or snowboarding🏂!
        </p>
      </div>
        <ScrollToPrev pageSelector=".home_page"/>
        <ScrollToNext pageSelector=".projects_page"/>
    </div>
  )
}

export default About;
