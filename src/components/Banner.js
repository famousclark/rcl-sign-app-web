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
    <div style={BannerStyles.bannerContainer}>
      <button onPress={() => { setLanguage('fr') } }>
        <div style={BannerStyles.bannerImageContainer}>
          <img resizeMode={'contain'} style={ language === 'fr' ? BannerStyles.selectedLanguage : BannerStyles.bannerImage } source={require('../images/fr_flag.png')}/>
        </div>
      </button>
      <div style={BannerStyles.bannerImageContainer}>
        <button onPress={toggleIntro}>
          <img resizeMode={'contain'} style={BannerStyles.bannerImageHome} source={require('../images/home_logo.png')}/>
          <IntroScreen
            introText={introText}
            language={language}
            visible={showIntro}
            onClose={toggleIntro}
          />
        </button>
      </div>
      <button onPress={() => { setLanguage('en') } }>
        <div style={BannerStyles.bannerImageContainer}>
          <img resizeMode={'contain'} style={ language === 'en' ? BannerStyles.selectedLanguage : BannerStyles.bannerImage } source={require('../images/us_flag.png')}/>
        </div>
      </button>
    </div>
  );
}

export default Banner
