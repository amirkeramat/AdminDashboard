import {  useRoutes,} from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import routes from "./routes";
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import { Container } from "@mui/material";
import { xAxisData, newUsers, transactions, userRows, products } from "./datas";
import supabase from "./config/supabaseClient";
function App() {
  let router = useRoutes(routes);
    //  useEffect(() => {
    //    const sendData = async () => {
    //      const { error } = await supabase.from("users").insert(userRows);
    //      if (error) {
    //        console.log(error);
    //      }
    //    };
    //    sendData();
    //  }, []);
  
  return (
    <Container>
      <div className='App'>
        <TopBar />
        <div className='flex justify-around mt-[10px] relative'>
          <SideBar />
          {router}
        </div>
      </div>
    </Container>
  );
}

export default App;
