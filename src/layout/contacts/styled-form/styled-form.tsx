import { Button } from '@/components'
import { theme } from '@/styles'
import styled from 'styled-components'

export const StyledForm = () => {
  return (
    <Form>
      <Field placeholder={'name'} />
      <Field placeholder={'email'} />
      <Field as={'textarea'} placeholder={'message'} />
      <Button>Send message</Button>
    </Form>
  )
}

const Form = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  align-items: center;

  textarea {
    resize: none;
    height: 150px;
  }
`
const Field = styled.input`
  width: 100%;
  background-color: ${theme.colors.project.dark};
  color: ${theme.colors.text.dark};
  border: 1px solid ${theme.colors.project.dark};
  min-height: 30px;
  padding: 7px 15px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  &::placeholder {
    text-transform: capitalize;
    color: ${theme.colors.textSecondary.dark};
    opacity: 0.5;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.textSecondary.dark};
  }
`
