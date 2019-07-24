import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toElement as scrollToElement } from '../../utils/scrollTo';
import './style.scss'

class NavBar extends Component {
  state = {
    showMenu: true
  }

  enterIcon = () => {
    const icon = document.querySelector('#arrow').classList;
    icon.remove('fa-rotate-180');
  }

  leaveIcon = () => {
    const icon = document.querySelector('#arrow').classList;
    icon.add('fa-rotate-180');
  }

  clickMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
    this.toggleMenu();
  }

  toggleMenu = () => {
    const header = document.querySelector('header');
    const icon = document.querySelector('#arrow').classList;

    if(this.state.showMenu){
      header.style.transition = '1s';
      header.style.right ='2rem';
      icon.add('fa-spin');
    } else {
      header.style.transition = '1s';
      header.style.right ='-30rem';
      icon.remove('fa-spin');
    }

  }

  scrollToPage = (pageSelector) => {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }


  render(){
    return (
      <header id='header'>
        <div className='menu_icon' onClick={ this.clickMenu } onMouseOver={ this.enterIcon } onMouseOut={ this.leaveIcon }>
          <FontAwesomeIcon icon="long-arrow-alt-left" id='arrow'  className='fa-rotate-180'/>
        </div>
        <nav id='nav'>
          <div onClick={(e) => this.scrollToPage('.about_page')}
          className='menu_About'>
            About
          </div>
          <div onClick={(e) => this.scrollToPage('.projects_page')}
          className='menu_Projects'>
            Projects
          </div>
          <div onClick={(e) => this.scrollToPage('.contact_page')}
          className='menu_Contact'>
            Contact
          </div>
        </nav>
      </header>
    )
  }
}

export default NavBar;
