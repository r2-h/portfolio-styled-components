import { useEffect, useState } from 'react'

import { Container, Menu } from '@/components'
import { LangSwitcher } from '@/components/lang-switcher'
import { ToggleThemeBtn } from '@/components/toggle-theme-btn'
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
          <Wrapper2>
            <ToggleThemeBtn toggleTheme={toggleTheme} />
            <LangSwitcher />
          </Wrapper2>
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
const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`
