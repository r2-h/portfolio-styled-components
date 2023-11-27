import { FC } from 'react'

import { ThemeIcon } from '@/assets/them-icon'
import styled from 'styled-components'

type ToggleThemeBtnProps = {
  toggleTheme: () => void
}
export const ToggleThemeBtn: FC<ToggleThemeBtnProps> = ({ toggleTheme }) => {
  return (
    <ToggleBtn onClick={toggleTheme}>
      <StyledThemeIcon />
    </ToggleBtn>
  )
}
const ToggleBtn = styled.button`
  cursor: pointer;
  padding: 5px;
  margin-top: 5px;
  display: flex;
  background-color: ${props => props.theme.colors.navigation};
  border-radius: 5px;
  &:hover {
    background-color: ${props => props.theme.colors.hover.navigation};
  }
`
const StyledThemeIcon = styled(ThemeIcon)`
  width: 31px;
  height: 31px;
  path {
    fill: ${props => props.theme.colors.textSecondary};
  }
`
