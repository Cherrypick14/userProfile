import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
   const user = false;
  return (
   <BrowserRouter>
   <TopBar />
   <Routes>
     <Route exact path="/" element={<Home />} />
     <Route path="/register" element={user? <Home/>:<Register />}/>
     <Route path="/login" element={user?<Home />:<Login/>}/>
     <Route path="/settings" element={user?<Settings/>:<Register/>}/>
   </Routes>
  </BrowserRouter>
   
  );
}
export default App;
