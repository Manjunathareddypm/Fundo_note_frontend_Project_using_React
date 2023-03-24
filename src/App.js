import logo from './logo.svg';
import './App.css';
import SignUp from './Pages/signup/signup.jsx';
 import SignIn from './Pages/signin/signin';
import Dashboard from './Pages/dashboard/dashboard';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ProtectedRoute from './routes/proctected';
import AuthRoute from './routes/authRoute';

function App() {
  return (
    <div>
     {/* <Dashboard /> */}
     {/* <SignUp /> */}
  {/* <SignIn /> */}
  <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<AuthRoute><SignIn /></AuthRoute>} />
        <Route path="/signup" element={<AuthRoute><SignUp /></AuthRoute>} />
        <Route path="/dashboard" 
        element={
        <ProtectedRoute>
          <Dashboard/></ProtectedRoute>} />

      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;






