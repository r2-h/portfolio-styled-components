import { FC } from 'react'

import { Icon } from '@/components'
import styled from 'styled-components'

type SkillProps = {
  height?: string
  iconId: string
  title: string
  viewBox?: string
  width?: string
}

export const Skill: FC<SkillProps> = ({ height, iconId, title, viewBox, width }) => {
  return (
    <StyledSkill>
      {/*<TSLogo/>*/}
      <Icon height={height} id={iconId} viewBox={viewBox} width={width} />
      <SkillTitle>{title}</SkillTitle>
    </StyledSkill>
  )
}

const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
`
const SkillTitle = styled.h3``
