import { ElementRef, useRef } from 'react'
import { useTranslation } from 'react-i18next'

import { ButtonWithIcon } from '@/components/button-with-icon'
import emailjs from '@emailjs/browser'
import styled from 'styled-components'

export const StyledForm = () => {
  const { t } = useTranslation()

  const form = useRef<ElementRef<'form'>>(null)

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
      <Field name={'name'} placeholder={t('Name')} required />

      <Field
        autoComplete={'email'}
        name={'email'}
        placeholder={t('Email')}
        required
        type={'email'}
      />

      <Field as={'textarea'} name={'message'} placeholder={t('Message')} required />

      <ButtonWithIcon type={'submit'}>{t('send message')}</ButtonWithIcon>
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
  background-color: ${props => props.theme.colors.project};
  color: ${props => props.theme.colors.text};
  border: none;
  height: 35px;
  padding: 5px 15px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  border-radius: 1px;
  filter: ${props => props.theme.colors.filter};

  &::placeholder {
    text-transform: capitalize;
    color: ${props => props.theme.colors.textSecondary};
    opacity: 0.5;
  }

  &:focus-visible {
    outline: 1px solid rgba(167, 167, 167, 0.5);
  }
`
