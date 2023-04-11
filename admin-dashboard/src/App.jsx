import {useRoutes} from 'react-router-dom'
import './App.css'
import routes from './routes'
import TopBar from './components/TopBar/TopBar'
import SideBar from './components/SideBar/SideBar'
function App() {
let router = useRoutes(routes)

  return (
    <div className="App">
      <TopBar/>
      <div className='flex justify-between mt-[10px] relative'>
        <SideBar/>
        {router}
      </div>
      
    </div>
  )
}

export default App
