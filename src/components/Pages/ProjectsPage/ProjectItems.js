import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default [{
  name: 'MyReads',
  render: (
    <div className='project-item'>
     <div className='project-item_title'>
       MyReads
     </div>
     <div className='project-item_icon'>
     <a target="_blank" rel="noopener noreferrer" href='https://github.com/weekendchow/myreads-reactnd-project'>
       <FontAwesomeIcon icon={['fab', 'github']}  className='brand-icon' size='2x' flip='both'/ >
     </a>
     <a target="_blank" rel="noopener noreferrer" href='https://reactjs.org/'>
       <FontAwesomeIcon icon={['fab', 'react']}  className='brand-icon' size='2x' flip='both'/ >
     </a>
     </div>
     <div className='project-item_desc'>
        A bookshelf app that can select and categorize books you have read, are currently reading, or want to read.
      </div>
   </div>
  )
},{
  name: 'Readable',
  render: (
    <div className='project-item'>
     <div className='project-item_title'>
       Readable
     </div>
     <div className='project-item_icon'>
      <a target="_blank" rel="noopener noreferrer" href='https://github.com/weekendchow/readable-react-project'>
        <FontAwesomeIcon icon={['fab', 'github']}  className='brand-icon' size='2x' flip='both'/ >
      </a>
      <a target="_blank" rel="noopener noreferrer" href='https://redux.js.org/'>
        <FontAwesomeIcon icon={['fab', 'react']}  className='brand-icon' size='2x' flip='both'/ >
      </a>
     </div>
     <div className='project-item_desc'>
       A content and comment web app.
       Users will be able to post content by categories, comment, vote, edit and delete.
     </div>
   </div>

  )
},{
  name: 'Mobile FlashCards',
  render: (
    <div className='project-item'>
     <div className='project-item_title'>
       Mobile FlashCards
     </div>
     <div className='project-item_icon'>
      <a target="_blank" rel="noopener noreferrer" href='https://github.com/weekendchow/mobile-flashcards-react-project'>
        <FontAwesomeIcon icon={['fab', 'github']}  className='brand-icon' size='2x' flip='both'/ >
      </a>
      <a target="_blank" rel="noopener noreferrer" href='https://facebook.github.io/react-native/'>
        <FontAwesomeIcon icon={['fab', 'react']}  className='brand-icon' size='2x' flip='both'/ >
      </a>
     </div>
     <div className='project-item_desc'>
       A mobile app that allows users to study collections of flashcards.
       Users will be able to create different categories of flashcards and take quizzes.
     </div>

   </div>

  )
},{
  name: 'Neighborhood Map',
  render: (
    <div className='project-item'>
     <div className='project-item_title'>
       Neighborhood Map
     </div>
     <div className='project-item_icon'>
      <a target="_blank" rel="noopener noreferrer" href='https://github.com/weekendchow/fend-Neighborhood-Map'>
        <FontAwesomeIcon icon={['fab', 'github']}  className='brand-icon' size='2x' flip='both'/ >
      </a>
      <a target="_blank" rel="noopener noreferrer" href='https://knockoutjs.com/'>
        <FontAwesomeIcon icon={['fab', 'js']}  className='brand-icon' size='2x' flip='both'/ >
      </a>
     </div>
     <div className='project-item_desc'>
       A single page app using knockoutJS & Google Maps API to shows Ottawa skateboard park locations with markers and info window.
     </div>

   </div>

  )
},{
  name: 'Arcade Game',
  render: (
    <div className='project-item'>
     <div className='project-item_title'>
       Arcade Game
     </div>
     <div className='project-item_icon'>
      <a target="_blank" rel="noopener noreferrer" href='https://github.com/weekendchow/fend-Arcade-Game'>
        <FontAwesomeIcon icon={['fab', 'github']}  className='brand-icon' size='2x' flip='both'/ >

      </a>
      <a target="_blank" rel="noopener noreferrer" href='https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS'>
        <FontAwesomeIcon icon={['fab', 'js']}  className='brand-icon' size='2x' flip='both'/ >
      </a>
     </div>
     <div className='project-item_desc'>
       A Frogger game web app to practice object-oriented JavaScript programming with player and enemies objects.
     </div>

   </div>

  )
},{
  name: 'Resume page',
  render: (
    <div className='project-item'>
     <div className='project-item_title'>
       Resume page
     </div>
     <div className='project-item_icon'>
      <a target="_blank" rel="noopener noreferrer" href='https://github.com/weekendchow/fend-Resume'>
        <FontAwesomeIcon icon={['fab', 'github']}  className='brand-icon' size='2x' flip='both'/ >
      </a>
      <a target="_blank" rel="noopener noreferrer" href='https://jquery.com/'>
        <FontAwesomeIcon icon={['fab', 'js']}  className='brand-icon' size='2x' flip='both'/ >
      </a>
     </div>
     <div className='project-item_desc'>
       A single page app to practice manipulating and traversing the DOM using jQuery and show my resume.
     </div>

   </div>

  )
}]
