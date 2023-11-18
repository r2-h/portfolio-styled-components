import { theme } from '@/styles'
import styled from 'styled-components'

export const Button = styled.button`
  font-size: 25px;
  color: ${theme.colors.text.dark};
  position: relative;
  width: 180px;

  z-index: 0;
  cursor: pointer;

  &:hover {
    &::before {
      height: 128%;
      width: 100%;
    }
  }

  &::before {
    position: absolute;
    content: '';
    display: inline-block;
    background: linear-gradient(45deg, #375df6, #9250d5);
    width: 60%;
    height: 10px;
    left: 50%;
    bottom: -5px;
    z-index: -1;
    transform: translateX(-50%);
  }
  &:focus {
    outline: none;
    &::before {
      height: 128%;
      width: 100%;
    }
  }
`
