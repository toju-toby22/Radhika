import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import FinanceRealEstate from './Pages/FinanceRealEstate';
import PersonalDevelomentPage from './Pages/PersonalDevelomentPage';
import CareerPages from './Pages/CareerPages';
import BlogPage from './Articlepages/BlogPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonaldevBlogPage from './Articlepages/PersonaldevBlogPage';
import CareerBlogpage from './Articlepages/CareerBlogpage';
import Emai from './Components/Emai'
function App() {
  return (
    <div className="App">
                    <Emai/>

    <Routes>
      <Route path="/"  element={ <HomePage/> } />
      <Route path="aboutpage"  element={ <AboutPage/> } />
      <Route path="financeRealEstate"  element={ <FinanceRealEstate/> } />
      <Route path="BlogPage/:id"  element={ <BlogPage />} />

      <Route path="personalDevelomentPage"  element={ <PersonalDevelomentPage/> } />
      <Route path="PersonaldevBlogPage/:id"  element={ <PersonaldevBlogPage />} />

      <Route path="careerPages"  element={ <CareerPages/> } />
      <Route path="CareerBlogpage/:id"  element={ <CareerBlogpage />} />
      

      
  
      </Routes>
    </div>
  );
}

export default App;
