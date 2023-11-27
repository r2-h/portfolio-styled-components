import styled from 'styled-components'

export const Button = styled.button`
  font-size: 25px;
  color: ${props => props.theme.colors.textSecondary};
  position: relative;
  width: 180px;

  z-index: 0;
  cursor: pointer;

  &:hover {
    &::before {
      height: 128%;
      width: 100%;
      border-radius: 2px;
    }
  }

  &::before {
    position: absolute;
    content: '';
    display: inline-block;
    background: ${props => props.theme.colors.button};
    width: 60%;
    height: 10px;
    left: 50%;
    bottom: -5px;
    z-index: -1;
    transform: translateX(-50%);
    transition: 0.2s ease-in-out;
  }

  &:focus {
    outline: none;

    &::before {
      height: 128%;
      width: 100%;
    }
  }
`
