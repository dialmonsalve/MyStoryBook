
interface Props {
  width?: number;
  height?: number;
  style?: 'solid' | 'double' | 'dashed' | 'dotted' | 'hidden' | 'outset'
  size?: number
  color?: string
  typeLine?: 'vertical' | 'horizontal'
}

export const Line = ({
  width = 20,
  height,
  style = 'solid',
  size = 1,
  color = 'black',
  typeLine = 'horizontal'
}: Props) => {

  const isHorizontal = typeLine === 'horizontal'


  const borderTop = `${size}px ${style} ${color}`
  const borderLeft = `${size}px ${style} ${color}`

  return (

    isHorizontal
      ?
      (<span

        style={{ width: `${width}px`, borderTop, display: 'block', height: '2px' }}
      >

      </span>)
      : (<span

        style={{ height: `${height!}px`, borderLeft, display: 'block', width: '2px' }}
      >

      </span>)

  )
}
