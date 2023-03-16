import React from "react";
import './signin.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { siginin } from "../../Services/userservices";


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
   
    const takeEmail = (event) => {
        // setn((prev)=>prev+1)
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
        let response = await siginin(signinObj);
        console.log(response);
      }
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
                    <a href="https://accounts.google.com/signup/v2/webcreateaccount?biz=false&cc=IN&continue=https%3A%2F%2Fmyaccount
                    .google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button&dsh=S-435941888%3A1678800042859784&flowEntry=SignUp&flowName=GlifWebSignIn&service=accountsettings">Create account</a>
                </div>
                <div>
                <Button onClick={submit} variant="contained">Next</Button>
                </div>
            </div>
        </div>
    )
}
export default SignIn;