import { ReactNode } from 'react';
import '../../sass/components/card.scss';

interface Props {
  children?: ReactNode | ReactNode[];
}

export const CardMedia = ({ children }: Props) => {
  return (
    <div className='card__media' >
      {children}
    </div>
  )
}
