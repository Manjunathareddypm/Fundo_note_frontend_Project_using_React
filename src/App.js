import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.jsx'
import TakeNoteOne from './components/takenoteone/takenoteone.jsx'
import TakeNoteTwo from './components/takenotetwo/takenotetwo.jsx'

import SignUp from './Pages/signup/signup.jsx';
 import SignIn from './Pages/signin/signin';

function App() {
  return (
    <div>
     <Header /> 
     <TakeNoteOne />
     <TakeNoteTwo />
     {/* <SignUp /> */}
  {/* <SignIn /> */}
    </div>
  );
}

export default App;






