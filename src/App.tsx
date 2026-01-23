
import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Analyze from "./pages/analyze";
import Results from "./pages/results";

function App() {

  return( 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="analyze">
        <Route index element={<Analyze/>} /> 
        <Route path="results" element={<Results/>}/>
      </Route>
    </Routes> 
  )
}

export default App

