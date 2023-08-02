import { Link, useNavigate} from "react-router-dom"
import { useState,useEffect } from "react";
import { Button, TextField,IconButton,InputAdornment } from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import style from "./Registration.module.css"

function Registration(): JSX.Element {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [confirmshowPassword, setConfirmShowPassword] = useState<boolean>(false)
  const [firstName,setFirstName] = useState<string>("")
  const [lastName,setLastName] = useState<string>("")
  const [email ,setEmail] = useState<string>("")
  const [password ,setPassword] = useState<string>("")
  const [confirmPassword ,setConfirmPassword] = useState<string>("")
  const [firstNameError ,setfirstNameError] = useState<boolean>(false)
  const [firstNameErrorMessage ,setfirstNameErrorMessage] = useState<string>("")
  const [lastNameError ,setLastNameError] = useState<boolean>(false)
  const [lastNameErrorMessage ,setLastNameErrorMessage] = useState<string>("")
  const [emailError ,setEmailError] = useState<boolean>(false)
  const [emailErrorMessage ,setEmailErrorMessage] = useState<string>("")
  const [passwordError ,setPasswordError] = useState<boolean>(false)
  const [passwordErrorMessage ,setPasswordErrorMessage] = useState<string>("")
  const [confirmPasswordError ,setConfirmPasswordError] = useState<boolean>(false)
  const [confirmPasswordErrorMessage ,setConfirmPasswordErrorMessage] = useState<string>("")
  const [error,setError]= useState<boolean>(false)
  const [errorMessage,setErrorMessage]= useState<string>("")


  const navigate=useNavigate()
  

  function handleFirstNameChange(e : React.ChangeEvent<HTMLInputElement>){
    const newFirstName= e.target.value
    setFirstName(newFirstName)
    const nameRegex=/^[a-zA-Z]+$/;

    if(newFirstName===""){
      setfirstNameError(true)
      setfirstNameErrorMessage("Input field cannot be empty")
    }

    else if(!nameRegex.test(newFirstName)){
      setfirstNameError(true)
      setfirstNameErrorMessage("Name should not contain Number")
    }

    else if(newFirstName.length<2){
      setfirstNameError(true)
      setfirstNameErrorMessage("Name should be of more than one charachers")
    }
     
    else {
      setfirstNameError(false)
      setfirstNameErrorMessage("")
    }
  }

  function handleLastNameChange(e : React.ChangeEvent<HTMLInputElement>){
    const newLastName= e.target.value
    setLastName(newLastName)
    const nameRegex=/^[a-zA-Z]+$/;

    if(newLastName===""){
      setLastNameError(true)
      setLastNameErrorMessage("Input field cannot be empty")
    }

    else if(!nameRegex.test(newLastName)){
      setLastNameError(true)
      setfirstNameErrorMessage("Name should not contain Number")
    }

    else if(newLastName.length<2){
      setLastNameError(true)
      setLastNameErrorMessage("Name should be of more than one charachers")
    }
     
    else {
      setLastNameError(false)
      setLastNameErrorMessage("")
    }
  }

  function handleEmail(e: React.ChangeEvent<HTMLInputElement>){
    const newEmail = e.target.value
    setEmail(newEmail)
    const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/
    
    if(newEmail===""){
      setEmailError(true)
      setEmailErrorMessage("Input field cannot be empty")
    }
    else if(!regEmail.test(newEmail)){
      setEmailError(true)
      setEmailErrorMessage("Incorrect Email")
    }
    else{
      setEmailError(false)
      setEmailErrorMessage("")
    }
  }
function handlePassword(e: React.ChangeEvent<HTMLInputElement>){
 const newPassword =e.target.value
  setPassword(newPassword)

  if(newPassword.length<6){
    setPasswordError(true)
    setPasswordErrorMessage("Password should of more than 6 characters")
  }
  else{
    setPasswordError(false)
    setPasswordErrorMessage("")
  }
}

function handleConfirmPassword(e:React.ChangeEvent<HTMLInputElement>){
  const newConfirmPwd= e.target.value
  setConfirmPassword(newConfirmPwd)
}

useEffect(()=>{
  if(confirmPassword.length!==password.length){
    setConfirmPasswordError(true)
    setConfirmPasswordErrorMessage("Passwords do not match")
  }
  else if(confirmPassword!==password){
    setConfirmPasswordErrorMessage("Passwords do not match")
  }
  else{
    setConfirmPasswordError(false)
    setConfirmPasswordErrorMessage("")
  }
},[password,confirmPassword])

interface User  {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  subscriptionData: {
    isSubscribed: boolean;
    subscriptionPlan: string;
  };
};

function handleSubmit(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault()

  const storedUsers: User[]=JSON.parse(localStorage.getItem("users")!)||[]
  const existingUser: User | undefined= storedUsers.find((user:User)=>user.Email===email)
  if(existingUser){
    setError(true)
    setErrorMessage("Email already exists")
  }
 
    else{
      const newUser={
        FirstName:firstName,
        LastName:lastName,
        Email:email,
        Password:password,
        subscriptionData:{
          isSubscribed:false,
          subscriptionPlan:""
        }
        }
        const updatedUser= [...storedUsers ,newUser]
      const confirm= window.confirm("Registration sucessfully done! Click OK to go to login page")
      if(confirm){
        localStorage.setItem("users",JSON.stringify(updatedUser))
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setError(false)
        navigate("/login")
      }
    }
}

  return (
    (<div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h1>Registration</h1>
      <TextField
      fullWidth
       label="First Name"
        variant="outlined"
         required={true}
         type="text"
         value={firstName}
         sx={{margin:"1rem"}}
         color={firstName===""||firstNameError?"error":"success"}
         error={firstNameError}
        helperText={firstNameError && firstNameErrorMessage}
        FormHelperTextProps={{
          style:{fontWeight:"550",fontSize:"14px"}
        }}
        onChange={handleFirstNameChange}
         />
         <TextField disabled={firstNameError?true:false}
         fullWidth
       label="Last Name"
        variant="outlined"
         required={true}
         type="text"
         error={lastNameError}
         color={lastName===""||lastNameError?"error":"success"}
        helperText={lastNameError && lastNameErrorMessage}
        FormHelperTextProps={{
          style:{fontWeight:"550",fontSize:"14px"}
        }}
         value={lastName}
         sx={{margin:"1rem"}}
         onChange={handleLastNameChange}
         />
      <TextField disabled={firstNameError||lastNameError?true:false}
      fullWidth
       label="Email"
        variant="outlined"
         required={true}
         type="email"
         autoComplete="off"
         value={email}
         error={emailError}
         color={email===""||emailErrorMessage?"error":"success"}
        helperText={emailErrorMessage && emailErrorMessage}
        FormHelperTextProps={{
          style:{fontWeight:"550",fontSize:"14px"}
        }}
         onChange={handleEmail}
         sx={{margin:"1rem"}}
         />
         <TextField disabled={firstNameError||lastNameError||emailError?true:false}
         fullWidth
       label="Password"
        variant="outlined"
        type= {showPassword?"text":"password"}
        value={password}
        color={password===""||passwordError?"error":"success"}
         error={passwordError}
        helperText={passwordError && passwordErrorMessage}
        onChange={handlePassword}
        FormHelperTextProps={{
          style:{fontWeight:"550",fontSize:"14px"}
        }}
         required={true}
         sx={{margin:"1rem"}}
         InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={()=>setShowPassword(!showPassword)} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
         />
         <TextField disabled={firstNameError||lastNameError||emailError||passwordError?true:false}
         fullWidth
       label="Confirm-Password"
        variant="outlined"
        type={confirmshowPassword?"text":"Password"}
        value={confirmPassword}
        color={confirmPassword===""||confirmPasswordError?"error":"success"}
        error={confirmPasswordError}
       helperText={confirmPasswordError && confirmPasswordErrorMessage}
       FormHelperTextProps={{
        style:{fontWeight:"550",fontSize:"14px"}
      }}
         required={true}
         onChange={handleConfirmPassword}
         sx={{margin:"1rem"}}
         InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={()=>setConfirmShowPassword(!confirmshowPassword)} edge="end">
                {confirmshowPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
         />
         <p className={style.error}>{error&& errorMessage}</p>
         <Button
          disabled={firstNameError||lastNameError||emailError||passwordError||confirmPasswordError?true:false}
          variant="contained"
          sx={{margin:"1rem"}} 
          type="submit"
         >Register</Button>
         <p>Already registered? <Link to="/login" style={{textDecoration:"none"}}>LOGIN</Link></p>
      </form>
    </div>)
  );
}

export default Registration