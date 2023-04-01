import React from "react";
import './signin.css';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { siginin } from "../../Services/userservices";
import { redirect, useNavigate } from "react-router-dom";
import { Outlet, Navigate } from "react-router-dom";


const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

 function SignIn(){
    const [signinObj, setSiginObj] = React.useState({email:"", password:""})
    const [errorObj, setErrorObj] = React.useState({
        emailError: false,
        emailHelper: "",
        passwordError: false,
        passwordHelper: "",
      });
      const navigate = useNavigate();
      
    const takeEmail = (event) => {
        setSiginObj((prevState) => ({ ...prevState, email: event.target.value }));
      };
      const takePassword = (e) => {
        setSiginObj((prevState) => ({ ...prevState, password: e.target.value }));
      };

      const submit = async () => {

        let emailTest = emailRegex.test(signinObj.email);
        let passwordTest = passwordRegex.test(signinObj.password);

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
      if (emailTest === true && passwordTest === true) {
        console.log("hi");
        let response = await siginin(signinObj);
        console.log(response);
        localStorage.setItem('token',response.data.data.token)
        //  redirect("/dashboard");
        //  return <Navigate to= "/dashboard" />;
        navigate('/dashboard')
      }
    }

    function displaySignUp(){
      return redirect("/SignUp");
    }
   
    return(
        <div className="signinmain">
            <div className="Googleimg">
            <img
            className="gimg"
            src="https://techcrunch.com/wp-content/uploads/2015/10/screen-shot-2015-10-08-at-4-20-16-pm.png"
            alt="error"
          />
            </div>
            <div className="text">
                <div className="text1"><strong>Sign in</strong>Use your google account</div>
                </div>
        
            <div className="email">
                <TextField 
                className="in" 
                id="outlined-basic" 
                label="Email or phone" 
                variant="outlined" 
            onChange={takeEmail}
            error={errorObj.emailError}
            helperText={errorObj.emailHelper}
            
            />

            </div>
            <div className="password">
            <TextField 
            className="ins" 
            id="outlined-basic" 
            label="Password" 
            variant="outlined"
            onChange={takePassword}
            error={errorObj.passwordError}
            helperText={errorObj.passwordHelper}
            />
            </div>
            <div className="space"></div>
            <div className="texts">Not your computer? Use Guest mode to sign in privately.</div>
            <div className="cn">
                <div className="ca">
                <Link href="/SignUp" onClick={displaySignUp}>Create account</Link>
                </div>
                <div className="button">
                <Button onClick={submit} variant="contained">
                 Next</Button>
                </div>
            </div>
        </div>
    )
}
export default SignIn;