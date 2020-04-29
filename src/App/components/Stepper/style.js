import styled from 'styled-components';
import {
  Typography,
} from '@material-ui/core';
import { withContext } from 'app/utils/context';

export const Step = withContext(styled(Typography)`
  display: flex;
  align-items: center;
  svg {
    width: 26px;
    height: 26px;
    margin-right: 6px;
  }
  .circle {
    width: 22px;
    height: 22px;
    margin-right: 8px;
    border-radius: 100%;
    border: 1px solid ${({ context }) => context.theme.colors.main};
    text-align: center;
    line-height: 20px;
    box-sizing: border-box;
  }
`);
