
import '../sass/components/anchor.scss';

interface ButtonProps {
  /**
   * It determine the routes
   */
  href: string;
  /**
   * If the property is false, the element will be transparent
   */
  hasBackground?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the Link be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * This is the content 
   */
  label: string;
  /**
   * Align the text
   */
  textAlign?: | 'center' | 'justify' | 'left' | 'right' | 'start' | 'end'
  // justifyContent?: 'center' | 'flex-start' | 'flex-end'
  padding?: string
  margin?: string
  marginLeft?: string
  marginTop?: string
  marginRight?: string
  marginBottom?: string
  borderRadius?: string
  color?: string
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
  // justifyContent = 'flex-start',
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

  const border = `${hasBackground ? 'none' : `1px solid ${color}`}`

  const bg = `${!hasBackground ? 'transparent' : backgroundColor}`
  return (


    <li className={`item item--active`}
      style={{
        textAlign, padding, margin, marginLeft,
        marginBottom, marginTop, marginRight, borderRadius,
        border,
      }}
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
