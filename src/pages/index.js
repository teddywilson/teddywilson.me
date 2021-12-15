import React from 'react';
import Typed from 'react-typed';
import { FaLinkedin, FaGithub, FaGoodreads, FaEnvelope } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const TYPE_SPEED = 32;

export default ({ data }) => {
  var artistSubheadingLink = <a href="https://clotheslinerecordings.com">Artist</a>;
  var softwareEngineerSubheadingLink = (
    <a href="https://github.com/teddywilson">Software Engineer</a>
  );
  return (
    <div className="body">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Teddy Wilson | home</title>
        <link rel="canonical" href="http://teddywilson.me" />
      </Helmet>
      <div className="info-container" id="info">
        <div className="header">
          {' > '}
          <Typed strings={[`Teddy Wilson`]} typeSpeed={TYPE_SPEED} showCursor={false} />
        </div>
        <div className="subheading">
          {artistSubheadingLink} & {softwareEngineerSubheadingLink} based in New York
        </div>
        <div id="items">
          <div className="section-header">
            <u>Work</u>.
          </div>
          <div className="section-content-lg">
            Building out <a href="https://research.google/pubs/pub44824/">Network Load Balancing</a>{' '}
            infrastructure at <a href="https://www.google.com/">Google</a>
          </div>
          <div className="section-header">
            <u>Contact</u>.
          </div>
          <div className="section-content-md">
            <div>
              <a href="https://www.linkedin.com/in/teddy-wilson-6287ab86/">
                <FaLinkedin className="icon" />
              </a>
              <a href="https://github.com/teddywilson">
                <FaGithub className="icon" />
              </a>
              <a href="https://www.goodreads.com/review/list/11857663?shelf=read">
                <FaGoodreads className="icon" />
              </a>
              <a href="mailto:hello@teddywilson.me">
                <FaEnvelope className="icon" />
              </a>
            </div>
          </div>
          <div className="section-header">
            <u>Newsletter</u>.
          </div>
          <div className="section-content-md">
            Subscribe to my newsletter <a href="https://forms.gle/wC2Z4mVVMHV1itVU8">here</a>
          </div>
        </div>
      </div>
    </div>
  );
};
