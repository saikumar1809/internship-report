import React from 'react';
//import { Link } from 'react-router-dom';

import './Cover.css';

function Cover(props) {
  return (
    <div className='cover'>
      <div className='cover-img-container'>
        <img src={props.src} alt='cover image' className='cover-image' />
      </div>
      <div className='cover-info-container'>
        <a href='{props.src}' className='category'>
          {props.category}
        </a>
        <a href='' className='cover-info-header'>
          {props.heading}
        </a>
        <p className='cover-info-description'>{props.description}</p>
      </div>
    </div>
  );
}

export default Cover;
