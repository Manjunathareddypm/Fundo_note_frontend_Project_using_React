import React from 'react'
import './signup.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { signup } from '../../Services/userservices';

const firstNameRegex = /^[A-Z]{1,1}[a-z]{3,30}$/;
const lastNameRegex = /^[a-z[A-Z]{3,30}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^[a-z]{1,3}[A-Z]{1,1}[0-9]{1,4}$/;

function SignUp() {
  const [signupObj, setSigupObj] = React.useState({firstName:"", lastName:"", email:"", password:""})
  const [errorObj, setErrorObj] = React.useState({
    firstNameError:false,
    firstNameHelper:"",
    lastNameError:false,
    lastNameHelper:"",
    emailError: false,
    emailHelper: "",
    passwordError: false,
    passwordHelper: "",
  });

  const takefirstname = (fname) => {
    setSigupObj((prevState) => ({ ...prevState, firstName: fname.target.value }));
  }
  const takelastname = (lname) => {
    setSigupObj((prevState) => ({ ...prevState, lastName: lname.target.value }));
  }
  const takeEmail = (event) => {
    setSigupObj((prevState) => ({ ...prevState, email: event.target.value }));
  };
  const takePassword = (e) => {
    setSigupObj((prevState) => ({ ...prevState, password: e.target.value }));
  };
  const submit = async () => {

    let firstnameTest = firstNameRegex.test(signupObj.firstName)
    let lastnameTest = lastNameRegex.test(signupObj.lastName)
    let emailTest = emailRegex.test(signupObj.email);
    let passwordTest = passwordRegex.test(signupObj.password);

    if (firstnameTest === false) {
      setErrorObj((prevState) => ({
        ...prevState,
        firstNameError: true,
        firstNameHelper: "enter correct email",
      }));
    } else {
      setErrorObj((prevState) => ({
        ...prevState,
        firstNameError: false,
        firstNameHelper: "",
      }));
    }

    if (lastnameTest === false) {
      setErrorObj((prevState) => ({
        ...prevState,
        lastNameError: true,
        lastNameHelper: "enter correct email",
      }));
    } else {
      setErrorObj((prevState) => ({
        ...prevState,
        lastNameError: false,
        lastNameHelper: "",
      }));
    }

    if (emailTest === false) {
        setErrorObj((prevState) => ({
          ...prevState,
          emailError: true,
          emailHelper: "enter correct email",
        }));
      } else {
        setErrorObj((prevState) => ({
          ...prevState,
          emailError: false,
          emailHelper: "",
        }));
      }
      if (passwordTest === false) {
        setErrorObj((prevState) => ({
          ...prevState,
          passwordError: true,
          passwordHelper: "enter correct password",
        }));
      } else {
        setErrorObj((prevState) => ({
          ...prevState,
          passwordError: false,
          passwordHelper: "",
        }));
  }
  if (firstnameTest === true && lastnameTest === true && emailTest === true && passwordTest === true) {
    let response = await signup(signupObj);
    console.log(response);
  }
}
  return (
    <div className='main'>
        <div className='main1'>
            <div className='main11'>
            <img
            className="gimg"
            src="https://techcrunch.com/wp-content/uploads/2015/10/screen-shot-2015-10-08-at-4-20-16-pm.png"
            alt="error"
          />
            </div>
            <div className='main12'><super><b>Create your Google Account</b></super></div>
            <div className='main13'>
                <div className='f1'>
                  <TextField
                   id="outlined-basic" 
                   label="First name" 
                   variant="outlined" 
                   onChange={takefirstname}
                  error={errorObj.firstNameError}
                  helperText={errorObj.firstNameHelper}
            />
                </div>
                <div className='l1'>
                  <TextField 
                  id="outlined-basic" 
                  label="Last name" 
                  variant="outlined" 
                  onChange={takelastname}
                  error={errorObj.lastNameError}
                  helperText={errorObj.lastNameHelper}
                  />
                </div>
            </div>
            <div className='main14'>
              <TextField 
              className='fu' 
              id="outlined-basic" 
              label="Username" 
              variant="outlined" 
              onChange={takeEmail}
            error={errorObj.emailError}
            helperText={errorObj.emailHelper}/>
            </div>
            <div className='main15'>
                <div className='p1'>
                  <TextField 
                  id="outlined-basic" 
                  label="Password" 
                  variant="outlined" 
                  onChange={takePassword}
                  error={errorObj.passwordError}
                  helperText={errorObj.passwordHelper}
                  />
                  </div>
                <div className='c1'><TextField id="outlined-basic" label="Confirm" variant="outlined" /></div>
            </div>
            <div className='main16'>
                <div>Sign in instead</div>
                <div>
                <Button onClick={submit} variant="contained">Next</Button>
                </div>
            </div>
        </div>
        <div className='main2'>
            <div className='main21'><img
            className="Go"
            src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
            alt="error"
          /></div>
            <div className='main22'>One account. All of Google <br /> working for you.</div>
        </div>
    </div>
  )
}

export default SignUp;