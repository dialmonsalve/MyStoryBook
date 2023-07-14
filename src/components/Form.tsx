import { Label } from "./Label"
import '../sass/components/form.scss'
import { Input } from "./Input/Input"
import { Button } from "./Input/Button"

interface Props {
  columns?: number;
  deg?: number
  initialBg?: string
  middleBg?: string
  finalBg?: string
  width?: number
}

export const Form = ({
  columns = 1,
  deg = 135,
  initialBg = '#2a2a2c',
  middleBg = '#827373',
  finalBg = '#000000',
  width = 100,
}: Props) => {

  const isMobile = window.innerWidth < 600
  const isTabPort = window.innerWidth > 600 && window.innerWidth < 900
  const tabLand = window.innerWidth > 900 && window.innerWidth < 1200
  const desktop = window.innerWidth > 1200 && window.innerWidth < 1800
  const bigDesktop = window.innerWidth > 1800


  const gridTemplateColumns = isMobile ? `repeat(1, 1fr)` : `repeat(${columns}, 1fr)`;
  const widthForm = isMobile ? 80 : width;

  const styles = {
    gridTemplateColumns,
    background: `
      linear-gradient(
        ${deg}deg,
         ${initialBg} 0%,
         ${middleBg} 50%,
         ${finalBg} 100%
        )
      `,
    width: `${widthForm}%`
  }


  return (
    <div 
    className="container-form"
    style={styles} >
      <Label
          label="LOGIN"
          uppercase
          size="h2"
          fontColor="white"
        />
      <form
        className="form"
        style={{gridTemplateColumns}}

      >
         
        <Label
          label="Name"
          uppercase
          size="normal"
          fontColor="white"
          alignItems="flex-end"
        />
        <Input
          type="text"
          placeholder="Name"
          size="small"
        />
        <Label
          label="Email"
          uppercase
          size="normal"
          fontColor="white"
          alignItems="flex-end"
        />
        <Input
          type="email"
          placeholder="Email"
          size="small"
        />
        <Label
          label="Password"
          uppercase
          size="normal"
          fontColor="white"
          alignItems="flex-end"
        />
        <Input
          type="password"
          placeholder="Password"
          size="small"
        />
        <Button
          label="create"
          hasBackground={false}
          backgroundColor="green"
          margin="2rem 0 0"
          isAnimated
        />
        <Button
          label="cancel"
          hasBackground={false}
          backgroundColor="red"
          margin="2rem 0 0"
        />
      </form>
    </div>
  )
}
