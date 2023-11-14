import { Container, FlexWrapper, Menu } from '@/components'

export const Header = () => {
  return (
    <Container>
      <FlexWrapper>
        <Menu menuItems={['Home', 'Tech stack', 'Projects', 'Contact']} />
      </FlexWrapper>
    </Container>
  )
}
