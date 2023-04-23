import Home from "./pages/Home/Home"
import Users from "./pages/Users/Users"
import NewUser from "./pages/NewUser/NewUser"
import Products from "./pages/Products/Products"
import NewProduct from "./pages/NewProduct/NewProduct"
let routs = [
    {path:"/",element:<Home/>},
    {path:"/users",element:<Users/>},
    {path:"/newUser",element:<NewUser/>},
    {path:"/products",element:<Products/>},
    {path:"/newProduct",element:<NewProduct/>},
]

export default routs