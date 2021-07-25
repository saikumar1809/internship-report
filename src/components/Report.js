import React from 'react';
import './Report.css';

function Report(props) {
  return (
    <div className={props.className}>
      <div className='report_image-wrapper'>
        <img src={props.coverImage} alt='report image' />
      </div>

      <div className='report-content'>
        <div className='report-details'>
          <div className='report-date'>{props.reportDate}</div>
          <h4 className='report-title'>{props.reportTitle}</h4>
          <p>{props.text}</p>
          <a href='#' className='download-pdf'>
            <span>
              <img src='./images/download-icon2.svg' alt='' />
            </span>
            Download PDF
          </a>
        </div>
        <hr className='dashed-border' />
        <div className='report-footer'>
          <a href='#'>Find out more</a>
        </div>
        <hr className='dashed-border' />
      </div>
    </div>
  );
}
export default Report;
