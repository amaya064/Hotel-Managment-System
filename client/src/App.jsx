import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';
import Header from './components/Header';
import Accommodation from './pages/Accommodation';
import BookingNow from './pages/Booking Now';
import Dining from './pages/Dining';
import Events from './pages/Events';
import Relaxing from './pages/Relaxing';
import Footer from './components/footer';



export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/accommodation" element={<Accommodation />} />
      <Route path="/bookingnow" element={<BookingNow />} />
      <Route path="/dining" element={<Dining />} />
      <Route path="/events" element={<Events />} />
      <Route path="/relaxing" element={<Relaxing />} />

    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

