import React, { Component } from 'react';
import './App.css';
import photo from '../../images/headerPhoto2.jpg'
import cigna from '../../images/CignaLogo.svg.png'
import multiplan from '../../images/MultiPlanLogo.png'
import unitedhealth from '../../images/UnitedHealthLogo.svg.png'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='section' id='header'>
          <span>Header</span>
          <img src={photo}/>
        </div>
        <div className='section' id='about'>
          <div className='holder'>
            <span>About</span>
            <div className='childDiv'>1</div>
            <div className='childDiv'>2</div>
            <div className='childDiv'>3</div>
            <div className='childDiv'>4</div>
            <div className='childDiv'>5</div>
            <div className='childDiv'>6</div>
          </div>
        </div>
        <div className='section' id='form'>Form</div>
        <div className='section' id='footer'>
          <div className='imgholder'>
            <img src={cigna} className='logos'/>
            <img src={multiplan} className='logos'/>
            <img src={unitedhealth} className='logos'/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
