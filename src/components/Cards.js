import React from 'react';
import './Cards.css';

function Cards(props) {
  return (
    <div className='news-card'>
      <div className='news-img-container'>
        <img src={props.src} alt='cover image' className='news-img' />
      </div>
      <div className='news-info-container'>
        <a href='' className='news-category'>
          {props.category}
        </a>
        <a href='' className='news-info-header'>
          {props.heading}
        </a>
      </div>
    </div>
  );
}
export default Cards;
