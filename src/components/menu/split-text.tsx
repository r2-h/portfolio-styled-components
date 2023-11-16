import { FC } from 'react'

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
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  color: snow;

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`
const Relative = styled.span`
  position: relative;
  color: transparent;

  &::before {
    content: '';
    display: inline-block;
    height: 1px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Half} {
      transform: skewX(12deg) translateX(0.1em);
      color: green;

      & + ${Half} {
        transform: skewX(12deg) translateX(-0.1rem);
      }
    }
  }
`
