import React, {FC} from 'react';
import iconsSprite from '../../assets/images/sprite.svg'

type IconProps = {
    id: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon: FC<IconProps> = ({id, width, viewBox, height}) => {
    return (
        <svg width={width || '60px'} height={height || '60px'} viewBox={viewBox || '0 0 32 32'} fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${id}`}/>
        </svg>
    )
}
