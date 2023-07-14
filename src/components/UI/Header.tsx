import { ReactNode } from 'react';
import '../../sass/components/header.scss';

type Content =
  'center' | 'flex-end' | 'flex-start' |
  'space-around' | 'space-between' | 'space-evenly'

interface Props {
  /**
   * Align the content in the header
   */
  alignContent?: Content;
  /**
    * What background color to use
    */
  backgroundColor?: string;
  /**
    * Apply a border radius to the header
    */
  borderRadius?: string;
  /**
    * How large should the header be?
    */
  drawerWidth?: number;
  /**
   * Wraps the content of the header
   */
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  /**
   * Justify the content in the header
  */
  justifyContent?: Content;
  /**
    * Apply padding to header
    */
  padding?: string;
  /**
   * How much space should be between the sidebar and the header?
  */
  space?: number;
  children?: ReactNode;
}

export const Header = ({
  alignContent = 'flex-start',
  backgroundColor = 'white',
  borderRadius = '1rem',
  drawerWidth = 240,
  flexWrap = 'nowrap',
  justifyContent = 'flex-start',
  padding = '2rem',
  space = 1,
  children,
  ...props
}: Props) => {

  if (space < -24) space = -24;

  const finalSpace = 100 - space;

  return (
    <header
      className='header'
      style={{
        backgroundColor, width: `calc(${finalSpace}% - ${drawerWidth}px)`, justifyContent, flexWrap, alignContent, padding, borderRadius
      }}
      {...props}
    >
      {children}
    </header>
  )
}
