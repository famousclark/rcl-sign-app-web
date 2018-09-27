/* @flow */

// React
import React, { Component } from 'react';

// React Native
/*import {
  Text, //Just text
  div, //Div
  img,//img
  button } from 'react-native';
  */

// Styles
import { BannerStyles } from '../styles/Styles';

import IntroScreen  from './IntroScreen';


const Banner = (props: Object) => {
  let { language, setLanguage, introText, showIntro, toggleIntro } = props;
  return(
    <div class="ui medium images">
      <div class="ui image" onPress={() => { setLanguage('fr') } }>
        <img src={require('../images/fr_flag.png')}/>
      </div>
      <div class="ui image" onPress={toggleIntro}>
        <img src={require('../images/home_logo.png')}/>
        <IntroScreen
          introText={introText}
          language={language}
          visible={showIntro}
          onClose={toggleIntro}
        />
      </div>
      <div class="ui image" onPress={() => { setLanguage('en') } }>
        <img src={require('../images/us_flag.png')}/>
      </div>
    </div>
  );
}

export default Banner
