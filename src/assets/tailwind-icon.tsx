import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    height={105}
    ref={ref}
    viewBox={'0 0 32 32'}
    width={105}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <title>{'file_type_tailwind'}</title>
    <path
      d={
        'M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Z'
      }
      style={{
        fill: '#44a8b3',
      }}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const TailwindIcon = memo(ForwardRef)
