
interface Props {
  /**
    * Width to the line 
    */
  width?: number;
  /**
    * Height to the line 
    */
  height?: number;
  /**
    * Line style 
    */
  style?: 'solid' | 'double' | 'dashed' | 'dotted' | 'hidden' | 'outset';
  /**
    * Size line style 
    */
  size?: number;
  /**
    * Color line style 
    */
  color?: string;
  /**
    * Do you need a line horizontal or vertical? 
    */
  typeLine?: 'vertical' | 'horizontal';
}

export const Line = ({
  width = 20,
  height,
  style = 'solid',
  size = 1,
  color = 'black',
  typeLine = 'horizontal',
  ...props
}: Props) => {

  const isHorizontal = typeLine === 'horizontal';
  const borderTop = `${size}px ${style} ${color}`;
  const borderLeft = `${size}px ${style} ${color}`;

  return (
    isHorizontal
      ?
      (<span

        style={{ width: `${width}px`, borderTop, display: 'block', height: '2px' }}
        {...props}
      >

      </span>)
      : (<span

        style={{ height: `${height!}px`, borderLeft, display: 'block', width: '2px' }}
        {...props}
      >

      </span>)

  )
}
