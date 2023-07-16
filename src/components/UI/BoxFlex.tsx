import { ReactNode } from 'react';
import '../../sass/components/box.scss';
import { Card } from '../Card/Card';

type AlignContent =
  'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'start' | 'end' | 'baseline' | 'first baseline' | 'last baseline' | 'unsafe';

type JustifyContent =
  'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'start' | 'end' | 'left' | 'unsafe';

interface Props {
  /**
    * Align the content inside the box 
    */
  alignContent?: AlignContent;
  /**
    * Direction of the box 
    */
  flexDirection?: 'row' | 'column';
  /**
    * Justify the content inside the box 
    */
  justifyContent?: JustifyContent;
  /**
    * Space among components 
    */
  space?: number;
  children?: ReactNode | ReactNode[];
}

export const BoxFlex = ({
  alignContent = 'flex-start',
  flexDirection = 'row',
  justifyContent = 'flex-start',
  space = 20,
  children,
}: Props) => {

  const isMobile = window.innerWidth < 600;
  const selectedDirection = isMobile ? 'column' : flexDirection;
  const selectedContent = isMobile ? 'center' : alignContent;

  return (
    <div className="box-flex"
      style={{
        flexDirection: selectedDirection,
        gap: space,
        padding: space,
        alignContent: selectedContent,
        justifyContent
      }}
    >
      <Card />
      <Card />
      <Card />
      {children}
    </div>
  )
}
