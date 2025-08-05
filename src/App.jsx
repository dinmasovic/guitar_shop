import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FirstPage from "./pages/FirstPage.jsx";
import BrandPage from "./pages/BrandPage.jsx";
import GuitarPage from "./pages/GuitarPage.jsx";

function App() {


  return (<BrowserRouter>
      <Routes>
          <Route path="/" element={<FirstPage/>}/>
          <Route path="/brand/:id" element={<BrandPage/>}/>
          <Route path="/guitar/:brandId/:modelId" element={<GuitarPage/>}/>
      </Routes>
  </BrowserRouter>)
}

export default App
