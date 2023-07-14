

import './App.scss';
import { Header } from './components/UI/Header';

import { Sidebar } from './components/UI/Sidebar'


function App() {

  const drawerWidth = 300;

  return (
    <div className='container'>
      <Sidebar
        backgroundColor='#7720b4'
        isAnimated
        drawerWidth={drawerWidth}
        
      />
      <Header
        drawerWidth={drawerWidth}
        space={5}
      />

    </div>
  )
}

export default App
