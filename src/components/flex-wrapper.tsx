import styled from 'styled-components'

type FlexWrapperProps = {
  align?: string
  direction?: string
  justify?: string
  wrap?: string
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
`
