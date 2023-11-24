import { ElementRef, useRef } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components'
import { theme } from '@/styles'
import emailjs from '@emailjs/browser'
import styled from 'styled-components'

export const StyledForm = () => {
  const form = useRef<ElementRef<'form'>>(null)
  const { register, setValue } = useForm()

  const sendEmail = (e: any) => {
    e.preventDefault()
    if (!form.current) {
      return
    }

    emailjs.sendForm('service_2m7727n', 'template_mv1dosg', form.current, 'bt76FHB0e7d6D4CtS').then(
      result => {
        console.log(result.text)
      },
      error => {
        console.log(error.text)
      }
    )
    e.target.reset()
  }

  return (
    <Form onSubmit={sendEmail} ref={form}>
      <Field name={'user_name'} placeholder={'name'} required />
      <Field
        name={'Email'}
        onChange={e => setValue('email', e.target.value)}
        placeholder={'email'}
        required
      />
      <input type={'hidden'} {...register('email')} />
      <Field as={'textarea'} name={'message'} placeholder={'message'} required />
      <Button>Send message</Button>
    </Form>
  )
}

const Form = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 14px auto 0;
  align-items: center;

  textarea {
    resize: none;
    height: 75px;
  }
`
const Field = styled.input`
  width: 100%;
  background-color: ${theme.colors.project.dark};
  color: ${theme.colors.text.dark};
  border: none;
  height: 30px;
  padding: 5px 15px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  border-radius: 1px;

  &::placeholder {
    text-transform: capitalize;
    color: ${theme.colors.textSecondary.dark};
    opacity: 0.5;
  }

  &:focus-visible {
    outline: 1px solid rgba(167, 167, 167, 0.5);
  }
`
