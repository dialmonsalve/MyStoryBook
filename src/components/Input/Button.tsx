
import '../../sass/components/button.scss';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  hasBackground?: boolean;
  /**
    * Does It use a animation?
   */
  isAnimated?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: 'blue' | 'red' | 'green';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';

  type?: 'button' | 'submit'
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */

  onClick?: () => void;

  margin?: string

  width?: number
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = 'medium',
  label,
  isAnimated = false,
  hasBackground = true,
  backgroundColor = 'blue',
  type = 'button',
  margin = '0px',
  width,
  ...props
}: ButtonProps) => {

  const bg = `btn--${hasBackground ? backgroundColor : `outlined-${backgroundColor}`}`
  const animated = isAnimated ? 'btn--animated' : ''

  return (
    <button
      type={type}
      className={`btn ${bg} btn--${size} ${animated}`}
      style={{ margin, width: `${width!}%` }}
      {...props}
    >
      {label}
    </button>
  );
};
