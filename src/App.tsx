

import './App.scss';
import { Header } from './components/UI/Header';

import { Sidebar } from './components/UI/Sidebar'
import { Card } from './components/Card/Card';


function App() {

  const drawerWidth = 300;

  return (
    <div className='container'>
      {/* <Sidebar
        backgroundColor='#7720b4'
        isAnimated
        drawerWidth={drawerWidth}
        
      />
      <Header
        drawerWidth={drawerWidth}
        space={5}
      /> */}
      <Card
        hasGradient
        initialBg='#131212'
        middleBg='#414b34'
        finalBg='#000000'
        degrees={120}
        height={45}
      >

      </Card>

    </div>
  )
}

export default App
