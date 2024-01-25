import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'

import { WavingHand } from '@/assets/waving-hand'
import { Container, FlexWrapper } from '@/components'
import { StyledText } from '@/components/styled-text'
import { darkTheme } from '@/styles'
import { Font } from '@/styles/common'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

import myPhoto from '../../assets/images/my-photo.jpg'
export const Main = () => {
  const { i18n, t } = useTranslation()

  return (
    <StyledMain id={i18n.language === 'en' ? 'HOME' : 'ГЛАВНАЯ'}>
      <Container>
        <Fade duration={1500}>
          <Wrapper>
            <div>
              <Wrapper2>
                {t('HI')} <WavingHandIcon />,
              </Wrapper2>
              <Name>{t('MY NAME IS')}</Name>
              <StyledName>
                {t('ARTUR HAREKSIAN')}
                <span style={{ visibility: 'hidden' }}>
                  {i18n.language === 'en' ? 'i' : 'iiui'}
                </span>
              </StyledName>
              <Developer>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    strings: t('A WEB DEVELOPER'),
                  }}
                />
              </Developer>
            </div>

            <PhotoWrapper>
              <Photo />
            </PhotoWrapper>
          </Wrapper>
        </Fade>
      </Container>
    </StyledMain>
  )
}

const StyledMain = styled.div`
  min-height: 100vh;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.bGround};
  display: flex;
  line-height: 70px;
  font-size: 58px;
  font-weight: 700;
  align-items: center;
`

const PhotoWrapper = styled.div`
  min-width: 340px;
  height: 340px;
  border-radius: 50%;
  transition: background 0.4s ease-in-out;
  padding: 4px;

  @media ${darkTheme.media.mobile} {
    min-width: 330px;
    height: 330px;
  }
`
const Photo = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${myPhoto});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
`

const Name = styled.h2`
  ${Font({ Fmax: 45, Fmin: 33 })};
`
const Developer = styled.h1`
  ${Font({ Fmax: 45, Fmin: 33 })};
  white-space: nowrap;
`
const Wrapper = styled(FlexWrapper)`
  gap: 50px;
  justify-content: space-between;
  flex-wrap: wrap;
  ${Font({ Fmax: 45, Fmin: 33 })};
  @media screen and (max-width: 1011px) {
    justify-content: center;
    line-height: 3rem;
  }
`
const Wrapper2 = styled.div`
  display: flex;
  line-height: 3rem;
  align-items: center;
  ${Font({ Fmax: 45, Fmin: 33 })}
  font-weight: bold;
`
const StyledName = styled(StyledText)`
  white-space: nowrap;
  ${Font({ Fmax: 45, Fmin: 33 })}
`
const WavingHandIcon = styled(WavingHand)`
  margin-bottom: 4px;
  @media ${darkTheme.media.mobile} {
    width: 48px;
    height: 48px;
  }
`
