import { Button, SectionTitle } from '@/components'
import styled from 'styled-components'

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contact</SectionTitle>
      <StyledForm>
        <Field placeholder={'name'} />
        <Field placeholder={'email'} />
        <Field as={'textarea'} placeholder={'text'} />
        <Button>Send message</Button>
      </StyledForm>
    </StyledContacts>
  )
}

const StyledContacts = styled.div`
  background-color: #e5ffe5;
  min-height: 50vh;
`
const StyledForm = styled.form`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0 auto;
`
const Field = styled.input``
