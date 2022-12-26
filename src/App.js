import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Care from "./pages/Care";
import Career from "./pages/Career";
import Company from "./pages/Company";
import Document from "./pages/Document";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Quote from "./pages/Quote";
import Registration from "./pages/Registration";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/produk" element={<Products />} />
      <Route path="/care" element={<Care />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/career" element={<Career />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/company" element={<Company />} />
      <Route path="/documentation" element={<Document />} /> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
