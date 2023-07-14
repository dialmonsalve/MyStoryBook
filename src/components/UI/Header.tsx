import { ReactNode } from 'react';
import '../../sass/components/header.scss';

type Content =
  'center' | 'flex-end' | 'flex-start' |
  'space-around' | 'space-between' | 'space-evenly'

interface Props {
  backgroundColor?: string
  drawerWidth?: number
  space?: number
  justifyContent?: Content
  alignContent?: Content
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  padding?: string
  borderRadius?: string
  children?: ReactNode
}

export const Header = ({
  alignContent = 'flex-start',
  backgroundColor = 'white',
  borderRadius = '1rem',
  children,
  drawerWidth = 240,
  flexWrap = 'nowrap',
  justifyContent = 'flex-start',
  padding = '2rem',
  space = 1,
}: Props) => {

  if (space < -24) space = -24;

  const finalSpace = 100 - space

  return (
    <header className="header"
      style={{
        backgroundColor, width: `calc(${finalSpace}% - ${drawerWidth}px)`, justifyContent, flexWrap, alignContent, padding, borderRadius
      }}
    >
      {children}
    </header>
  )
}
