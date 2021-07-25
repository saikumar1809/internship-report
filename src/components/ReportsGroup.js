import React from 'react';
import Report from './Report';
import './Report.css';

function ReportsGroup(props) {
  return (
    <div className='reports-group'>
      <h2 className='sub-title'>
        <span className='sub-title__inner'>Featured reports</span>
      </h2>
      <Report
        className='report-viewer'
        coverImage='./images/cover.jpg'
        reportDate='1 june 2021'
        reportTitle='Chief Economist outlook'
        text='The June edition of the Chief Economists Outlook comes out amid
        improving aggregate recovery momentum, yet in a profoundly uncertain
        environment with widely ...'
      />

      <h2 className='sub-title'>
        <span className='sub-title__inner'>Other reports</span>
      </h2>
      <Report
        className='report-viewer other-reports'
        coverImage='./images/cover.jpg'
        reportDate='1 june 2021'
        reportTitle='Chief Economist outlook'
        text='The June edition of the Chief Economists Outlook comes out amid
        improving aggregate recovery momentum, yet in a profoundly uncertain
        environment with widely ...'
      />
    </div>
  );
}
export default ReportsGroup;
