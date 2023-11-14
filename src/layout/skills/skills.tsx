import { FlexWrapper, SectionTitle } from '@/components'
import styled from 'styled-components'

import { Skill } from './skill/skill'

export const Skills = () => {
  return (
    <StyledSkillsSection>
      <SectionTitle>My Tech Stack</SectionTitle>
      <FlexWrapper justify={'space-around'} wrap={'wrap'}>
        <Skill height={'75px'} iconId={'ts'} title={'ts'} viewBox={'0 0 25 25'} width={'75px'} />
        <Skill iconId={'react'} title={'react'} />
        <Skill iconId={'css'} title={'css'} />
        <Skill iconId={'html'} title={'html'} />
        <Skill iconId={'redux'} title={'redux'} />
        <Skill iconId={'scss'} title={'scss'} />
        <Skill iconId={'storyBook'} title={'storyBook'} viewBox={'-31.5 0 319 319'} />
        <Skill iconId={'styledComponents'} title={'styledComponents'} viewBox={'0 0 38 38'} />
      </FlexWrapper>
    </StyledSkillsSection>
  )
}

const StyledSkillsSection = styled.section`
  background-color: violet;
  min-height: 100vh;
`
