import {useRoutes} from 'react-router-dom'
import './App.css'
import routes from './routes'
import TopBar from './components/TopBar/TopBar'
import SideBar from './components/SideBar/SideBar'
import { Container } from '@mui/material'
function App() {
let router = useRoutes(routes)

  return (
    <Container>

    <div className="App">
      <TopBar/>
      <div className='flex justify-between mt-[10px] relative'>
        <SideBar/>
        {router}
      </div>
      
    </div>
    </Container>
  )
}

export default App
