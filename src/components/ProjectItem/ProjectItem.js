import React from 'react'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectItem = (props) => {
  console.log(props)
  if (props.render) return props.render;
  else return(
    <div className="project-item">
      <div className="project-item_title">project</div>
      <div className='project-item_icon'>
       <a target="_blank" rel="noopener noreferrer" href='https://github.com/weekendchow'>
         <FontAwesomeIcon icon={['fab', 'github']}  className='brand-icon' size='2x' flip='both'/ >
       </a>
      </div>
      <div className="project-item_desc">
        Here is the description of my project.
      </div>
     </div>
  )
}

export default ProjectItem
