import React from 'react';
import classes from './IndexSlideOne.scss';
import bg from './assets/pattern.png';
import logo from 'images/logo.svg';

const IndexSlideOne = () => (
  <div className={classes['container']} style={{backgroundImage: `url(${bg})`}}>
    <div className={classes['bg']}>
      <video autoPlay playsInline muted='true' loop poster='/bg.jpg'>
        <source src='/bg.webm' type='video/webm' />
        <source src='/bg.mp4' type='video/mp4' />
      </video>
    </div>
    <div className={classes['center']}>
      <img src={logo} alt='Logo' />
      <p>Super Duper Premium E-Liquids</p>
    </div>
    <div className={classes['bottom']}>
      <p>Made with ❤️ in Eilat</p>
    </div>
  </div>
);

export default IndexSlideOne;
