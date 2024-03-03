import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'

import { Container, SectionTitle } from '@/components'
import { Work } from '@/layout/works/work/work'
import styled from 'styled-components'

import flashcardsImg from '../../assets/flashcards2.jpg'
import socialImg from '../../assets/social-network-icon.jpg'
import todoImg from '../../assets/todo.jpg'
export const Works = () => {
  const { i18n, t } = useTranslation()

  return (
    <StyledWorks id={i18n.language === 'en' ? 'PROJECTS' : 'ПРОЕКТЫ'}>
      <Container>
        <SectionTitle>{t('Projects')}</SectionTitle>
        <Wrapper>
          <Fade duration={1500}>
            <Work
              codeLink={'https://github.com/r2adler/it-inc-cards'}
              demoLink={'https://it-inc-cards.vercel.app/'}
              description={t(
                'An application that allows you to create and study question and answer cards. It also allows you to share your sets of cards with other users.'
              )}
              img={flashcardsImg}
              imgTitle={'Flashcards image'}
              techStack={'TypeScript, React, Radix, RTK Query, Storybook,  React Hook Form'}
              title={'Learning platform'}
            />
            <Work
              codeLink={'https://github.com/r2adler/toDoList'}
              demoLink={'https://r2adler.github.io/toDoList'}
              description={t(
                `An application for task management. Allows you to add, edit, mark tasks, as well as sort and prioritize them.`
              )}
              img={todoImg}
              imgTitle={'Todolist image'}
              techStack={'TypeScript, REACT,  RTK, Formik'}
              title={'Task tracker'}
            />
            <Work
              codeLink={'https://github.com/inc-kebab/inctagram'}
              demoLink={'https://inctagram.fun/'}
              description={t(
                `Developing a social network. Users can create accounts, add friends and exchange messages.`
              )}
              img={socialImg}
              imgTitle={'Social network image'}
              techStack={'TypeScript, React,  RTKQuery, Storybook, React Hook Form'}
              title={'Communication platform'}
            />
          </Fade>
        </Wrapper>
      </Container>
    </StyledWorks>
  )
}

const StyledWorks = styled.div`
  background-color: ${props => props.theme.colors.bGround};
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;

  @media screen and (max-width: 1429px) {
    justify-content: center;
  }
`
