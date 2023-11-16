import { WavingHand } from '@/assets/waving-hand'
import { Container, FlexWrapper } from '@/components'
import { theme } from '@/styles'
// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components'

import myPhoto from '../../assets/my-photo.jpg'

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify={'space-between'}>
          <div>
            <FlexWrapper align={'end'} justify={'none'}>
              Hi <WavingHand />,
            </FlexWrapper>
            <Name>My name is</Name>
            <StyledName>Artur Hareksian</StyledName>
            <Developer>A web developer</Developer>
          </div>
          <PhotoWrapper>
            <Photo />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  )
}

const StyledMain = styled.div`
  min-height: 100vh;

  color: ${theme.colors.text.dark};
  display: flex;
  line-height: 70px;
  font-size: 58px;
  font-weight: 700;
  align-items: center;
`

const PhotoWrapper = styled.div`
  width: 350px;
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

const StyledName = styled.h2`
  background: linear-gradient(45deg, #13b0f5, #e70faa);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 58px;
`
const Name = styled.h2`
  font-size: 58px;
`
const Developer = styled.h1`
  font-size: 58px;
`
