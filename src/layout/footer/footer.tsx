import { useEffect, useState } from 'react'

import { Container, Menu } from '@/components'
import { theme } from '@/styles'
import styled from 'styled-components'

export const Footer = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 564

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <StyledFooter>
      <Container>
        <Wrapper>
          {width > breakpoint && <Menu menuItems={['Home', 'Tech stack', 'Projects', 'Contact']} />}
          <Copyright>© 2023 Artur Hareksian, All Rights Reserved.</Copyright>
        </Wrapper>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  margin-top: 100px;
  border: 1px solid blue;
`

const Copyright = styled.span`
  display: block;
  text-align: center;
`

const Wrapper = styled.div`
  border-top: 1px solid ${theme.colors.project.dark};
  display: flex;
  flex-wrap: wrap;
  row-gap: 25px;
  column-gap: 55px;
  justify-content: space-between;
  padding: 30px;
  color: ${theme.colors.textSecondary.dark};
  align-items: center;

  @media screen and (max-width: 1045px) {
    justify-content: center;
  }
`
