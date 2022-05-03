import React from 'react';
import { Helmet } from 'react-helmet';
import Me from '../me.jpg'

const Index = () => {
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
          <div className="header-subtitle"><a href="mailto:hello@teddywilson.me" id="email">hello@teddywilson.me</a></div>
        </div>
        <div>artist and engineer living in brooklyn, ny</div>
        {/* TODO(teddywilson): Dynamic image height, or something. Who cares. */}
        <img src={Me} height={500} style={{
          marginTop: 8
        }} />
    </div>
  );
};

export default Index;
