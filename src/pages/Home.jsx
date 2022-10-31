import React from 'react';
import List from '../components/List/List';
import background from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.png';
import '../../src/index.scss';

export default function Home() {
  return (
    <body>
      <section
        className="section1"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="section1TextBgd">
          <p className="textSection1">Chez vous, partout et ailleurs</p>
        </div>
      </section>

      <List />
    </body>
  );
}
