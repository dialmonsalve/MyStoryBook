
import '../sass/components/label.scss';

interface Props {
  margin?:string
  display?: 'inline' | 'inline-block' | 'block' | 'flex'
  alignItems?: 'flex-start' | 'center' | 'flex-end'
  /**
    * This is the message to show
  */
  label?: string
  /**
    * This is the size tag
  */
  size?: 'normal' | 'h1' | 'h2' | 'h3' | 'paragraph';
  /**
    * Does It want uppercase or normal font?
  */
  uppercase?: boolean

  /**
    * It chose a color font
  */
  fontColor?: string
}

export const Label = ({
  alignItems,
  display='flex',
  uppercase = false,
  label = 'no label',
  size = 'normal',
  fontColor = '#000000',
}: Props) => {

  return (
    <span
      className={`label ${size}`}
      style={{ color: fontColor, display,  alignItems }}
    >
      {uppercase ? label.toUpperCase() : label}
    </span>
  )
}
