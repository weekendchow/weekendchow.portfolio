import React, { Component } from 'react';
import { toElement as scrollToElement } from '../../utils/scrollTo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.scss'

class ScrollToTop extends Component {
  scrollToTop() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    return (
      <div className="scroll-to-top" onClick={(e) => this.scrollToTop()}>
        <div className="arrow bounce">
            <FontAwesomeIcon icon="long-arrow-alt-left" id='arrow'  className='fa-rotate-90'/>
        </div>
      </div>
    );
  }
}


export default ScrollToTop;
