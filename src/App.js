import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Forgotpassword from './pages/forgotpassword';


import Home from "./pages/home";
import PageNotFound from './pages/page_not_found';
import SignIn from "./pages/signin";
import Signup from "./pages/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<SignIn/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/pw-forgot' element={<Forgotpassword />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
