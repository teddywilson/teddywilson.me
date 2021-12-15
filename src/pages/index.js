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
        <div className="header">Teddy Wilson</div>
        <div className="subheader">NYC</div>
        <div>+ engineered  ^ produced  ! mastered  * art</div>
        <div className="date">2020</div>
        <ul>
          <li><a><i>reynolds</i> - Off-Peak Day Return LP [+^]</a></li>
          <li><a><i>Linocut</i> – S/T EP [!*]</a></li>
        </ul>
        <div className="date">2018</div>
        <ul>
          <li><a><i>reynolds</i> – Intent EP [+^!*]</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Index;