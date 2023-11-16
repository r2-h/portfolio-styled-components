import { Container, FlexWrapper, Menu } from '@/components'
import { theme } from '@/styles'
import styled from 'styled-components'

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper>
          <Menu menuItems={['Home', 'Tech stack', 'Projects', 'Contact']} />
        </FlexWrapper>
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
  padding: 20px 0;
`
