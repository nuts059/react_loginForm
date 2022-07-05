import React from "react";
import Home from "./components/Home";
import SignUp from './components/SignUp';
import { AuthProvider } from './context/AuthContext'; 
import { BrowserRouter, Route , Routes , Navigate} from 'react-router-dom';
import NotFound from './components/NotFound';
import Login from "./components/Login";
import { useAuthContext } from './context/AuthContext';

const PrivateRoute  = ({...props}) => {
  const authUser = useAuthContext()
  const isAuthenticated = authUser != null //認証されているかの判定
  if (isAuthenticated) {
    console.log('ログイン成功')
    return  <Route path={'/'} element={
      <PrivateRoute useAuthContext={useAuthContext}>
        <Home />
      </PrivateRoute>
    } />
  }else{
    console.log(`ログインしていないユーザーは${props.path}へはアクセスできません`)
    return <Navigate path={'/login'} element={<Login/>}/>
  }
}

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