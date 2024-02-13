import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import FinanceRealEstate from './Pages/FinanceRealEstate';
import PersonalDevelomentPage from './Pages/PersonalDevelomentPage';
import CareerPages from './Pages/CareerPages';
import BlogPage from './Pages/BlogPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/"  element={ <HomePage/> } />
      <Route path="aboutpage"  element={ <AboutPage/> } />
      <Route path="financeRealEstate"  element={ <FinanceRealEstate/> } />
      <Route path="personalDevelomentPage"  element={ <PersonalDevelomentPage/> } />
      <Route path="careerPages"  element={ <CareerPages/> } />
      <Route path="BlogPage/:id"  element={ <BlogPage />} />
      

      
  
      </Routes>
    </div>
  );
}

export default App;
