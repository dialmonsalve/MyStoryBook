import { ReactNode } from 'react';
import { Anchor } from '../Anchor';

import '../../sass/components/navbar.scss'

type TypeJustifyContent =
  'flex-end' | 'space-evenly' | 'flex-start' | 'center' | 'space-around' | 'space-between'

type PositionNav = 'flex-end' | 'flex-start' | 'center'

interface Props {
  children?: ReactNode
  /**
   * Is this the principal call to action on the page?
   */
  hasBackground?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: 'blue' | 'red' | 'green';

  justifyContent?: TypeJustifyContent
  positionNav?: PositionNav
  width?: number
  device?: string
  size?: 'w-1' | 'w-2' | 'w-3' | 'w-4'
}

export const Navbar = ({
  backgroundColor = 'blue',
  device,
  justifyContent = 'flex-start',
  positionNav = 'flex-start',
  hasBackground = true,
  width,
  size='w-4',
  children
}: Props) => {

  const bg = `nav--${hasBackground ? backgroundColor : `outlined-${backgroundColor}`}`

  return (
    <div className={`normal-device ${device!}`}
      style={{ justifyContent: positionNav }}
    >

      <nav className={`nav ${bg} nav__${size}`}
        style={{ width: (`${width ? width : width!}vw`) }}
      >
        <ul className="nav__list"
          style={{ justifyContent }}
        >
          {/* {children} */}
          <Anchor
            href=""
            label='Hola'
            borderRadius='0.5rem'
            color='red'
            hasBackground={false}
          />
          <Anchor
            href=""
            label='Hola'
            marginRight='1rem'
            borderRadius='0.5rem'
            color='red'
          />
          <Anchor
            href=""
            label='Hola'
            marginRight='1rem'
            borderRadius='0.5rem'
            color='red'
          />
          <Anchor
            href=""
            label='Hola'
            marginRight='1rem'
            borderRadius='0.5rem'
            color='red'
          />
          <Anchor
            href=""
            label='Hola'
            marginRight='1rem'
            borderRadius='0.5rem'
            color='red'
            textAlign='center'
          />
          {children}

        </ul>
      </nav>
    </div>

  )

}
