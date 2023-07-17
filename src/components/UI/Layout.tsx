import { ReactNode } from "react"
import { Header } from "./Header"
import { Sidebar } from "./Sidebar"
import { BoxFlex } from "./BoxFlex"
import { Card } from "../Card/Card"

interface Props {
  children: ReactNode | ReactNode[]
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <div style={{ display: 'flex' }} >
        <Sidebar
          drawerWidth={300}
          isAnimated
        />
      </div>
      <BoxFlex
        flexDirection='row'
        margin=" 0 auto"
      >
        <Header
          drawerWidth={10}
        />
        {children}
        <BoxFlex
          gap={20}
          padding={20}
          overflowY='scroll'
          height='74vh'
          flexDirection='row'
          justifyContent="center"
        >
          <Card
            hasGradient
            initialBg='#131212'
            middleBg='#414b34'
            finalBg='#000000'
            degrees={120}
          height={45}
          width={29}
          >
          </Card>
          <Card
            hasGradient
            initialBg='#131212'
            middleBg='#414b34'
            finalBg='#000000'
            degrees={120}
          height={45}
          width={29}
          >

          </Card>
          <Card
            hasGradient
            initialBg='#131212'
            middleBg='#414b34'
            finalBg='#000000'
            degrees={120}
          height={45}
          width={29}
          >

          </Card>
          <Card
            hasGradient
            initialBg='#131212'
            middleBg='#414b34'
            finalBg='#000000'
            degrees={120}
          height={45}
          width={29}
          >
          </Card>
          <Card
            hasGradient
            initialBg='#131212'
            middleBg='#414b34'
            finalBg='#000000'
            degrees={120}
          height={45}
          width={29}
          >

          </Card>
          <Card
            hasGradient
            initialBg='#131212'
            middleBg='#414b34'
            finalBg='#000000'
            degrees={120}
          height={45}
          width={29}
          >

          </Card>
        </BoxFlex>
      </BoxFlex>
    </>
  )
}
