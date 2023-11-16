import styled from 'styled-components'

type FlexWrapperProps = {
  align?: string
  columnGap?: string
  direction?: string
  gap?: string
  justify?: string
  rowGap?: string
  wrap?: string
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
  row-gap: ${props => props.rowGap || '0'};
  column-gap: ${props => props.columnGap || '0'};
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  gap: ${props => props.gap || '0'};
`
