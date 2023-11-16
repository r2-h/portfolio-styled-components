import { CSSIcon } from '@/assets/css'
import { HTMLIcon } from '@/assets/html'
import { NextIcon } from '@/assets/next'
import { ReactIcon } from '@/assets/react'
import { ReactHookFormIcon } from '@/assets/react-hook-form'
import { ReduxIcon } from '@/assets/redux'
import { SCSSIcon } from '@/assets/scss'
import { StorybookIcon } from '@/assets/storybook'
import { StyledComponentsIcon } from '@/assets/styled-components'
import { TSIcon } from '@/assets/ts'
import { Container, FlexWrapper, SectionTitle } from '@/components'
import { SecondaryTitle } from '@/components/secondary-title'
import { Skill } from '@/layout/skills/skill'
import styled from 'styled-components'

export const Skills = () => {
  return (
    <StyledSkillsSection>
      <Container>
        <SectionTitle>My Tech Stack</SectionTitle>
        <SecondaryTitle>Technologies I’ve been working with recently</SecondaryTitle>

        <FlexWrapper
          gap={'30px'}
          justify={'space-between'}
          style={{ columnGap: 140, display: 'flex' }}
          wrap={'wrap'}
        >
          <Skill icon={<TSIcon />} marginTop={'10px'} title={'Type Script'} />
          <Skill icon={<ReactIcon />} title={'React'} />
          <Skill icon={<HTMLIcon />} title={'HTML'} />
          <Skill icon={<CSSIcon />} title={'CSS'} />
          <Skill icon={<ReduxIcon />} title={'Redux'} />
          <Skill icon={<SCSSIcon />} title={'SCSS'} />
          <Skill icon={<StorybookIcon />} marginTop={'-10px'} title={'Storybook'} />
          <Skill icon={<StyledComponentsIcon />} marginTop={'11px'} title={'Styled Components'} />
          <Skill icon={<NextIcon />} title={'Next'} />
          <Skill icon={<ReactHookFormIcon />} title={'React Hook Form'} />
        </FlexWrapper>
      </Container>
    </StyledSkillsSection>
  )
}

const StyledSkillsSection = styled.section`
  margin-bottom: 210px;
`
