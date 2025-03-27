import React from 'react';
import './BrandMarquee.css';

import blogo1 from './Img/blogo1.jpg';
import blogo2 from './Img/blogo2.jpg';
import blogo3 from './Img/blogo3.gif';
import blogo4 from './Img/blogo4.jpg';
import blogo5 from './Img/blogo5.png';

const logos = [blogo1, blogo2, blogo3, blogo4, blogo5];

function BrandMarquee() {
  return (
    <div className="brand-marquee-wrapper">
      <div className="brand-marquee-track">
        {[...logos, ...logos].map((src, idx) => (
          <div className="brand-logo" key={idx}>
            <img src={src} alt={`Brand ${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandMarquee;
