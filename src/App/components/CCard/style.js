import styled from 'styled-components';
import cardActive from './cardActive.svg';
import cardInactive from './cardInactive.svg';

export const CCardComponent = styled.div`
  width: 365px;
  height: 235px;
  background: url(${({ active }) => (!active ? cardInactive : cardActive)}) no-repeat top center;
  background-size: 100%;
  font-family: 'SF Pro Text', sans-serif;
  text-shadow: 0px 1px 2px #000000B3;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  box-sizing: border-box;
  padding: 38px 27px;

  .ccard-number {
    font-size: 27px;
    white-space: nowrap;
    letter-spacing: 1px;
    margin-bottom: 32px;
    .number {
      width: calc(100% / 19);
      display: inline-block;
      text-align: center;
      &:nth-child(5), &:nth-child(9), &:nth-child(13) {
        margin-left: calc(100% / 19);
      }
    }
  }

  &.front, &.verse {
    transition: 0.5s ease;
    filter: brightness(100%);
  }
  
  &.front {
    animation: flipF 0.5s ease;
    transform: scale(1) rotateY(0deg);
  }

  &.verse {
    animation: flipV 0.5s ease;
    transform: scale(1) rotateY(180deg);
  }

  @keyframes flipF {
    0% {
      transform: scale(1) rotateY(180deg);
      filter: brightness(100%);
    }
    50% {
      transform: scale(1.5) rotateY(90deg);
      filter: brightness(50%);
    }
    100% {
      transform: scale(1) rotateY(0deg);
      filter: brightness(100%);
    }
  }
  @keyframes flipV {
    0% {
      transform: scale(1) rotateY(0deg);
      filter: brightness(100%);
    }
    50% {
      transform: scale(1.5) rotateY(90deg);
      filter: brightness(50%);
    }
    100% {
      transform: scale(1) rotateY(180deg);
      filter: brightness(100%);
    }
  }

  .verse-data {
    transform: rotateY(180deg);
  }
`;
