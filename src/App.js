import { BrowserRouter, Route , Routes  } from "react-router-dom";
import Home from './Pages/Home';
import './App.css';
import Navbar from './Components/Navbar';
import Shop from './Pages/Shop';
import Vendor from "./Pages/Vendor";
// import { useState } from "react";
// import {AiFillCloseCircle} from "react-icons/ai"

// const AboutMe = ({popUp,setPopUp})=>{
  
//   return(
//     <div className={`w-full h-[100vh] flex justify-center items-center bg-black absolute z-10 ${!popUp ? "hidden" : ""}`}    >
//         <div className="bg-white relative p-24">
//           <AiFillCloseCircle className="absolute right-5 top-5 text-3xl" onClick={()=>setPopUp(false)} />
//           <p>Hello there👋, Myself Dipesh Rajoria, I am a FullStack Developer with a good practise in ReactJs, and I am a UI/UX developer too,
//           </p>
//           <p>Dont Judge My ui/ux skills on this project😅, I have made this small project so that I can just showcase my ReactJs skills.</p>
//         </div>
//     </div>
//   )
// }

function App() {
  // const [popUp , setPopUp] = useState(true);
  // const pathName = useLocation().pathname;

  return (
    <div className="App font-ubuntu relative "  >
        <BrowserRouter>
     {/* {pathName==='/' && <AboutMe popUp={popUp} setPopUp={setPopUp} />} */}
          <Navbar />
            <Routes>
                <Route path="/"  element={<Home/>} />
                {/* <Route path="/login"  element={<Login/>} /> */}
                <Route path="/shop" element={<Shop/>} />
                <Route path="/shop/:restaurantName" element={<Vendor/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
