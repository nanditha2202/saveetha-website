import './App.css'
import HomePage from './components/Pages/HomePage/HomePage';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import CoursesPage from './components/Pages/CoursesPage/CoursesPage';
import EventsPage from './components/Pages/EventsPage/EventsPage';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FooterComponent from './components/FooterConponent/FooterComponent';
// import HeaderComponent from './components/HeaderComponent/HeaderComponent';
// import FooterComponent from './components/FooterComponent/FooterComponent';
function App() {
  return(
    <>    
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/About' element={<AboutPage/>}></Route>
      <Route path='/Courses' element={<CoursesPage/>}></Route>
      <Route path='/Events' element={<EventsPage/>}></Route>
      </Routes>
     <FooterComponent/>
      </BrowserRouter>

    </>
  )
}
  

export default App