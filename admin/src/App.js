import "./app.css"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";

function App() {
  const {user} = useContext(AuthContext);

  return (
    <Router>
      {user && <Topbar />}
      <div className="container">
        {user && <Sidebar />}
        <Routes>
          <Route exact path="/login" element={<Login />} />
          {user &&
            <>
            <Route exact path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser /> } />
            <Route path="/movies" element={<ProductList />} />
            <Route path="/movies/:movieId" element={<Product />} />
            <Route path="/newMovie" element={<NewProduct />} />
            </>
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
