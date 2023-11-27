import { ComponentPropsWithoutRef, FC } from 'react'

import { EMailIcon } from '@/assets/mail'
import styled from 'styled-components'

type ButtonWithIconProps = {
  children: string
} & ComponentPropsWithoutRef<'button'>
export const ButtonWithIcon: FC<ButtonWithIconProps> = ({ children }) => {
  return (
    <Button>
      <EMailIcon />
      {children}
    </Button>
  )
}

const Button = styled.button`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  font-size: 22px;
  color: ${props => props.theme.colors.button.color};
  background-color: ${props => props.theme.colors.button.background};
  height: 45px;
  width: 265px;
  border-radius: 3px;
  cursor: pointer;

  path {
    fill: ${props => props.theme.colors.button.color};
  }

  &:hover {
    background-color: ${props => props.theme.colors.button.hover};
  }
`
