import { useRoutes } from "react-router-dom";
import "./App.css";
import { useEffect, useRef, useState ,useMemo} from "react";
import routes from "./routes";
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import { Container } from "@mui/material";
import { xAxisData, newUsers, transactions, userRows, products } from "./datas";
import { ToggleContext } from "./Context/Toggle";
import supabase from "./config/supabaseClient";
function App() {
  let router = useRoutes(routes);
  const [toggle, setToggle] = useState(false);
  const value = useMemo(() =>({
    toggle, setToggle})
  , [toggle, setToggle]);

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
    <ToggleContext.Provider value={value}>
      <Container>
        <div className='App'>
          <TopBar />
          <div className='flex justify-between mt-[10px] relative'>
            <SideBar />
            <div className="flex-[4] w-full" onClick={() => setToggle(false)}>{router}</div>
          </div>
        </div>
      </Container>
    </ToggleContext.Provider>
  );
}

export default App;
