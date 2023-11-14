import { FC } from 'react'

import styled from 'styled-components'

type WorkProps = {
  description: string
  img: string
  imgTitle: string
  techStack: string
  title: string
}
export const Work: FC<WorkProps> = ({ description, img, imgTitle, techStack, title }) => {
  return (
    <StyledWork>
      <Image alt={imgTitle} src={img} />
      <Title>{title}</Title>
      <Text>{description}</Text>
      <TechStack>Tech stack: {techStack}</TechStack>
      <Link href={'#'}>demo</Link>
      <Link href={'#'}>code</Link>
    </StyledWork>
  )
}

const StyledWork = styled.div`
  max-width: 373px;
  width: 100%;
  object-fit: cover;
`
const Image = styled.img`
  height: 260px;
`
const Title = styled.h3``
const TechStack = styled.div``

const Link = styled.a``
const Text = styled.div``
