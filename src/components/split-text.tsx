import { FC } from 'react'

import { darkTheme } from '@/styles'
import styled from 'styled-components'

type SplitedTextProps = {
  children: string
}
export const SplitedText: FC<SplitedTextProps> = ({ children }) => (
  <Relative>
    {children}
    <Half>
      <span>{children}</span>
    </Half>
    <Half>
      <span>{children}</span>
    </Half>
  </Relative>
)
const Half = styled.span`
  overflow-y: hidden;
  height: 49%;
  position: absolute;
  top: 3px;
  left: 0;
  display: inline-block;
  color: ${props => props.theme.colors.popUp.color};
  transition: 0.1s ease-in-out;

  & + & {
    top: 51%;

    span {
      display: inline-block;
      transform: translateY(-49%);
    }
  }
`
const Relative = styled.span`
  position: relative;
  color: transparent;
  font-size: 2.5rem;

  &::before {
    content: '';
    display: inline-block;
    height: 0.2rem;
    background-color: ${darkTheme.colors.accent};
    position: absolute;

    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: scale(0);
    transition: 0.1s ease-in-out;
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Half} {
      transform: skewX(12deg) translateX(0.1em);
      color: ${darkTheme.colors.text};
      & + ${Half} {
        transform: skewX(12deg) translateX(-0.1rem);
      }
    }
  }
`
