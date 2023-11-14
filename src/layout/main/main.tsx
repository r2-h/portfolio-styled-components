import { WavingHand } from '@/assets/waving-hand'
import { Container, FlexWrapper } from '@/components'
// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components'

import myPhoto from '../../assets/my-photo.jpg'

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={'center'} justify={'space-between'}>
          <div>
            <FlexWrapper align={'center'}>
              <span>Hi</span> <WavingHand />,
            </FlexWrapper>
            <div>My name is</div>
            <StyledSpan>Artur Hareksian</StyledSpan>
            <h1>A web developer</h1>
          </div>
          <Photo alt={'my photo'} src={myPhoto} />
        </FlexWrapper>
      </Container>
    </StyledMain>
  )
}

const Photo = styled.img`
  width: 300px;
  height: 450px;
  object-fit: cover;
`

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: green;
`
const StyledSpan = styled.h2`
  background: linear-gradient(45deg, #13b0f5, #e70faa);
  font-weight: 700;
  font-size: 30px;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  line-height: 22px;
`
