
import { FocusEvent } from 'react';
import '../../sass/components/input.scss';

type TypeInput = 'text' | 'email' | 'password' | 'search' | 'number' | 'url' |'tel'

interface InputProps {

  placeholder?: string
  /**
   * What background color to use
  */
  backgroundColor?: string
  /**
   * Chose a border bottom line color when it has focus
  */
  borderBottomColor?: string;
  /**
   * Chose a color to change font-color
  */
  color?: string
  /**
   * Chose a defaultValue in a form when It has a default data
  */
  defaultValue?: string
  /**
   * Chose a size
  */
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  /**
   * Chose a input type
  */
  type: TypeInput;
  /**
   * Chose a value in a form to handle the state
  */
  value?: string
  /**
   * Does it prefer chose a width?
  */
  width?: string
}

export const Input = ({
  backgroundColor='#ffffff',
  borderBottomColor = '#6aff00',
  color = '#000000',
  defaultValue,
  size = 'medium',
  placeholder='',
  type,
  value,
  width,
}: InputProps) => {


  const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    e.target.style.borderBottom = `2px solid ${borderBottomColor}`;
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    e.target.style.borderBottom = '2px solid rgb(233, 233, 233)';
  };

  return (
    <input type={type}
      className={`control ${size}`}
      style={{ color, width, backgroundColor }}
      onFocus={handleFocus}
      onBlur={handleBlur}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
  )
}
