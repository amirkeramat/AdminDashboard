import {createContext,useState,useMemo} from "react";

export const ToggleContext = createContext({
    toggle:false,
    setToggle: ()=>{}
});

const ToggleContextProvider = ({children}) =>{
     const [toggle, setToggle] = useState(false);
     const value = useMemo(
       () => ({
         toggle,
         setToggle,
       }),
       [toggle, setToggle]
     );
    return(
        <ToggleContext.Provider value={value}>
            {children}
        </ToggleContext.Provider>
    )
}

export default ToggleContextProvider