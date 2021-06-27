import Button from '@material-ui/core/Button';
import "./NavBar.css"
import { useNavigate } from "react-router-dom"

export default function NavBar({ user, setUser}){
    const navigate = useNavigate()
    // check how states work for multiple users at once
    const emptyUser = () => {
        setUser({})
        navigate("/")
    }
    
    return(
        <div className = "navbar">
            <img src = "http://codepath-lifetracker.surge.sh/static/media/codepath.70a9a31f.svg" alt = "logo"></img>
            <div className = "nav-buttons">
                <Button color="primary" href ="/activity">Activity</Button>
                <Button color="primary" href ="/exercise">Exercise</Button>
                <Button color="primary" href ="/nutrition">Nutrition</Button>
                <Button color="primary" href ="/sleep">Sleep</Button>
                {Object.keys(user).length !== 0?
                 <Button onClick={emptyUser} color="primary">Sign Out</Button>:
                 <Button href ="/login" color="primary">Sign In</Button>}
                {/* <Button href ="/login" color="primary">Sign In</Button> */}
                {Object.keys(user).length !== 0?
                 <div></div>:
                 <Button href ="/signup" variant="contained" color="primary" disableElevation>
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