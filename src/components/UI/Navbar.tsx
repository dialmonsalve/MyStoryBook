import { ReactNode } from 'react';

import '../../sass/components/navbar.scss';

type TypeJustifyContent =
  'flex-end' | 'space-evenly' | 'flex-start' | 'center' | 'space-around' | 'space-between';

type PositionNav = 'flex-end' | 'flex-start' | 'center';

interface Props {
  /**
    * What background color to use
    */
  backgroundColor?: 'blue' | 'red' | 'green';
  /**
    * Is this the principal call to action on the page?
    */
  hasBackground?: boolean;
  /**
    * Justify the content in the navbar
    */
  justifyContent?: TypeJustifyContent;
  /**
    * Navigation Position  
    */
  positionNav?: PositionNav;
  /**
    * Size Position  
    */
  size?: 'w-1' | 'w-2' | 'w-3' | 'w-4';
  /**
    * Width Position  
    */
  width?: number;
  device?: string;
  children?: ReactNode
}

export const Navbar = ({
  backgroundColor = 'blue',
  device,
  hasBackground = true,
  justifyContent = 'flex-start',
  positionNav = 'flex-start',
  size = 'w-4',
  width,
  children
}: Props) => {

  const bg = `nav--${hasBackground ? backgroundColor : `outlined-${backgroundColor}`}`;

  return (
    <div className={`normal-device ${device!}`}
      style={{ justifyContent: positionNav }}
    >

      <nav className={`nav ${bg} nav__${size}`}
        style={{ width: (`${width ? width : width!}vw`) }}
      >
        <ul className='nav__list'
          style={{ justifyContent }}
        >
          {children}

        </ul>
      </nav>
    </div>
  )
}
