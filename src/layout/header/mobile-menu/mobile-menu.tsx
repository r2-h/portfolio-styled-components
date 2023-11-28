import { FC, useState } from 'react'
import { Link } from 'react-scroll'

import { SplitedText } from '@/components'
import { darkTheme } from '@/styles'
import styled, { css } from 'styled-components'

type MobileMenuProps = {
  menuItems: string[]
}
export const MobileMenu: FC<MobileMenuProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <StyledMobileMenu isOpen={isOpen}>
      <BurgerButton isOpen={isOpen} onClick={() => setIsOpen(prev => !prev)}>
        <span></span>
      </BurgerButton>

      <PopUp isOpen={isOpen}>
        <ul>
          {menuItems.map((el, i) => (
            <li key={i}>
              <StyledLink
                activeClass={'active'}
                duration={300}
                onClick={() => setIsOpen(false)}
                smooth
                spy
                to={el}
              >
                <SplitedText>{el}</SplitedText>
              </StyledLink>
            </li>
          ))}
        </ul>
      </PopUp>
    </StyledMobileMenu>
  )
}
const StyledMobileMenu = styled.div<{ isOpen: boolean }>`
  margin-left: auto;
  margin-top: 10px;
  background-color: ${props => props.theme.colors.navigation};
  border-radius: 4px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      background-color: inherit;
    `}
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
  z-index: 99999;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  width: 37px;
  height: 34px;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${props => props.theme.colors.text};
    cursor: pointer;

    ${props =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}
    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${props => props.theme.colors.text};
      transform: translateY(-10px);

      ${props =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(1px);
          background-color: ${darkTheme.colors.text};
        `}
    }

    &::after {
      content: '';
      display: block;
      width: 26px;
      height: 2px;
      background-color: ${props => props.theme.colors.text};

      transform: translateY(9px);
      ${props =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 36px;
          background-color: ${darkTheme.colors.text};
        `}
    }
  }
`

const PopUp = styled.nav<{ isOpen: boolean }>`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.93);
  transform: translateY(-100%);
  transition: 0.7s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 0.4s ease-in-out;
  }
  ${props =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      transform: translateY(0);
      & ul {
        gap: 60px;
      }
    `}
`
const StyledLink = styled(Link)`
  cursor: pointer;
`
