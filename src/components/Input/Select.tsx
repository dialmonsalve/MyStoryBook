import { ReactNode } from 'react';
// import '../sass/components/input.scss'
import '../../sass/components/select.scss'

interface Props {
  backgroundColor?: string;
  color?: string
  children?: ReactNode | ReactNode[]
  /**
   * Chose a size
  */
    size?: 'small' | 'medium' | 'large' | 'extraLarge';
}

export const Select = ({
  backgroundColor= '#ffffff',
  children,
  color='#000000',
  size='medium'
}:Props) => {
  return (
    <select 
    name="" 
    id=""
    className={`select ${size}`}
    style={{color, backgroundColor}}
    >
      {children}
    </select>
  )
}


