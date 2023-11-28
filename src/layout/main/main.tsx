import { Fade } from 'react-awesome-reveal'

import { WavingHand } from '@/assets/waving-hand'
import { Container, FlexWrapper } from '@/components'
import { StyledText } from '@/components/styled-text'
import { darkTheme } from '@/styles'
import { Font } from '@/styles/common'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

import myPhoto from '../../assets/my-photo.jpg'
export const Main = () => {
  return (
    <StyledMain id={'HOME'}>
      <Container>
        <Fade duration={1500}>
          <Wrapper>
            <div>
              <Wrapper2>
                HI <WavingHandIcon />,
              </Wrapper2>
              <Name>MY NAME IS</Name>
              <StyledName>
                ARTUR HAREKSIAN<span style={{ visibility: 'hidden' }}>is</span>
              </StyledName>
              <Developer>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    strings: ['A WEB DEVELOPER'],
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
  min-width: 400px;
  height: 400px;
  border-radius: 50%;
  transition: background 0.4s ease-in-out;
  padding: 4px;
  &:hover {
    //background: linear-gradient(45deg, rgb(81, 92, 171), rgb(118, 94, 164));
    background-color: rgb(118, 94, 164);
  }
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
  ${Font({ Fmax: 48, Fmin: 35 })};
`
const Developer = styled.h1`
  ${Font({ Fmax: 48, Fmin: 35 })};
  white-space: nowrap;
`
const Wrapper = styled(FlexWrapper)`
  gap: 50px;
  justify-content: space-between;
  flex-wrap: wrap;
  ${Font({ Fmax: 48, Fmin: 35 })};
  @media screen and (max-width: 1011px) {
    justify-content: center;
    line-height: 3rem;
  }
`
const Wrapper2 = styled.div`
  display: flex;
  line-height: 3rem;
  align-items: center;
  ${Font({ Fmax: 48, Fmin: 35 })}
  font-weight: bold;
`
const StyledName = styled(StyledText)`
  white-space: nowrap;

  ${Font({ Fmax: 48, Fmin: 35 })}
`
const WavingHandIcon = styled(WavingHand)`
  margin-bottom: 4px;
  @media ${darkTheme.media.mobile} {
    width: 48px;
    height: 48px;
  }
`
