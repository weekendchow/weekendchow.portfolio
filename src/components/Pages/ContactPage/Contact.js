import React, { Component } from 'react';
import ScrollToTop from '../../ScrollToTop/ScrollToTop'
import './style.scss'

class Contact extends Component {
  state = {
    name:'',
    email:'',
    message:''
  }

  handleNameChange = e => {
    this.setState({name: e.target.value})
  }

  handleEmailChange = e => {
    this.setState({email: e.target.value})
  }

  handleMsgChange = e => {
    this.setState({message: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      name,
      email,
      message
    } = this.state
    console.log(name)
    console.log(email)
    console.log(message)
    alert('Hey '+ name +'! I got your Message!')
    this.setState({
      name:'',
      email:'',
      message:''
    })
  }

  checkNameEmpty = e => {
    const name = document.querySelector('#name').classList;
    if(this.state.name !== ''){
      name.add('not-empty')
    }else{
      name.remove('not-empty')
    }
  }

  checkEmailEmpty = e => {
    const email = document.querySelector('#email').classList;
    if(this.state.email !== ''){
      email.add('not-empty')
    }else{
      email.remove('not-empty')
    }
  }

  checkMsgEmpty = e => {
    const message = document.querySelector('#message').classList;
    if(this.state.message !== ''){
      message.add('not-empty')
    }else{
      message.remove('not-empty')
    }
  }

  render(){
    return(
      <div className='contact_page'>
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
          <h1>CONTACT</h1>
          <form className="contact_form" onSubmit={this.handleSubmit}>
            <div className="form_field">
              <input id="name" className="input_text" type="text" value={this.state.name}  onChange={this.handleNameChange} onKeyUp={this.checkNameEmpty} required />
              <label className="label" htmlFor="name">Name</label>
            </div>
            <div className="form_field">
              <input id="email" className="input_text" type="email" value={this.state.email} onChange={this.handleEmailChange} onKeyUp={this.checkEmailEmpty} required />
              <label className="label" htmlFor="email">E-mail</label>
            </div>
            <div className="form_field">
              <input id="message" className="input_text" type="text" value={this.state.message} onChange={this.handleMsgChange} onKeyUp={this.checkMsgEmpty} required />
              <label className="label" htmlFor="message">Message</label>
            </div>
            <div className="form_field btn">
              <input className="submit_btn" type="submit" value="say hi!" />
            </div>
          </form>
        </div>
        <ScrollToTop pageSelector=".home_page"/>

      </div>
    )
  }
}

export default Contact;
