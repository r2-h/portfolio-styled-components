import { useEffect, useState } from 'react'

import { ThemeIcon } from '@/assets/them-icon'
import { Container, Menu } from '@/components'
import { MobileMenu } from '@/layout/header/mobile-menu'
import styled from 'styled-components'

type HeaderProps = {
  toggleTheme: () => void
}
export const Header = ({ toggleTheme }: HeaderProps) => {
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 768

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])
  const menuItems = ['Home', 'Tech stack', 'Projects', 'Contact']

  return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <ToggleThemeBtn onClick={toggleTheme}>
            <StyledThemeIcon />
          </ToggleThemeBtn>
          {width > breakpoint && <Menu menuItems={menuItems} />}
          {width < breakpoint && <MobileMenu menuItems={menuItems} />}
        </Wrapper>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  left: 0;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ToggleThemeBtn = styled.button`
  cursor: pointer;
  padding: 5px;
  margin-top: 5px;
  display: flex;
  background-color: ${props => props.theme.colors.navigation};
  border-radius: 5px;
`
const StyledThemeIcon = styled(ThemeIcon)`
  width: 34px;
  height: 34px;
  path {
    fill: ${props => props.theme.colors.themeIcon};
  }
`
