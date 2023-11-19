import { FC, useState } from 'react'

import { SplitedText } from '@/components'
import { theme } from '@/styles'
import styled, { css } from 'styled-components'

type MobileMenuProps = {
  menuItems: string[]
}
export const MobileMenu: FC<MobileMenuProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={isOpen} onClick={() => setIsOpen(prev => !prev)}>
        <span></span>
      </BurgerButton>

      <PopUp isOpen={isOpen}>
        <ul>
          {menuItems.map((el, i) => (
            <>
              <List key={i}>
                <Link href={''}>
                  <SplitedText>{el}</SplitedText>
                </Link>
              </List>
            </>
          ))}
        </ul>
      </PopUp>
    </StyledMobileMenu>
  )
}
const StyledMobileMenu = styled.div``
const BurgerButton = styled.button<{ isOpen: boolean }>`
  z-index: 99999;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.text.dark};
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
      background-color: ${theme.colors.text.dark};
      transform: translateY(-10px);

      ${props =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(1px);
        `}
    }

    &::after {
      content: '';
      display: block;
      width: 26px;
      height: 2px;
      background-color: ${theme.colors.text.dark};

      transform: translateY(10px);
      ${props =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 36px;
        `}
    }
  }
`

const PopUp = styled.nav<{ isOpen: boolean }>`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99999;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  display: none;

  ${props =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  ul {
    display: flex;
    gap: 35px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`
const List = styled.li``
const Link = styled.a`
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`
