import { Anchor } from '../Anchor';
import '../../sass/components/sidebar.scss';
import { ReactNode, useState } from 'react';

interface Props {
  /**
    * What background color to use?
    */
  backgroundColor?: string;
  /**
    * How large should the sidebar be?
    */
  drawerWidth?: number;
  /**
    * To animate sidebar property must be true
    */
  isAnimated?: boolean;
  children?: ReactNode;
}

export const Sidebar = ({
  backgroundColor = '#221c1c',
  drawerWidth = 300,
  isAnimated = false,
  children,
}: Props) => {

  const [toggleSidebar, setToggleSidebar] = useState(false);

  const initial = `${isAnimated ? 'animation-sidebar' : 'sidebar'}`;
  const animation = `${isAnimated ? 'animation-hide-sidebar' : 'hide-sidebar'}`;

  const onToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  }

  return (
    <>
      <nav className={`${initial} ${toggleSidebar ? '' : `${animation}`} `}
        style={{ backgroundColor, width: `${drawerWidth}px` }}
      >
        <ul className='sidebar__container'>
          <Anchor
            href=''
            label='Hola'
            color='white'
            padding='5px'
            borderRadius='1rem'
          />
          <Anchor
            href=''
            label='Hola'
            color='white'
            padding='5px'
            borderRadius='1rem'
          />

          {children}
        </ul>
        <div
          className={`menu ${toggleSidebar ? '' : 'menu-hide'}`}
          onClick={onToggleSidebar}
          style={{ left: `calc(-2rem + ${drawerWidth}px)` }}
        ></div>
      </nav>
    </>
  )
}
