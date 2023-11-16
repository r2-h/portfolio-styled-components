import { Container, FlexWrapper, SectionTitle } from '@/components'
import { SecondaryTitle } from '@/components/secondary-title'
import { Work } from '@/layout/works/work/work'
import styled from 'styled-components'

import flashcardsImg from '../../assets/flashcards.jpg'
import socialImg from '../../assets/social-network.jpg'
import todoImg from '../../assets/todo.jpg'

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <SecondaryTitle>Things I’ve built so far</SecondaryTitle>
        <FlexWrapper align={'center'} justify={'space-between'}>
          <Work
            codeLink={'https://github.com/r2adler/it-inc-cards'}
            demoLink={'https://it-inc-cards.vercel.app/'}
            description={`Приложение, которое позволяет создавать и изучать карточки с вопросами и ответами. Это удобный инструмент для изучения любых тем. Приложение также позволяет делиться своими наборами карточек с другими пользователями.`}
            img={flashcardsImg}
            imgTitle={'Flashcards image'}
            techStack={'TypeScript, React, RTK Query, Storybook,  React Hook Form'}
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
        </FlexWrapper>
      </Container>
    </StyledWorks>
  )
}

const StyledWorks = styled.div``
