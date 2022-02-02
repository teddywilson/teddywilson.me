import React from 'react';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <div className="body">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Teddy Wilson | home</title>
        <link rel="canonical" href="http://teddywilson.me" />
      </Helmet>
      <div className="content">
        <div className="header">teddy wilson</div>
        <div className="subheader">
          <div className="subheader-nyc">nyc</div>
          <div className="subheader-divider">&nbsp;|&nbsp;</div>
          <div className="subheader-email"><a href="mailto:hello@teddywilson.me">hello@teddywilson.me</a></div>
        </div>
        <div className="key">+ engineered&nbsp;&nbsp;^ produced&nbsp;&nbsp;! mastered&nbsp;&nbsp;* art</div>
        <div className="date">2020</div>
        <ul>
          <li><a href="https://reynolds-band.bandcamp.com/album/off-peak-day-return"><i>reynolds</i> - "Off-Peak Day Return" [+^]</a></li>
          <li><a href="https://linocutlinocut.bandcamp.com/album/linocut"><i>Linocut</i> – "Linocut" [!*]</a></li>
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