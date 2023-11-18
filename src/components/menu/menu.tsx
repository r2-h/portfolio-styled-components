import { FC } from 'react'

import { theme } from '@/styles'
import styled from 'styled-components'

type MenuProps = {
  menuItems: string[]
}
export const Menu: FC<MenuProps> = ({ menuItems }) => {
  return (
    <StyledMenu>
      <Ul>
        {menuItems.map((el, i) => (
          <>
            <List key={i}>
              <Link href={''}>{el}</Link>
            </List>
          </>
        ))}
      </Ul>
    </StyledMenu>
  )
}

const StyledMenu = styled.nav`
  @media ${theme.media.mobile} {
    display: none;
  }
`
const Ul = styled.ul`
  display: flex;
  gap: 40px;
`
const List = styled.li``
const Link = styled.a`
  font-size: 18px;
  font-weight: normal;
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`
