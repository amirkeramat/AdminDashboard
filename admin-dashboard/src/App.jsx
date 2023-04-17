import {useRoutes} from 'react-router-dom'
import './App.css'
import routes from './routes'
import TopBar from './components/TopBar/TopBar'
import SideBar from './components/SideBar/SideBar'
import { Container } from '@mui/material'
import { xAxisData, newUsers, transactions, userRows, products } from "./datas";
function App() {
let router = useRoutes(routes)
  const fetchData = ()=>{
    fetch(
      "https://admin-dashboard-95d81-default-rtdb.firebaseio.com/newUsers.json",
      {
        method: "POST",
        body: JSON.stringify(newUsers),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => console.log(res));
  }
  // fetchData()
  return (
    <Container>

    <div className="App">
      <TopBar/>
      <div className='flex justify-around mt-[10px] relative'>
        <SideBar/>
        {router}
      </div>
      
    </div>
    </Container>
  )
}

export default App
