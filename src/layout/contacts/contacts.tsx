import { TelegramIcon } from '@/assets/telegram'
import { SectionTitle, StyledText } from '@/components'
import { StyledForm } from '@/layout/contacts/styled-form'
import { theme } from '@/styles'
import styled from 'styled-components'

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contact</SectionTitle>

      <ContactTitle href={'https://t.me/hareksian'} target={'_blank'}>
        For any questions please text me: <MyTelegramIcon />
      </ContactTitle>

      <StyledEMail tabIndex={0}>r2mail1122@gmail.com</StyledEMail>
      <StyledForm />
    </StyledContacts>
  )
}

const StyledContacts = styled.div`
  padding-top: 178px;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const StyledEMail = styled(StyledText)`
  text-align: center;
  font-size: 32px;
  cursor: pointer;
`
const MyTelegramIcon = styled(TelegramIcon)`
  height: 40px;
  width: 40px;
  color: ${theme.colors.textSecondary.dark};
`
const ContactTitle = styled.a`
  margin-bottom: 25px;
  cursor: pointer;
  color: ${theme.colors.textSecondary.dark};
  font-size: 32px;
  display: flex;
  gap: 7px;
  align-items: center;
  &:hover {
    ${MyTelegramIcon} {
      color: #7e75ff;
    }
  }
`
