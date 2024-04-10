import Home from "./Pages/Home/Home";
import UserList from "./Pages/Users/UserList";
import Products from "./Pages/Products/Products";
import NewUser from "./Pages/NewUser/NewUser";
import Product from "./Pages/Product/Product";
const routes = [
    {path : "/" , element : <Home />},
    {path : "/users" , element : <UserList />},
    {path : "/newUser" , element : <NewUser />},
    {path : "/products" , element : <Products />},
    {path : "/products/:productId" , element : <Product />},
]

export default routes;