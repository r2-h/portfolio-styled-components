import { FC } from 'react'

import { GitHubIcon } from '@/assets/github'
import { LinkIcon } from '@/assets/link'
import { theme } from '@/styles'
import styled from 'styled-components'

type WorkProps = {
  codeLink: string
  demoLink: string
  description: string
  img: string
  imgTitle: string
  techStack: string
  title: string
}
export const Work: FC<WorkProps> = ({
  codeLink,
  demoLink,
  description,
  img,
  imgTitle,
  techStack,
  title,
}) => {
  return (
    <StyledWork>
      <Image alt={imgTitle} src={img} />
      <Wrapper>
        <Title>{title}</Title>
        <Text>{description}</Text>
        <TechStack>Tech stack: {techStack}</TechStack>
        <LinkWrapper>
          <Link href={demoLink} target={'_blank'}>
            <LinkIcon />
            demo
          </Link>
          <Link href={codeLink} target={'_blank'}>
            <GitHubIcon />
            code
          </Link>
        </LinkWrapper>
      </Wrapper>
    </StyledWork>
  )
}

const StyledWork = styled.div`
  display: flex;
  flex-direction: column;
  width: 373px;
  background-color: ${theme.colors.project.dark};
  height: 570px;
  border-radius: 20px;
`
const Image = styled.img`
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  min-height: 260px;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  margin: 27px;
  height: 100%;
`
const Title = styled.h3`
  margin-bottom: 17px;
  font-size: 28px;
  font-weight: normal;
  text-align: center;
`

const Text = styled.div`
  text-align: start;
  font-size: 16px;
`

const TechStack = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  text-align: start;
`
const LinkWrapper = styled.div`
  display: flex;
  font-size: 16px;
  justify-content: space-between;
`

const Link = styled.a`
  display: flex;
  gap: 5px;
  text-decoration: underline;
`
