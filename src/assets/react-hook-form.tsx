import { SVGProps, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fillRule={'evenodd'}
    height={90}
    viewBox={'0 0 200 200'}
    width={90}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M157.995 8.5c10.08 0 19.206 4.087 25.812 10.692S194.5 34.924 194.5 45.003v111.994c0 10.08-4.086 19.206-10.692 25.812a36.39 36.39 0 0 1-25.813 10.691H45.005c-10.08 0-19.206-4.087-25.812-10.692S8.5 167.076 8.5 156.997V45.003c0-10.08 4.086-19.206 10.692-25.812A36.39 36.39 0 0 1 45.005 8.5z'
      }
      fill={'#ec5990'}
      stroke={'#fff'}
      strokeWidth={17}
    />
    <path
      d={
        'M133.385 51.604h-20.868c-1.53-4.766-5.981-8.001-11.009-8.001s-9.479 3.235-11.009 8.001H69.616c-8.222 0-14.887 6.632-14.887 14.813v77.177c0 8.181 6.665 14.813 14.887 14.813h63.769c8.222 0 14.887-6.632 14.887-14.813V66.417c0-8.181-6.665-14.813-14.887-14.813zM91.54 54.297a1.35 1.35 0 0 0 1.353-1.064c.886-4.046 4.486-6.932 8.648-6.932s7.762 2.885 8.648 6.932a1.35 1.35 0 0 0 1.353 1.064h7.281v8.821c0 2.231-1.818 4.04-4.06 4.04H88.305c-2.242 0-4.06-1.809-4.06-4.04v-8.821h7.294zm54.025 89.297c0 6.694-5.453 12.12-12.18 12.12H69.616c-6.727 0-12.18-5.426-12.18-12.12V66.417c0-6.694 5.453-12.12 12.18-12.12h11.923v8.821c0 3.719 3.03 6.733 6.767 6.733h26.39c3.737 0 6.767-3.015 6.767-6.733v-8.821h11.923c6.727 0 12.18 5.426 12.18 12.12v77.177zm-14.833-47.981h-23.819a1.35 1.35 0 0 0-1.353 1.347 1.35 1.35 0 0 0 1.353 1.347h23.819a1.35 1.35 0 0 0 1.353-1.347 1.35 1.35 0 0 0-1.353-1.347zm-35.186 0H71.727a1.35 1.35 0 0 0-1.353 1.347 1.35 1.35 0 0 0 1.353 1.347h23.819a1.35 1.35 0 0 0 1.353-1.347 1.35 1.35 0 0 0-1.353-1.347zm35.254 32.589h-23.886a1.35 1.35 0 0 0-1.353 1.347 1.35 1.35 0 0 0 1.353 1.347H130.8a1.35 1.35 0 0 0 1.353-1.347 1.35 1.35 0 0 0-1.353-1.347zm-35.187 0H71.727a1.35 1.35 0 0 0-1.353 1.347 1.35 1.35 0 0 0 1.353 1.347h23.886a1.35 1.35 0 0 0 1.353-1.347 1.35 1.35 0 0 0-1.353-1.347z'
      }
      fill={'#fff'}
    />
  </svg>
)

export const ReactHookFormIcon = memo(SvgComponent)
