import { Container } from '@/components'
import { theme } from '@/styles'
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
  margin-top: 100px;
`

const Wrapper = styled.div`
  border-top: 1px solid ${theme.colors.project.dark};
  padding: 30px;
  color: ${theme.colors.textSecondary.dark};
`
