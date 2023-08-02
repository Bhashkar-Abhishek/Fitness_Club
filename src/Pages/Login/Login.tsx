import {useState} from "react"
import { Link, useNavigate } from "react-router-dom";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import style from "./Login.module.css"

function Login():JSX.Element {
  const [email,setEmail]= useState<string>("")
  const [password,setPassword] = useState<string>("")
  const [emailError,setEmailError]= useState<boolean>(false)
  const [emailErrorMessage,setEmailErrorMessage]= useState<string>("")
  const [passwordError,setPasswordError]= useState<boolean>(false)
  const [passwordErrorMessage,setPasswordErrorMessage]= useState<string>("")
  const [show,setShow] = useState<boolean>(false)
  const [error,setError] = useState<boolean>(false)
  const [errorMessage,setErrorMessage] = useState<string>("")

  const navigate=useNavigate()

  function handleEmail(e:React.ChangeEvent<HTMLInputElement>){
    const newEmail=e.target.value
    setEmail(newEmail)
    const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/
   
    if(!regEmail.test(newEmail)){
      setEmailError(true)
      setEmailErrorMessage("Incorrect Email")
    }
    else{
      setEmailError(false)
      setEmailErrorMessage("")
    }
  }
  interface User{
    Email:string,
    Password:string,
  }
  function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const storedUsers: User[]= JSON.parse(localStorage.getItem("users")!)||[]
    const existingUser: User | undefined= storedUsers.find((user:User)=>user.Email===email&&user.Password===password)
    const existingEmail: User | undefined= storedUsers.find((user:User)=>user.Email===email)

    if(existingEmail){
       if(existingUser){
        const confirm=window.confirm("Loged In successfully! Click OK to go to Home page")
        setPasswordError(false)
        setPasswordErrorMessage("")
        setError(false)
        setErrorMessage("")
        
        if(confirm){
          localStorage.setItem("isLogedIn",String(true))
          navigate("/")
          setEmail("")
          setPassword("")
          }
      }
      
      else{
        setPasswordError(true)
      setPasswordErrorMessage("Password does not match")
      setError(false)
      setErrorMessage("")
      }
    }

     else if(!existingUser){
      setError(true)
      setErrorMessage("Email Not Found Please register first")
      setPasswordError(false)
      setPasswordErrorMessage("")
    }

 

  }

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
        <TextField fullWidth
        autoComplete="off"
        variant="outlined"
        label="Email"
        required={true}
        type="email"
        value={email}
        error={emailError}
        color={email===""||emailError?"error":"primary"}
        helperText={emailError&&emailErrorMessage}
        FormHelperTextProps={{
          style:{fontSize:"14px",fontWeight:"550"}
        }}
        onChange={handleEmail}
        sx={{margin:"1rem"}}
        />

        <TextField fullWidth
        variant="outlined"
        label="Password"
        required={true}
        type={show?"text":"password"}
        value={password}
        error={passwordError}
        color={passwordError?"error":"primary"}
        helperText={passwordError&&passwordErrorMessage}
        FormHelperTextProps={{
          style:{fontSize:"14px",fontWeight:"550"}
        }}
        onChange={(e)=>setPassword(e.target.value)}
        sx={{margin:"1rem"}}
        InputProps={{
          endAdornment:(
            <InputAdornment position="end">
              <IconButton onClick={()=>setShow(!show)} edge="end">
                {show? <VisibilityOff/>:<Visibility/>}
              </IconButton>
            </InputAdornment>
          )
        }}
        />
        <p className={style.error}>{error&&errorMessage}</p>
        <Button 
        variant="contained"
        type="submit"
        sx={{margin:"1rem"}}
          >LOGIN</Button>
          <p>Don't have an accoutn <Link to="/registration" style={{textDecoration:"none"}}>Register</Link> </p>
      </form>
    </div>
  )
}

export default Login