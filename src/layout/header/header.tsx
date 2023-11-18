import { ThemeIcon } from '@/assets/them-icon'
import { Container, Menu } from '@/components'
import { MobileMenu } from '@/layout/header/mobile-menu'
import { theme } from '@/styles'
import styled from 'styled-components'

export const Header = () => {
  const menuItems = ['Home', 'Tech stack', 'Projects', 'Contact']

  return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <IconWrapper>
            <MyThemeIcon />
          </IconWrapper>

          <Menu menuItems={menuItems} />
          <MobileMenu menuItems={menuItems} />
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
  padding: 20px 0;
`
const IconWrapper = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
`
const MyThemeIcon = styled(ThemeIcon)`
  width: 35px;
  height: 35px;
  color: #a2d9ff;
  //  #7e75ff
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
