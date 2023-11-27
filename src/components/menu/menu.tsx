import { FC } from 'react'
import { Link } from 'react-scroll'

import styled from 'styled-components'

type MenuProps = {
  className?: string
  menuItems: string[]
}
export const Menu: FC<MenuProps> = ({ menuItems }) => {
  return (
    <StyledMenu>
      <Ul>
        {menuItems.map((el, i) => (
          <>
            <List key={i}>
              <MyLink
                activeClass={'active'}
                duration={350}
                isDynamic
                offset={el === 'Contact' ? 300 : -100}
                smooth
                spy
                to={el}
              >
                {el}
              </MyLink>
            </List>
          </>
        ))}
      </Ul>
    </StyledMenu>
  )
}

const StyledMenu = styled.nav`
  background-color: ${props => props.theme.colors.navigation};
  padding: 10px 10px;
  border-radius: 4px;
  color: ${props => props.theme.colors.textSecondary};
`
const Ul = styled.ul`
  display: flex;
  gap: 40px;
`
const List = styled.li``
const MyLink = styled(Link)`
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.hover.text};
  }
  &.active {
    color: ${props => props.theme.colors.accent};
  }
`
