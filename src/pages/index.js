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
        <div className="key">{[
          ['+', 'engineered'],
          ['^', 'produced'],
          ['!', 'mastered'],
          ['*', 'art'],
        ]
          .reduce((prev, entry) => {
            prev.push(
              <><b>{entry[0]}</b>[<i>{entry[1]}</i>]&nbsp;</>,
            )
            return prev
          }, [])}</div>
        {/* TODO(teddywilson): Lol @ the following 'raw' html. Eventually move into some kind of CMS; works for now. */}
        <div className="date">2022</div>
        <ul>
          <li><a href="https://drive.google.com/file/d/1Q469iHmKDrnSpRKGwnA8-lBaC-DQsO6n/view?usp=sharing">Favmily Vision / Blood tour flier [*]</a></li>
        </ul>
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
        <div className="date">2017</div>
        <ul>
          <li><a href="https://soundcloud.com/familyvision/sets/split-family-vision-reynolds"><i>Family Vision / reynolds</i> – split [+^*]</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
