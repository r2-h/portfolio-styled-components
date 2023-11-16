import { FC } from 'react'

import iconsSprite from '../../assets/images/sprite.svg'

type IconProps = {
  height?: string
  id: string
  viewBox?: string
  width?: string
}

export const Icon: FC<IconProps> = ({ height, id, viewBox, width }) => {
  return (
    <svg
      fill={'none'}
      height={height || '60px'}
      viewBox={viewBox || '0 0 32 32'}
      width={width || '60px'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <use xlinkHref={`${iconsSprite}#${id}`} />
    </svg>
  )
}
