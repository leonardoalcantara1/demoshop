import React, { useState, useEffect } from 'react';
import {
  Grid,
} from '@material-ui/core';
import {
  CCardComponent,
} from './style';

let timeout;

const CCard = ({
  number,
  name,
  expires,
  cvv,
  verse,
}) => {
  const [verseData, setVerseData] = useState(verse);
  useEffect(() => {
    clearTimeout(timeout);
    timeout = setTimeout(() => setVerseData(verse), 250);
  }, [verse]);
  return (
    <CCardComponent className={verse ? 'verse' : 'front'}>
      {
        !verseData ? (
          <div className="front-data">
            <div className="ccard-number">
              <span className="number">*</span>
              <span className="number">*</span>
              <span className="number">*</span>
              <span className="number">*</span>
              <span className="number">*</span>
              <span className="number">*</span>
              <span className="number">*</span>
              <span className="number">*</span>
              <span className="number">*</span>
              <span className="number">*</span>
              <span className="number">*</span>
              <span className="number">*</span>
              <span className="number">*</span>
              <span className="number">*</span>
              <span className="number">*</span>
              <span className="number">*</span>
            </div>
            <Grid container className="name-expires">
              <Grid item xs>
                NOME DO TITULAR
              </Grid>
              <Grid item>
                00/00
              </Grid>
            </Grid>
          </div>
        ) : (
          <div className="verse-data">
            VERSO
          </div>
        )
      }
    </CCardComponent>
  );
};

export default CCard;
