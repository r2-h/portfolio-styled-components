import { FlexWrapper, SectionTitle } from '@/components'
import { Work } from '@/layout/works/work/work'
import styled from 'styled-components'

import projectImg from '../../assets/Rectangle 18.png'

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>Projects</SectionTitle>
      <FlexWrapper>
        <Work
          description={
            'sdsdf sdf sdf s sdf sdf sdfs sdfsdfs sfdsfs sdfsdfs fsdfsdf sdfsdfsdfs dsfsdfsdf sdfsdfsdf sdfsdf'
          }
          img={projectImg}
          imgTitle={'Social network image'}
          techStack={'TS, REACT'}
          title={'Social network'}
        />
        <Work
          description={
            'sdsdf sdf sdf s sdf sdf sdfs sdfsdfs sfdsfs sdfsdfs fsdfsdf sdfsdfsdfs dsfsdfsdf sdfsdfsdf sdfdsdf'
          }
          img={projectImg}
          imgTitle={'Social network image'}
          techStack={'TS, REACT'}
          title={'Social network'}
        />
        <Work
          description={
            'sdsdf sdf sdf s sdf sdf sdfs sdfsdfs sfdsfs sdfsdfs fsdfsdf sdfsdfsdfs dsfsdfsdf sdfsdfsdf sdfsdf'
          }
          img={projectImg}
          imgTitle={'Social network image'}
          techStack={'TS, REACT'}
          title={'Social network'}
        />
      </FlexWrapper>
    </StyledWorks>
  )
}

const StyledWorks = styled.div`
  min-height: 100vh;
  background-color: #80c9c9;
`
