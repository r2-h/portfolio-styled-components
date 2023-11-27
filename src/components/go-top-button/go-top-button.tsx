import { FC, useEffect, useState } from 'react'
import { animateScroll } from 'react-scroll'

import { GoToTopIcon } from '@/assets/go-to-top'
import { darkTheme } from '@/styles'
import styled from 'styled-components'

type GoTopButtonProps = {}
export const GoTopButton: FC<GoTopButtonProps> = ({}) => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 250) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  return (
    showButton && (
      <StyledGoTopButton onClick={() => animateScroll.scrollToTop({ duration: 500 })}>
        <GoToTopIcon />
      </StyledGoTopButton>
    )
  )
}

const StyledGoTopButton = styled.button`
  cursor: pointer;
  height: 40px;
  width: 40px;
  background-color: ${props => props.theme.colors.navigation};
  border-radius: 4px;
  position: fixed;
  z-index: 100;
  bottom: 18px;
  right: 340px;
  path {
    fill: ${props => props.theme.colors.textSecondary};
  }
  &:hover {
    background-color: ${props => props.theme.colors.hover.navigation};
  }
  @media screen and (max-width: 1300px) {
    right: 100px;
  }
  @media ${darkTheme.media.mobile} {
    right: 39px;
  }
`
