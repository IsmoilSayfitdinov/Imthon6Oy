import {Routes, Route} from "react-router-dom";
import CardView from "./routes/cardItemsview/CardView";
import Home from "./routes/page/Home";
import './App.css'
import More from "./routes/More/More";
function App() {

  return (
    <>
      <div className="container">
         
         <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/move" element={<More/>}></Route>
           <Route path='/cardview/:id' element={<CardView/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
