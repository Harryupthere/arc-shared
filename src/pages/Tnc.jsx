import React from 'react';
import { Link } from 'react-router-dom';
import './Tnc.scss';
import { ShadeImage } from '../components/common/iconImage';
const Tnc = () => {
  return (
    <div className="privacy-container">
    <picture className="shade-left roated-90"  >
        <ShadeImage />
      </picture>
      <picture className="shade-right" >
        <ShadeImage />
      </picture>
      <div className='container'>
        <div className='tnc-content'>
          <h1>Terms and Conditions</h1>
          <iframe
            src="/nyiosh/tnc.pdf"
            title="Terms and Conditions"
            width="100%"
            height="1100px"
          />
        </div>
      </div>
    </div>
  );
};

export default Tnc;