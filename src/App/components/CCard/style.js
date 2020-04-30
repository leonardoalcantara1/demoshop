import styled from 'styled-components';
import { withContext } from 'app/utils/context';
import cardActive from './cardActive.svg';
import cardInactive from './cardInactive.svg';
import cvvArea from './cvvArea.gif';

export const CCardComponent = withContext(
  styled.div`
    width: 365px;
    height: 235px;
    background: url(${({ active }) => (!active ? cardInactive : cardActive)}) no-repeat top center;
    background-size: 100%;
    font-family: 'SF Pro Text', sans-serif;
    color: white;
    text-shadow: 0px 1px 2px #000000B3;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    box-sizing: border-box;
    padding: 38px 27px;
    position: relative;
    @media (max-width: ${({ context }) => context.theme.breakpoints.md - 1}px) {
      width: 280px;
      height: 184px;
      font-size: 12px;
      padding: 30px 14px 42px;
    }

    .ccard-brand {
      position: absolute;
      top: 35px;
      @media (max-width: ${({ context }) => context.theme.breakpoints.md - 1}px) {
        top: 28px;
        img {
          width: 52px;
        }
      }
    }

    .ccard-number {
      font-size: 27px;
      white-space: nowrap;
      letter-spacing: 1px;
      margin-bottom: 32px;
      @media (max-width: ${({ context }) => context.theme.breakpoints.md - 1}px) {
        font-size: 18px;
        margin-bottom: 28px;
      }
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
      &:before {
        content: ' ';
        position: absolute;
        left: 1px;
        top: 42px;
        height: 50px;
        width: calc(100% - 1px);
        background: black;
        animation: fade 0.5s ease;
      }

      .cvvArea {
        width: 186px;
        height: 24px;
        background: url(${cvvArea});
        display: flex;
        justify-content: flex-end;
        margin-bottom: 62px;
        .numberArea {
          width: 60px;
          height: 24px;
          background: white;
          color: black;
          text-shadow: none;
          font-size: 19px;
          line-height: 22px;
          letter-spacing: 4px;
          text-align: center;
        }
      }
    }

    @keyframes fade {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
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
  `,
);
