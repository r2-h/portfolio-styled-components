import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'

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
import { Container, SectionTitle } from '@/components'
import { Skill } from '@/layout/skills/skill'
import styled from 'styled-components'

export const Skills = () => {
  const { i18n, t } = useTranslation()

  return (
    <StyledSkillsSection id={i18n.language === 'en' ? 'TECH STACK' : 'НАВЫКИ'}>
      <Container>
        <SectionTitle>{t('My Tech Stack')}</SectionTitle>
        <Fade duration={1500}>
          <Wrapper>
            <Skill icon={<TSIcon />} marginTop={'10px'} title={'Type Script'} />
            <Skill icon={<ReactIcon />} title={'React'} />
            <Skill icon={<NextIcon />} title={'Next'} />
            <Skill icon={<HTMLIcon />} marginTop={'7px'} title={'HTML'} />
            <Skill icon={<CSSIcon />} marginTop={'7px'} title={'CSS'} />
            <Skill icon={<ReduxIcon />} title={'Redux'} />
            <Skill icon={<SCSSIcon />} title={'SCSS'} />
            <Skill icon={<StorybookIcon />} marginTop={'-10px'} title={'Storybook'} />
            <Skill icon={<StyledComponentsIcon />} marginTop={'11px'} title={'Styled Components'} />
            <Skill icon={<ReactHookFormIcon />} marginTop={'8px'} title={'React Hook Form'} />
          </Wrapper>
        </Fade>
      </Container>
    </StyledSkillsSection>
  )
}

const StyledSkillsSection = styled.section`
  padding-bottom: 175px;
  padding-top: 100px;
  background-color: ${props => props.theme.colors.bGround};
`
const Wrapper = styled.div`
  display: flex;
  row-gap: 50px;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 140px;

  @media screen and (max-width: 1143px) {
    column-gap: 90px;
  }

  @media screen and (max-width: 629px) {
    justify-content: space-around;
    column-gap: 40px;
  }
`
