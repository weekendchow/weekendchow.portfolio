import React, { Component } from 'react';
import NavBar from '../../Nav/NavBar'
import ScrollToNext from '../../ScrollToNext/ScrollToNext'
import img_avatar from '../../../image/img_avatar.png'
import './style.scss'

class Home extends Component {
  state = {
    hover: false
  }

  hoverOn = () => {
    this.setState({
      hover: true
    })
    console.log(this.state)
  }

  hoverOff = () => {
    this.setState({
      hover: false
    })
    console.log(this.state)
  }

  render(){
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
            <div className='firstName'>Week</div>
            <div className='lastName end'>end</div>
          </div>
          </div>
          <div className='content_grid'>
            <div className='home_content'>

              <li className="flip_avatar">
                <div
                  className={ this.state.hover ? "flip_avatar_container active" : "flip_avatar_container"}
                  onMouseEnter={this.hoverOn}
                  onMouseLeave={this.hoverOff}
                >
                  <div className="front flip">
                  </div>
                  <div className="back flip">
                    <img src={img_avatar} width="200" height="200" alt='avater'/>
                  </div>
                </div>
              </li>

              <div className='home_text'>
                <h2>I like coding and make magic page.</h2>
                <h2>Find magic in this page !</h2>
              </div>
            </div>
          </div>
          <ScrollToNext pageSelector=".about_page"/>
        </div>

      </div>
  )
}



}


export default Home;
