import React, { Component } from 'react';
import { toElement as scrollToElement } from '../../utils/scrollTo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.scss'

class ScrollToNext extends Component {
  scrollToNext() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    return (
      <div className="scroll-to-next" onClick={(e) => this.scrollToNext()}>
        <div className="arrow bounce">
            <FontAwesomeIcon icon="long-arrow-alt-left" id='arrow'  className='fa-rotate-270'/>
        </div>
      </div>
    );
  }
}


export default ScrollToNext;
