import { ReactNode } from 'react';
import { Label } from './Label';
import '../sass/components/form.scss';

interface Props {
  /**
    * Font color for the title form
    */
  color: string;
  /**
    * How much columns, do you need? 
    */
  columns?: number;
  /**
    * Background has a gradient, this property sets its degree
    */
  degree?: number;
  /**
    * Background has a gradient, this property sets its initial color
    */
  initialBg?: string;
  /**
    * Background has a gradient, this property sets its color to 50%
    */
  middleBg?: string;
  /**
    * Background has a gradient, this property sets its final color
    */
  finalBg?: string;
  /**
    * Title for the form
    */
  title?: string;
  /**
    * It defines a width on the parent element 
    */
  width?: number;
  children?: ReactNode | ReactNode[];
}

export const Form = ({
  color,
  columns = 1,
  degree = 135,
  initialBg = '#2a2a2c',
  middleBg = '#827373',
  finalBg = '#000000',
  title,
  width = 100,
  children,
  ...props
}: Props) => {

  const isMobile = window.innerWidth < 600;
  // const isTabPort = window.innerWidth > 600 && window.innerWidth < 900;
  // const tabLand = window.innerWidth > 900 && window.innerWidth < 1200;
  // const desktop = window.innerWidth > 1200 && window.innerWidth < 1800;
  // const bigDesktop = window.innerWidth > 1800;


  const gridTemplateColumns = isMobile ? `repeat(1, 1fr)` : `repeat(${columns}, 1fr)`;
  const widthForm = isMobile ? 80 : width;

  const styles = {
    gridTemplateColumns,
    background: `
      linear-gradient(
        ${degree}deg,
         ${initialBg} 0%,
         ${middleBg} 50%,
         ${finalBg} 100%
        )
      `,
    width: `${widthForm}%`
  };

  return (
    <div
      className='container-form'
      style={styles} >
      <Label
        label={title}
        uppercase
        size='h3'
        fontColor={color}
      />
      <form
        className='form'
        style={{ gridTemplateColumns }}
        {...props}
      >
        {children}

      </form>
    </div>
  )
}
