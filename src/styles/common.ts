type FontProps = {
  Fmax: number
  Fmin: number
}
export const Font = ({ Fmax, Fmin }: FontProps) => `
font-size: calc((100vw - 360px) / (1700 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px )
`
