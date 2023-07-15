import { ReactNode } from 'react';
import '../../sass/components/card.scss';

interface Props {
  children?: ReactNode | ReactNode[];
}

export const CardContent = ({ children }: Props) => {

  return (
    <div className='card__content' >
      <div className='card__content--controls' >
        {children}
      </div>
    </div>

  )
}
