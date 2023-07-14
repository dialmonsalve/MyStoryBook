import { Header } from "./Header"
import { Sidebar } from "./Sidebar"

export const Layout = () => {
  return (
    <div style={{ display: 'flex' }} >
      <Sidebar />
      <Header />
    </div>
  )
}
