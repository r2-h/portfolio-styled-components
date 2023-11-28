import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'

import { TelegramIcon } from '@/assets/telegram'
import { Container, SectionTitle, StyledText } from '@/components'
import { StyledForm } from '@/layout/contacts/styled-form'
import styled from 'styled-components'

export const Contacts = () => {
  const { i18n, t } = useTranslation()

  return (
    <StyledContacts id={i18n.language === 'en' ? 'CONTACT' : 'КОНТАКТЫ'}>
      <Container>
        <ContactContainer>
          <SectionTitle>{t('Contact')}</SectionTitle>

          <Fade duration={1500}>
            <ContactTitle href={'https://t.me/hareksian'} target={'_blank'}>
              <div>
                {t('For any questions please text me:')}
                <IconWrapper>
                  <MyTelegramIcon />
                </IconWrapper>
              </div>
            </ContactTitle>
            <StyledEMail>hareksian23@gmail.com</StyledEMail>
            <StyledForm />
          </Fade>
        </ContactContainer>
      </Container>
    </StyledContacts>
  )
}

const StyledContacts = styled.div`
  padding-bottom: 175px;
  padding-top: 175px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.colors.bGround};
`
const StyledEMail = styled(StyledText)`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.colors.textSecondary};
  font-weight: normal;
  font-size: 19px;
  margin-bottom: 20px;
`
const MyTelegramIcon = styled(TelegramIcon)`
  position: absolute;
  margin-top: 1px;
  min-height: 26px;
  min-width: 26px;
  color: ${props => props.theme.colors.textSecondary};
`
const ContactTitle = styled.a`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 22px;

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
