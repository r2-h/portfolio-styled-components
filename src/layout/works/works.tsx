import { Fade } from 'react-awesome-reveal'

import { Container, SectionTitle } from '@/components'
import { SecondaryTitle } from '@/components/secondary-title'
import { Work } from '@/layout/works/work/work'
import styled from 'styled-components'

import flashcardsImg from '../../assets/flashcards.jpg'
import socialImg from '../../assets/social-network.jpg'
import todoImg from '../../assets/todo.jpg'
export const Works = () => {
  return (
    <StyledWorks id={'Projects'}>
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <SecondaryTitle>Things I’ve built so far</SecondaryTitle>
        <Wrapper>
          <Fade duration={1500}>
            <Work
              codeLink={'https://github.com/r2adler/it-inc-cards'}
              demoLink={'https://it-inc-cards.vercel.app/'}
              description={`Приложение, которое позволяет создавать и изучать карточки с вопросами и ответами. Также позволяет делиться своими наборами карточек с другими пользователями.`}
              img={flashcardsImg}
              imgTitle={'Flashcards image'}
              techStack={'TypeScript, React, Radix, RTK Query, Storybook,  React Hook Form'}
              title={'Flashcards'}
            />
            <Work
              codeLink={'https://github.com/r2adler/toDoList'}
              demoLink={'https://r2adler.github.io/toDoList'}
              description={`Приложение для управления задачами. Позволяет добавлять, редактировать, отмечать задачи, а также сортировать и устанавливать приоритеты`}
              img={todoImg}
              imgTitle={'Todolist image'}
              techStack={'TypeScript, REACT,  RTK, Formik'}
              title={'Todolist'}
            />
            <Work
              codeLink={'https://github.com/r2adler/socialNetwork'}
              demoLink={'https://r2adler.github.io/socialNetwork'}
              description={`Разработка социальной сети. Пользователи могут создавать аккаунты, добавлять друзей и обмениваться сообщениями.`}
              img={socialImg}
              imgTitle={'Social network image'}
              techStack={'TypeScript, React,  RTK, Storybook, Formik'}
              title={'Social network'}
            />
          </Fade>
        </Wrapper>
      </Container>
    </StyledWorks>
  )
}

const StyledWorks = styled.div`
  margin-bottom: 210px;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;

  @media screen and (max-width: 1429px) {
    justify-content: center;
  }
`
