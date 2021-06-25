import Button from '@material-ui/core/Button';
import { Grid, Paper ,Avatar, TextField, Typography, Link, Box, makeStyles} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
export default function InvalidLogin(){
    const paperStyle = {
        padding:20,
        height:"70vh",
        width:280,
        margin:"20px auto"
    }
    const textColor = {
        color:"red"
    }
    return(
        <Grid>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Typography style={textColor}>You must be logged in to access that page</Typography>
            </Box>
            <Paper elevation = {10} style= {paperStyle}>
                <Grid align = "center">
                    <Avatar>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <h2>
                        Sign In
                    </h2>
                </Grid>
                <TextField label = "Username" placeholder = "Enter username" fullWidth required/>
                <TextField label = "Password" placeholder = "Enter password" type = "password" fullWidth required/>
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
                <Button type = 'submit' variant = "contained" color = 'primary' fullWidth>Sign in</Button>
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