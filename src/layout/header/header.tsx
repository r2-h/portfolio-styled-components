import { useEffect, useState } from 'react'

import { Container, Menu } from '@/components'
import { MobileMenu } from '@/layout/header/mobile-menu'
import { theme } from '@/styles'
import styled from 'styled-components'

export const Header = () => {
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
  color: ${theme.colors.text.dark};
  top: 0;
  right: 0;
  left: 0;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
