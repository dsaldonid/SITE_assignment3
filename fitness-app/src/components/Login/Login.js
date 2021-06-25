import Button from '@material-ui/core/Button';
import { useEffect, useState } from "react"
import "./Login.css"
import { Grid, Paper ,Avatar, TextField, Typography, Link} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from "axios"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useNavigate } from "react-router-dom"


export default function Login({ user, setUser }){
    const navigate = useNavigate()
    const [isProcessing, setIsProcessing] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
    username: "",
    password: "",
  })

  // useEffect(() => {
  //   // if user is already logged in,
  //   // redirect them to the home page
  //   if (Object.keys(user).length !== 0) {
  //     navigate("/activity")
  //   }
  // }, [user, navigate])

  
    const handleOnInputChange = (event) => {
        if (event.target.name === "username") {
        // if (event.target.value.indexOf("@") === -1) {
        //     setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
        // } else {
        //     setErrors((e) => ({ ...e, email: null }))
        // }
        }

        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }

    const handleOnSubmit = async () => {
        setIsProcessing(true)
        setErrors((e) => ({ ...e, form: null }))
    
        try {
          const res = await axios.post("http://localhost:3001/auth/login", form)
          if (res?.data?.user) {
            setUser(res.data.user)
          } else {
            setErrors((e) => ({ ...e, form: "Invalid username/password combination" }))
          }
        } catch (err) {
          console.log(err)
          setErrors((e) => ({ ...e, form: "Invalid username/password combination" }))
        } finally {
          setIsProcessing(false)
          navigate("/activity")
        }
      }

    const paperStyle = {
        padding:20,
        height:"70vh",
        width:280,
        margin:"20px auto"
    }
    return(
        <Grid>
            <Paper elevation = {10} style= {paperStyle}>
                <Grid align = "center">
                    <Avatar>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <h2>
                        Sign In
                    </h2>
                </Grid>
                <TextField  
                    onChange={handleOnInputChange} 
                    name ="username"
                    label = "Username" 
                    placeholder = "Enter username" 
                    fullWidth 
                    required
                />
                <TextField 
                    onChange={handleOnInputChange} 
                    name ="password"
                    label = "Password" 
                    placeholder = "Enter password" 
                    type = "password" 
                    fullWidth 
                    required
                />
                <FormControlLabel
                    control={
                    <Checkbox
                        // checked={state.checkedB}
                        // onChange={handleChange}
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember Me"
                />
                <Button 
                    onClick ={handleOnSubmit}
                    type = 'submit' 
                    variant = "contained" 
                    color = 'primary' 
                    fullWidth
                    >Sign in
                </Button>
                <Typography>
                    Do you have an account?
                    <Link href ="/signup">
                        Sign Up
                    </Link>
                </Typography>
                
            </Paper>
        </Grid>
    )
}