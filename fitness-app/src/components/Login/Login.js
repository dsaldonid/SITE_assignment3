import Button from '@material-ui/core/Button';
import "./Login.css"
import { Grid, Paper ,Avatar} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
export default function Login(){
    const paperStyle = {
        padding:20,
        height:"70vh",
        width:280,
        margin:"20px auto"
    }
    return(
        <Grid>
            <Paper elevation = {10} style= {paperStyle}>
                <Avatar>
                    <LockOutlinedIcon/>
                </Avatar>
                <h2>
                    Sign In
                </h2>
            </Paper>
        </Grid>
    )
}