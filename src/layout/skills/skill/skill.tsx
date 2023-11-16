import { FC, ReactNode } from 'react'

import { FlexWrapper } from '@/components'
import { theme } from '@/styles'
import styled from 'styled-components'

type SkillProps = {
  icon: ReactNode
  marginTop?: string
  title: string
}

export const Skill: FC<SkillProps> = ({ icon, marginTop, title }) => {
  return (
    <StyledSkill>
      <Div marginTop={marginTop || '0px'}>
        <FlexWrapper>{icon}</FlexWrapper>
        <SkillTitle>{title}</SkillTitle>
      </Div>
    </StyledSkill>
  )
}

const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90px;
`

const SkillTitle = styled.h3`
  max-width: 90px;
  color: ${theme.colors.textSecondary.dark};
  font-weight: normal;
  font-size: 15px;
  opacity: 0;
  text-align: center;
  margin-top: 3px;
  transition: opacity 0.3s ease-in-out;
`

type DivProps = {
  marginTop: string
}
const Div = styled.div<DivProps>`
  margin-top: ${props => props.marginTop};

  &:hover {
    ${SkillTitle} {
      opacity: 1;
      position: relative;
    }
  }
`
