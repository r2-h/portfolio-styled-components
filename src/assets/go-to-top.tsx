import { SVGProps, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg fill={'none'} height={15} width={16} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={'M6.807 4.28V15h2.386V4.28l5.12 4.801L16 7.5 8 0 0 7.5l1.687 1.581 5.12-4.8Z'}
      fill={'#fff'}
    />
  </svg>
)

export const GoToTopIcon = memo(SvgComponent)
