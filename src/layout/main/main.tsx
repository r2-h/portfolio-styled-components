import { Fade } from 'react-awesome-reveal'
import Tilt from 'react-parallax-tilt'

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
    <StyledMain id={'Home'}>
      <Container>
        <Fade duration={1500}>
          <Wrapper>
            <div>
              <Wrapper2>
                Hi <WavingHandIcon />,
              </Wrapper2>
              <Name>My name is</Name>
              <StyledName>
                Artur Hareksian<span style={{ visibility: 'hidden' }}>is</span>
              </StyledName>
              <Developer>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    strings: ['A web developer'],
                  }}
                />
              </Developer>
            </div>
            <Tilt>
              <PhotoWrapper>
                <Photo />
              </PhotoWrapper>
            </Tilt>
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
  min-width: 350px;
  height: 350px;
  border-radius: 50%;
  background: linear-gradient(45deg, #13b0f5, #e70faa);
  padding: 10px;
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
  ${Font({ Fmax: 58, Fmin: 35 })}
`
const Developer = styled.h1`
  font-size: 58px;
  white-space: nowrap;

  ${Font({ Fmax: 58, Fmin: 35 })}
`
const Wrapper = styled(FlexWrapper)`
  gap: 50px;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 1011px) {
    justify-content: center;
  }
`
const Wrapper2 = styled.div`
  display: flex;
  align-items: flex-end;
  ${Font({ Fmax: 58, Fmin: 35 })};
  @media ${darkTheme.media.mobile} {
    align-items: flex-start;
  }
`
const StyledName = styled(StyledText)`
  white-space: nowrap;
  ${Font({ Fmax: 58, Fmin: 35 })}
`
const WavingHandIcon = styled(WavingHand)`
  @media ${darkTheme.media.mobile} {
    width: 60px;
    height: 60px;
  }
`
