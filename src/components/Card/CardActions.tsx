import { ReactNode } from 'react';
import '../../sass/components/card.scss';

type Content =
  'center' | 'flex-end' | 'flex-start' |
  'space-around' | 'space-between' | 'space-evenly'

interface Props {
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  justifyContent?: Content;
  children?: ReactNode | ReactNode[]
}

export const CardActions = ({
  alignItems = 'center',
  justifyContent = 'space-between',
  children,
  ...props }: Props) => {

  return (
    <div
      className='card__actions'
      style={{ alignItems, justifyContent }}
      {...props}
    >
      {children}
    </div>
  )
}
