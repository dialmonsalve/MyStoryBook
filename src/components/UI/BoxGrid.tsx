import { ReactNode } from "react";
import { Card } from "../Card/Card"

interface Props {
  /**
    * How much columns, do you need? 
    */
  columns?: number
  /**
    * Space among components 
    */
  gap?: number;
  /**
    * Align the content inside the box 
    */
  alignContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly';
  /**
    * Justify the items inside the box 
    */
  justifyItems?: 'start' | 'end' | 'center' | 'stretch';
  /**
    * Space inside the box 
    */
  padding?: number;
  /**
    * Margin around the box 
    */
  margin?: string;
    /**
    * Container width 
    */
  width?: number;
    /**
    * Container height 
    */
  height?: number;
  children?: ReactNode | ReactNode[]
}

export const BoxGrid = ({
  columns = 1,
  justifyItems = 'start',
  alignContent = 'start',
  margin,
  width,
  height,
  gap,
  padding
}: Props) => {

  const isMobile = window.innerWidth < 600;

  const gridTemplateColumns = isMobile ? `repeat(1, 1fr)` : `repeat(${columns}, 1fr)`;

  return (
    <div
      className="box-grid"
      style={{
        gap, padding, alignContent, gridTemplateColumns, justifyItems, margin,
        width: `${!width ? '' : width}rem`,
        height: `${!height ? '' : height}rem`,
      }}
    >
      <Card
        hasGradient
        initialBg='#131212'
        middleBg='#414b34'
        finalBg='#000000'
        degrees={120}
        height={45}
      />
      <Card
        hasGradient
        initialBg='#131212'
        middleBg='#414b34'
        finalBg='#000000'
        degrees={120}
        height={45}
      />
      <Card
        hasGradient
        initialBg='#131212'
        middleBg='#414b34'
        finalBg='#000000'
        degrees={120}
        height={45}
      />
      <Card
        hasGradient
        initialBg='#131212'
        middleBg='#414b34'
        finalBg='#000000'
        degrees={120}
        height={45}
      />

    </div>
  )
}
