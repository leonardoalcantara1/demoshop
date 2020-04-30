import React, { useState, useEffect } from 'react';
import {
  Grid,
} from '@material-ui/core';
import {
  CCardComponent,
} from './style';
import visa from './brands/visa.png';
import mastercard from './brands/mastercard.png';

let timeout;

const brands = {
  visa,
  mastercard,
};

const CCard = ({
  number,
  name,
  expires,
  cvv,
  verse,
  brand,
}) => {
  const [verseData, setVerseData] = useState(verse);
  const maskNumber = () => {
    const mask = '****************';
    return (`${number.replace(/\D/g, '')}${mask.substr(0, mask.length - number.replace(/\D/g, '').length)}`).split('');
  };
  useEffect(() => {
    clearTimeout(timeout);
    timeout = setTimeout(() => setVerseData(verse), 250);
  }, [verse]);
  return (
    <CCardComponent className={verse ? 'ccard-component verse' : 'ccard-component front'} active={!!brand}>
      {
        !verseData ? (
          <div className="front-data">
            <div className="ccard-brand">
              {brands[brand] ? <img src={brands[brand]} alt="" /> : brand}
            </div>
            <div className="ccard-number">
              {
                number
                  // eslint-disable-next-line react/no-array-index-key
                  ? maskNumber().map((n, i) => <span className="number" key={`n${i}`}>{n}</span>)
                  : (
                    <>
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
                    </>
                  )
              }
            </div>
            <Grid container className="name-expires">
              <Grid item xs>
                {name || 'NOME DO TITULAR'}
              </Grid>
              <Grid item>
                {expires || '00/00'}
              </Grid>
            </Grid>
          </div>
        ) : (
          <div className="verse-data">
            <div className="cvvArea">
              <div className="numberArea">
                {cvv || '***'}
              </div>
            </div>
          </div>
        )
      }
    </CCardComponent>
  );
};

export default CCard;
