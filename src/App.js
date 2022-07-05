import React from "react";
import Home from "./components/Home";
import SignUp from './components/SignUp';
import { AuthProvider } from './context/AuthContext'; 
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import NotFound from './components/NotFound';
import Login from "./components/Login";


function App() {
  return (    
    <AuthProvider>
      <div style={{ margin: '2em' }}>
        <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home/>} />
          <Route path={'/signup'} element={<SignUp/>} />
          <Route path={`/login`} element={<Login/>} />  
          <Route path={`/*`} element={<NotFound/>} />  
        </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>

  );
}

export default App;