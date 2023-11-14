import { FC } from 'react'

import styled from 'styled-components'

type MenuProps = {
  menuItems: string[]
}
export const Menu: FC<MenuProps> = ({ menuItems }) => {
  return (
    <StyledMenu>
      <ul>
        {menuItems.map((el, i) => (
          <li key={i}>
            <a href={''}>{el}</a>
          </li>
        ))}
      </ul>
    </StyledMenu>
  )
}

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 40px;

    li {
      a {
        text-decoration: none;

        &:visited {
          color: inherit;
        }
      }
    }
  }
`
