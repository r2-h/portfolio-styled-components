import { SVGProps, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg fill={'none'} height={20} width={20} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={'M11.287 8.713a3.64 3.64 0 0 0-5.147 0l-2.574 2.574a3.64 3.64 0 1 0 5.147 5.147L10 15.147'}
      stroke={'#FCFCFC'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={1.667}
    />
    <path
      d={'M8.713 11.287a3.64 3.64 0 0 0 5.147 0l2.574-2.574a3.64 3.64 0 1 0-5.147-5.147L10 4.853'}
      stroke={'#FCFCFC'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={1.667}
    />
  </svg>
)

export const LinkIcon = memo(SvgComponent)
