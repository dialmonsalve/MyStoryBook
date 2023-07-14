import { ReactNode } from 'react';
import '../../sass/components/select.scss';

interface Props {
  /**
    * Chose a background color
    */
  backgroundColor?: string;
  /**
    * Chose a font color
    */
  color?: string;
  /**
    * Chose a size
    */
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  children?: ReactNode | ReactNode[];
}

export const Select = ({
  backgroundColor = '#ffffff',
  children,
  color = '#000000',
  size = 'medium',
  ...props
}: Props) => {

  return (
    <select
      className={`select ${size}`}
      style={{ color, backgroundColor }}
      {...props}
    >
      {children}
    </select>
  )
}


