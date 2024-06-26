import { FC } from 'react'

import { LinkIcon } from '@/assets/link'
import styled from 'styled-components'

type WorkProps = {
  codeLink: string
  demoLink?: string
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
          {demoLink && (
            <Link href={demoLink} target={'_blank'}>
              <StyledLinkIcon />
              demo
            </Link>
          )}
          <Link href={codeLink} target={'_blank'}>
            <StyledGitHubIcon />
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
  background-color: ${props => props.theme.colors.project};
  height: 570px;
  border-radius: 5px;
  filter: ${props => props.theme.colors.filter};
`
const Image = styled.img`
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  min-height: 260px;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  margin: 27px;
  height: 100%;
  color: ${props => props.theme.colors.text};
`
const Title = styled.h3`
  margin-bottom: 17px;
  font-size: 28px;
  font-weight: normal;
  text-align: center;
  color: ${props => props.theme.colors.textSecondary};
`

const Text = styled.div`
  text-align: start;
  font-size: 16px;
  color: ${props => props.theme.colors.textSecondary};
`

const TechStack = styled.div`
  margin-bottom: 20px;
  color: ${props => props.theme.colors.textSecondary};
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
  color: ${props => props.theme.colors.textSecondary};

  &:hover {
    color: ${props => props.theme.colors.hover.text};
    path {
      stroke: ${props => props.theme.colors.hover.text};
    }
  }
`
const StyledLinkIcon = styled(LinkIcon)`
  path {
    stroke: ${props => props.theme.colors.textSecondary};
  }
`
const StyledGitHubIcon = styled(LinkIcon)`
  path {
    stroke: ${props => props.theme.colors.textSecondary};
  }
`
