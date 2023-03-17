import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.jsx'
import TakeNoteOne from './components/takenoteone/takenoteone.jsx'
import TakeNoteTwo from './components/takenotetwo/takenotetwo.jsx'
import TakeNoteThree from './components/takenotethree/takenotethree';

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
  <TakeNoteThree />
    </div>
  );
}

export default App;






