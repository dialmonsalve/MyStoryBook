import { ReactNode } from 'react';
import '../../sass/components/box.scss';

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
  gap?: number;
  padding?: number;
  margin?: string
  overflowY?: 'auto' | 'scroll' | 'hidden'
  height?: string
  children?: ReactNode | ReactNode[];
}

export const BoxFlex = ({
  alignContent = 'flex-start',
  flexDirection,
  justifyContent = 'flex-start',
  gap = 20,
  padding,
  margin = '2rem 0',
  overflowY = 'auto',
  height,
  children,
}: Props) => {

  const isMobile = window.innerWidth < 600;
  const selectedContent = isMobile ? 'center' : alignContent;


  return (
    <div className="box-flex"
      style={{
        alignContent: selectedContent,
        flexDirection,
        gap,
        justifyContent,
        margin,
        padding,
        overflowY,
        height,
      }}
    >
      {children}
    </div>
  )
}
