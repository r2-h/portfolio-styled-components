import { FlexWrapper, Logo, SectionTitle } from '@/components'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <StyledFooter>
      <SectionTitle>For any questions please mail me:</SectionTitle>
      <Text>r2mail1122@gmail.com</Text>
      <FlexWrapper justify={'center'}>
        <Logo />
        <Logo />
        <Logo />
      </FlexWrapper>
      <Copyright>© 2023 Artur Hareksian, All Rights Reserved.</Copyright>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  min-height: 200px;
`

const Text = styled.p`
  text-align: center;
`
const Copyright = styled.span`
  display: block;
  text-align: center;
`
