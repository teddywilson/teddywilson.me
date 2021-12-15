import React from 'react';
import { Helmet } from 'react-helmet';

export default ({ data }) => {
  return (
    <div className="body">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Teddy Wilson | home</title>
        <link rel="canonical" href="http://teddywilson.me" />
      </Helmet>
    </div>
  );
};
