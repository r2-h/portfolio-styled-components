import { FC, useEffect, useState } from 'react'
import { animateScroll } from 'react-scroll'

import { GoToTopIcon } from '@/assets/go-to-top'
import styled from 'styled-components'

type GoTopButtonProps = {}
export const GoTopButton: FC<GoTopButtonProps> = ({}) => {
  const [showButton, setShowButton] = useState(false)
  const [rightPosition, setRightPosition] = useState(36)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 250) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })

    window.addEventListener('resize', updateSize)
  }, [rightPosition])

  const updateSize = () => {
    setRightPosition(window.innerWidth * 0.02) // 1% of the screen width
  }

  return (
    showButton && (
      <StyledGoTopButton
        onClick={() => animateScroll.scrollToTop({ duration: 500 })}
        right={rightPosition}
      >
        <GoToTopIcon />
      </StyledGoTopButton>
    )
  )
}

interface StyledGoTopButtonProps {
  // children?: React.ReactNode
  // onClick: () => void
  right: number
}
const StyledGoTopButton = styled.button<StyledGoTopButtonProps>`
  cursor: pointer;
  height: 40px;
  width: 40px;
  background-color: ${props => props.theme.colors.navigation};
  border-radius: 4px;
  position: fixed;
  z-index: 100;
  bottom: 19px;
  right: ${props => `${props.right}px`}; // use computed right position
  path {
    fill: ${props => props.theme.colors.textSecondary};
  }
  &:hover {
    background-color: ${props => props.theme.colors.hover.navigation};
  }
`
