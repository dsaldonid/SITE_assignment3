import Button from '@material-ui/core/Button';
import { Grid, Paper ,Avatar, TextField, Typography, Link} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export default function SignUp(){
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
                        Sign Up
                    </h2>
                </Grid>
                <TextField label = "Username" placeholder = "Enter username" fullWidth required/>
                <TextField label = "Password" placeholder = "Enter a password" type = "password" fullWidth required/>
                <Button type = 'submit' variant = "contained" color = 'primary' fullWidth>Sign Up</Button>
            </Paper>
        </Grid>
    )
}