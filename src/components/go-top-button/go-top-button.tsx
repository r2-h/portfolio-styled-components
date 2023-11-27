import { FC, useEffect, useState } from 'react'
import { animateScroll } from 'react-scroll'

import { GoToTopIcon } from '@/assets/go-to-top'
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
  background-color: ${props => props.theme.colors.goToTopButton};
  border-radius: 4px;
  position: fixed;
  z-index: 100;
  bottom: 22px;
  right: 36px;
`
