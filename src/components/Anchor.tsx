
import '../sass/components/anchor.scss';

interface ButtonProps {
  /**
    * What background color to use
    */
  backgroundColor?: string;
  /**
    * Apply a border radius to the Link
    */
  borderRadius?: string;
  /**
    * Apply font color to link  
    */
  color?: string;
  /**
    * If the property is false, the element will be transparent
    */
  hasBackground?: boolean;
  /**
    * It determine the routes
    */
  href: string;
  /**
    * This is the content 
    */
  label: string;
  /**
    * Apply margin to Link
    */
  margin?: string;
  /**
    * Apply margin to bottom to the Link
    */
  marginBottom?: string;
  /**
    * Apply margin to left to the Link
    */
  marginLeft?: string;
  /**
    * Apply margin to right to the Link
    */
  marginRight?: string;
  /**
    * Apply margin to top to the Link
    */
  marginTop?: string;
  /**
    * Apply padding to Link
    */
  padding?: string;
  /**
    * How large should the Link be?
    */
  size?: 'small' | 'medium' | 'large';
  /**
    * Align the text
    */
  textAlign?: | 'center' | 'justify' | 'left' | 'right' | 'start' | 'end';
  /**
    * Optional click handler
    */
  onClick?: () => void;
}

export const Anchor = ({
  backgroundColor = 'transparent',
  borderRadius = '0',
  color = 'black',
  hasBackground = true,
  href,
  label,
  margin = '0',
  marginBottom = '0',
  marginLeft = '0',
  marginRight = '0',
  marginTop = '0',
  padding = '0px',
  size = 'medium',
  textAlign = 'left',
  ...props
}: ButtonProps) => {

  const border = `${hasBackground ? 'none' : `1px solid ${color}`}`;

  const bg = `${!hasBackground ? 'transparent' : backgroundColor}`;
  
  return (

    <li className={`item item--active`}
      style={{
        textAlign, padding, margin, marginLeft,
        marginBottom, marginTop, marginRight, borderRadius,
        border,
      }}
      {...props}
    >
      <a
        className={`item__link item__link--${size}`}
        style={{ color, backgroundColor: bg, }}
        href={href}
        {...props}
      >
        {label}
      </a>
    </li>
  )
}
