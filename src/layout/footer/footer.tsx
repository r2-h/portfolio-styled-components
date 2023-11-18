import { Container, Menu } from '@/components'
import { theme } from '@/styles'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        {/*<Board />*/}
        <Wrapper>
          <Menu menuItems={['Home', 'Tech stack', 'Projects', 'Contact']} />
          <Copyright>© 2023 Artur Hareksian, All Rights Reserved.</Copyright>
        </Wrapper>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  margin-top: 100px;
`

const Copyright = styled.span`
  display: block;
  text-align: center;
`

const Wrapper = styled.div`
  border-top: 1px solid ${theme.colors.project.dark};
  display: flex;
  justify-content: space-between;
  height: 130px;
  color: ${theme.colors.textSecondary.dark};
  align-items: center;
`
