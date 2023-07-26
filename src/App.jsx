import './App.css';
// import LandingPage from "./pages/LandingPage.jsx";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import GeneralRouter from './components/GeneralRouter'

export default function App() {
  return (
    <main>
     <NavBar />
     <GeneralRouter />
     <Footer/>
    </main>
  )
}
