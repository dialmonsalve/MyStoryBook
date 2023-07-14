
import '../sass/components/label.scss';

interface Props {
  /**
    * How should the items be lined up?
    */
  alignItems?: 'flex-start' | 'center' | 'flex-end';
  /**
    * How must be the container?
    */
  display?: 'inline' | 'inline-block' | 'block' | 'flex';
  /**
    * It chose a color font
    */
  fontColor?: string;
  /**
    * Width to the button 
    */
  margin?: string;
  /**
    * This is the message to show
    */
  label?: string;
  /**
    * This is the size tag
    */
  size?: 'normal' | 'h1' | 'h2' | 'h3' | 'paragraph';
  /**
    * Does It want uppercase or normal font?
    */
  uppercase?: boolean;
}

export const Label = ({
  alignItems,
  display = 'flex',
  fontColor = '#000000',
  label = 'no label',
  size = 'normal',
  uppercase = false,
  ...props
}: Props) => {

  return (
    <span
      className={`label ${size}`}
      style={{ color: fontColor, display, alignItems }}
      {...props}
    >
      {uppercase ? label.toUpperCase() : label}
    </span>
  )
}
