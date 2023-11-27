import { useTranslation } from 'react-i18next'

import { Container } from '@/components'
import { GoTopButton } from '@/components/go-top-button/go-top-button'
import styled from 'styled-components'
export const Footer = () => {
  const { t } = useTranslation()

  return (
    <StyledFooter>
      <Container>
        <Wrapper>
          <span>{t('© 2023 Артур Харексян.')}</span>
          <GoTopButton />
        </Wrapper>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  background-color: ${props => props.theme.colors.bGround};
`

const Wrapper = styled.div`
  border-top: 1px solid ${props => props.theme.colors.line};
  padding: 30px 0;
`
