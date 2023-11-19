import { TelegramIcon } from '@/assets/telegram'
import { Container, SectionTitle, StyledText } from '@/components'
import { StyledForm } from '@/layout/contacts/styled-form'
import { theme } from '@/styles'
import styled from 'styled-components'

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <ContactContainer>
          <SectionTitle>Contact</SectionTitle>

          <ContactTitle href={'https://t.me/hareksian'} target={'_blank'}>
            <div>
              For any questions please text me:
              <IconWrapper>
                <MyTelegramIcon />
              </IconWrapper>
            </div>
          </ContactTitle>

          <StyledEMail tabIndex={0}>r2mail1122@gmail.com</StyledEMail>
          <StyledForm />
        </ContactContainer>
      </Container>
    </StyledContacts>
  )
}

const StyledContacts = styled.div`
  padding-top: 178px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid blue;
  justify-content: center;
`
const StyledEMail = styled(StyledText)`
  display: flex;
  justify-content: center;

  font-size: 32px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(45deg, #4888ff, #cb54ff);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`
const MyTelegramIcon = styled(TelegramIcon)`
  position: absolute;
  min-height: 40px;
  min-width: 40px;
  color: ${theme.colors.textSecondary.dark};
`
const ContactTitle = styled.a`
  margin-bottom: 25px;

  display: flex;
  justify-content: center;
  cursor: pointer;
  color: ${theme.colors.textSecondary.dark};
  font-size: 32px;
  @media screen and (max-width: 860px) {
    margin-left: 0;
  }

  &:hover {
    background: linear-gradient(45deg, #13b0f5, #e70faa);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    ${MyTelegramIcon} {
      color: #7e75ff;
    }
  }
`
const IconWrapper = styled.span`
  margin: 0 35px 0 10px;
`
const ContactContainer = styled(Container)`
  max-width: 600px;
  width: 100%;
`
