import styled from 'styled-components';
import { withContext } from 'app/utils/context';

export const HeaderComponent = withContext(styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 90;
  height: ${({ context }) => context.theme.dimensions.headerHeight};
  border-bottom: 1px solid ${({ context }) => context.theme.colors.text2};
  background: ${({ context }) => context.theme.colors.paper.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`);
