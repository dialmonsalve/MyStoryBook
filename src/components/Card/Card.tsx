import { MouseEvent, ReactNode } from 'react';

import { CardHead } from './CardHead';
import { CardMedia } from './CardMedia';
import { CardContent } from './CardContent';
import { CardActions } from './CardActions';

import '../../sass/components/card.scss';

interface Props {
  /**
    * If don't use background gradient, it choose the background color
    */
  background?: string;
  /**
    * If background has a gradient, this property sets its degree
    */
  degrees?: number;
  /**
    * If background has a gradient, this property sets its final color
    */
  finalBg?: string;
  /**
    * It Chooses whether it has a gradient background or not. If hasGradient=true , set: degrees, initialBg, middleBg and finalBg to define colors
    */
  hasGradient?: boolean;
  /**
    * If don't use background gradient, it choose the background hover color
    */
  hover?: string
  /**
    * If background has a gradient, this property sets its initial color
    */
  initialBg?: string;
  /**
    * define a margins on the card element
    */
  margin?: string;
  /**
    * If background has a gradient, this property sets its color to 50%
    */
  middleBg?: string;
  /**
    * Define a width on the card element
    */
  width?: number;
  /**
    * Define a height on the card element
    */
  height?: number;
  children?: ReactNode | ReactNode[];
}

export const Card = ({
  background = '#000000',
  degrees = 135,
  finalBg = '#ffffff',
  hasGradient = true,
  height = 35,
  hover = 'rgba(0,0,0,.8)',
  initialBg = ' #7a7777',
  margin = '0 auto',
  width = 30,
  middleBg = ' #d4c6c6',
  children,
  ...props
}: Props) => {

  const backgroundColor = (degrees: number) => {
    if (hasGradient) {
      return background = `linear-gradient(
          ${degrees}deg,
          ${initialBg} 0%,
          ${middleBg} 50%,
          ${finalBg} 100%
        )
      `;
    }
    return background
  }

  const handleFocus = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (hasGradient) {
      e.currentTarget.style.background = backgroundColor(-degrees * .45);
    } else {
      e.currentTarget.style.background = hover;
    }
  };

  const handleBlur = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    e.currentTarget.style.background = backgroundColor(degrees);
  };

  return (
    <div
      className='card'
      style={{
        width: `${width}rem`,
        height: `${height}rem`,
        background: backgroundColor(degrees),
        margin
      }}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      {...props}
    >
      {children}

      <CardHead >
        <div className='avatar' ></div>
        <div className='title-card' ></div>
        <div className='control-card' ></div>
      </CardHead>

      <CardMedia>
        <div className='card__media--controls' ></div>
      </CardMedia>

      <CardContent>
        <h1>Hola</h1>
        <p>Esto es una prueba</p>
        <p>Esto es una prueba</p>
        <p>Esto es una prueba</p>
      </CardContent>

      <CardActions>
        <div className='control-card' ></div>
        <div className='title-card' ></div>
      </CardActions>

    </div>
  )
}
