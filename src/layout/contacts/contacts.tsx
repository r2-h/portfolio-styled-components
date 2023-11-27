import { Fade } from 'react-awesome-reveal'

import { TelegramIcon } from '@/assets/telegram'
import { Container, SectionTitle, StyledText } from '@/components'
import { StyledForm } from '@/layout/contacts/styled-form'
import { Font } from '@/styles/common'
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
  padding-bottom: 280px;
  padding-top: 480px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.colors.bGround};
`
const StyledEMail = styled(StyledText)`
  display: flex;
  justify-content: center;
  font-weight: normal;
  ${Font({ Fmax: 32, Fmin: 29 })};
`
const MyTelegramIcon = styled(TelegramIcon)`
  position: absolute;
  min-height: 40px;
  min-width: 40px;
  color: ${props => props.theme.colors.textSecondary};
`
const ContactTitle = styled.a`
  margin-bottom: 80px;

  display: flex;
  justify-content: center;
  cursor: pointer;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 32px;

  @media screen and (max-width: 860px) {
    margin-left: 0;
  }

  &:hover {
    color: ${props => props.theme.colors.text};

    ${MyTelegramIcon} {
      color: ${props => props.theme.colors.text};
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
