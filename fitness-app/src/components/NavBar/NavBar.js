import Button from '@material-ui/core/Button';
import "./NavBar.css"
import { useNavigate, Link } from "react-router-dom"
import apiClient from '../../services/apiClient';

export default function NavBar({ user, setUser}){
    const navigate = useNavigate()
    // check how states work for multiple users at once
    const emptyUser = async () => {
        await apiClient.logoutUser()
        setUser({})
        navigate("/")
    }

    const log = () =>{
        navigate("/login")
    }

    const reg = () =>{
        navigate("/signup")
    }
    
    return(
        <div className = "navbar">
            <img src = "http://codepath-lifetracker.surge.sh/static/media/codepath.70a9a31f.svg" alt = "logo"></img>
            <div className = "nav-buttons">
                <Link to="/activity" underline='none'>
                    <Button color="primary">Activity</Button>
                </Link>
                
                <Link to="/exercise" underline='none'>
                    <Button color="primary">Exercise</Button>
                </Link>

                <Link to="/nutrition" underline='none'>
                    <Button color="primary">Nutrition</Button>
                </Link>
                
                <Link to="/sleep" underline='none'>
                    <Button color="primary">Sleep</Button>
                </Link>

                {Object.keys(user).length !== 0?
                 <Button onClick={emptyUser} color="primary">Sign Out</Button>:
                 <Button onClick={log} color="primary">Sign In</Button>}
                {/* <Button href ="/login" color="primary">Sign In</Button> */}
                {Object.keys(user).length !== 0?
                 <div></div>:
                 <Button onClick={reg} variant="contained" color="primary" disableElevation>
                    Sign Up
                 </Button>
                 }
                {/* <Button href ="/signup" variant="contained" color="primary" disableElevation>
                    Sign Up
                </Button> */}
            </div>
        </div>
    )
}