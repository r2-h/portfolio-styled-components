import React from 'react';
import styled from 'styled-components';

export const Slider = () => {
    return (
        <StyledSlider>
            <Wrapper>
                <Slide>
                    <Text></Text>
                </Slide>
            </Wrapper>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
  border: 1px solid red;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

const Slide = styled.div`
  max-width: 500px;
  text-align: center;
`

const Text = styled.p`

`
const Wrapper = styled.div`
  display: flex;
`
const Pagination = styled.div`
  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 5px;
    background-color: purple;
  }
`
