import { Container } from '@/components'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Wrapper>
          <span>© 2023 Artur Hareksian.</span>
        </Wrapper>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  background-color: ${props => props.theme.colors.bGround};
`

const Wrapper = styled.div`
  border-top: 1px solid ${props => props.theme.colors.line};
  padding: 30px;
`
