import React from 'react';
import { Helmet } from 'react-helmet';
import Me from '../me.jpg'

// NOTE: use this for testing.
import * as rdd from 'react-device-detect';
rdd.isMobile = true;

import { isMobile } from 'react-device-detect';

const makeKeyEntry = (key, value) => {
  return {key, value}
}

const KEY = [
  makeKeyEntry('+', 'engineered'),
  makeKeyEntry('^', 'produced'),
  makeKeyEntry('!', 'mastered'),
  makeKeyEntry('*', 'art'),
]

const Index = () => {

  const makeKey = () => {
    let result = []
    KEY.forEach(entry => {
      result.push(
        <><b>{entry.key}</b>[<i>{entry.value}</i>]&nbsp;</>,
      )
    })
    return (<>{result}</>);
  };

  return (
    <div className="body">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Teddy Wilson | home</title>
        <link rel="canonical" href="http://teddywilson.me" />
      </Helmet>
      <div className="content">
        <div className="header">
          <div className="header-title">teddy wilson</div>
          <div className="header-divider">&nbsp;|&nbsp;</div>
          <div className="header-subtitle"><a href="mailto:hello@teddywilson.me">hello@teddywilson.me</a></div>
        </div>
        <div>artist and engineer living in brooklyn, ny</div>
        <img src={Me} height={500} style={{
          marginTop: 8
        }}/>
        <div className="key">{makeKey()}</div>
        <div className="date">2020</div>
        <ul>
          <li><a href="https://reynolds-band.bandcamp.com/album/off-peak-day-return"><i>reynolds</i> – "Off-Peak Day Return" [+^]</a></li>
          <li><a href="https://linocutlinocut.bandcamp.com/album/linocut"><i>Linocut</i> – "Linocut" [!*]</a></li>
        </ul>
        <div className="date">2019</div>
        <ul>
          <li><a href="https://familyvision.bandcamp.com/album/geotag-image"><i>Family Vision</i> – "Geotag / Image" [!]</a></li>
        </ul>        
        <div className="date">2018</div>
        <ul>
          <li><a href="https://reynolds-band.bandcamp.com/album/intent"><i>reynolds</i> – "Intent" [+^!*]</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Index;