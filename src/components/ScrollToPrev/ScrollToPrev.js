import React, { Component } from 'react';
import { toElement as scrollToElement } from '../../utils/scrollTo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.scss'

class ScrollToPrev extends Component {
  scrollToPrev() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    return (
      <div className="scroll-to-prev" onClick={(e) => this.scrollToPrev()}>
        <div className="arrow bounce">
            <FontAwesomeIcon icon="long-arrow-alt-left" id='arrow'  className='fa-rotate-90'/>
        </div>
      </div>
    );
  }
}


export default ScrollToPrev;
