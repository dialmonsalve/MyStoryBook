
import '../../sass/components/button.scss';

interface ButtonProps {
  /**
    * What background color to use?
    */
  backgroundColor?: 'blue' | 'red' | 'green';
  /**
    * If the property is false, the button element will be transparent
    */
  hasBackground?: boolean;
  /**
    * Does It use a animation?
    */
  isAnimated?: boolean;
  /**
    * Label button contents
    */
  label: string;
  /**
    * Apply margin to button
    */
  margin?: string
  /**
    * How large should the button be?
    */
  size?: 'small' | 'medium' | 'large';
  /**
    * Button could be submit
    */
  type?: 'button' | 'submit';
  /**
    * Width to the button 
    */
  width?: number;
  /**
    * Optional click handler
    */
  onClick?: () => void;
}

export const Button = ({
  backgroundColor = 'blue',
  hasBackground = true,
  isAnimated = false,
  label,
  margin = '0px',
  size = 'medium',
  type = 'button',
  width,
  ...props
}: ButtonProps) => {

  const bg = `btn--${hasBackground ? backgroundColor : `outlined-${backgroundColor}`}`;
  const animated = isAnimated ? 'btn--animated' : '';

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
