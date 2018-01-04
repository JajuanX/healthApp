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
          <img src={photo}/>
        </div>
        <div className='section' id='about'>
          <div className='holder'>
            <div className='childDiv'>This</div>
            <div className='childDiv'>could</div>
            <div className='childDiv'>be</div>
            <div className='childDiv'>any</div>
            <div className='childDiv'>info</div>
            <div className='childDiv'>.</div>
          </div>
        </div>
        <div className='section' id='form'>
          <span>Form Page</span>
        </div>
        <div className='section' id='footer'>
          <div className='imgholder'>
            <img src={cigna} className='logos'/>
            <img src={multiplan} className='logos'/>
            <img src={unitedhealth} className='logos'/>
            <p className='info'>
              info@healthenrollment.com<br/>5285 Main Street, City, State 11111, USA
              <br/>
              Copyright ©2012 HealthEnrollment, All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
