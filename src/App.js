import logo from './logo.svg';
import './App.css';

import Cv from './PAGES/CV/Cv';
import  {Routes, Route} from "react-router-dom"
import PageError from "./PAGES/PageError/Error"
import Blog from "./PAGES/Blog/Blog"
import Counter from './PAGES/Counter/Counter';
import Toogle from './PAGES/Toogle/Toogle';
import List from './PAGES/List/List';
import Avenir from './PAGES/Avenir/Avenir';




function App() {


  
  return (
    
    
    <div className="">
      <Routes>
        <Route index element={<Cv />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Counter" element={<Counter/>} />
        <Route path="*" element={<PageError/>} />
        <Route path="/Toogle" element={<Toogle/>} />
        <Route path="/List" element={<List/>} />
        <Route path="/Avenir" element={<Avenir/>} />
      </Routes>

    </div>
  );
}

export default App;
