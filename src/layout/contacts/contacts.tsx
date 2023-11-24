import { Fade } from 'react-awesome-reveal'

import { TelegramIcon } from '@/assets/telegram'
import { Container, SectionTitle, StyledText } from '@/components'
import { StyledForm } from '@/layout/contacts/styled-form'
import { theme } from '@/styles'
import styled from 'styled-components'

export const Contacts = () => {
  return (
    <StyledContacts id={'Contact'}>
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

          <Fade duration={1500}>
            <StyledEMail>r2mail1122@gmail.com</StyledEMail>
            <StyledForm />
          </Fade>
        </ContactContainer>
      </Container>
    </StyledContacts>
  )
}

const StyledContacts = styled.div`
  margin-top: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-bottom: 210px;
`
const StyledEMail = styled(StyledText)`
  display: flex;
  justify-content: center;
  font-size: 32px;
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
    color: ${theme.colors.text.dark};

    ${MyTelegramIcon} {
      color: ${theme.colors.text.dark};
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
