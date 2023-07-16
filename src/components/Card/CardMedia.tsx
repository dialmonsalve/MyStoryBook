import { ReactNode } from 'react';
import '../../sass/components/card.scss';

interface Props {
  children?: ReactNode | ReactNode[];
  color?: string
}

export const CardMedia = ({ color = 'white', children }: Props) => {
  return (
    <div
      className='card__media'
      style={{ color }}
    >

      {children}
    </div>
  )
}
