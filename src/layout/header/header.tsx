import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Container, Menu } from '@/components'
import { LangSwitcher } from '@/components/lang-switcher'
import { ToggleThemeBtn } from '@/components/toggle-theme-btn'
import { MobileMenu } from '@/layout/header/mobile-menu'
import { darkTheme } from '@/styles'
import styled from 'styled-components'

type HeaderProps = {
  toggleTheme: () => void
}
export const Header = ({ toggleTheme }: HeaderProps) => {
  const { t } = useTranslation()
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 768

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])
  const menuItems = [t('HOME'), t('TECH STACK'), t('PROJECTS'), t('CONTACT')]

  return (
    <StyledHeader>
      <Container>
        <Wrapper2>
          <ToggleThemeBtn toggleTheme={toggleTheme} />
          <LangSwitcher />
        </Wrapper2>
        <Wrapper>
          {width > breakpoint && <Menu menuItems={menuItems} />}
          {width < breakpoint && <MobileMenu menuItems={menuItems} />}
        </Wrapper>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  background-color: ${props => props.theme.colors.bGround};
`

const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  padding-top: 5px;
  position: fixed;
  z-index: 3;
  top: 0;
  right: 22%;
  left: 30%;

  @media ${darkTheme.media.tab} {
    right: 6%;
  }
`
const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  @media ${darkTheme.media.mobile} {
    padding-top: 15px;
  }
`
