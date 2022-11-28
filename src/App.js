import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Countries from "./pages/Countries";
import SingleCountry from "./pages/SingleCountry";
import { HiHome } from 'react-icons/hi'
import { MdGroup } from 'react-icons/md'
import { MdSearch } from 'react-icons/md'
import SearchCountry from './pages/SearchCountry';
import About from './pages/About';
import SplashScreen from "./pages/SplashScreen";

function App() {
  return (
    <BrowserRouter>
    
      <header className="flex fixed items-center justify-around inset-x-0 top z-0 flex-wrap bg-white p-8">
        <div class="flex fixed items-center flex-shrink-0 text-black mr-6">
        <img src="https://img.freepik.com/free-icon/world-cup_318-775643.jpg?size=338&ext=jpg&ga=GA1.2.1728848719.1667470981&semt=sph" class="h-6 mr-3 sm:h-10" alt="Flowbite Logo" />
          <span class="font-semibold text-xl tracking-tight">Countries App</span>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Countries />}></Route>
        <Route path="/:name" element={<SingleCountry />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/SearchCountry" element={<SearchCountry />}></Route>
        <Route exact path="./SplashScreen" element={<SplashScreen/>}></Route>
      </Routes>
      <footer className="flex justify-around block fixed inset-x-0 bottom-0 z-10 bg-white shadow items-center">
        <NavLink to="/" className="flex flex-col items-center decoration-none font-verdana p-1">
          <HiHome className="mb-2 text-xl" />
          Countries
        </NavLink>
        <NavLink to="/SearchCountry" className="flex flex-col items-center decoration-none font-verdana p-1">
          <MdSearch className="mb-2 text-xl" />
          Search Country
        </NavLink>
        <NavLink to="/About" className="flex flex-col items-center decoration-none font-verdana p-1">
          <MdGroup className="mb-2 text-xl" />
          About
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;
