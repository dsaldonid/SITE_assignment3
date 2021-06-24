import Button from '@material-ui/core/Button';
import "./NavBar.css"

export default function NavBar(){
    return(
        <div className = "navbar">
            <img src = "http://codepath-lifetracker.surge.sh/static/media/codepath.70a9a31f.svg" alt = "logo"></img>
            <div className = "nav-buttons">
                <Button color="secondary">Activity</Button>
                <Button color="secondary">Exercise</Button>
                <Button color="secondary">Nutrition</Button>
                <Button color="secondary">Sleep</Button>
                <Button className = "invisible" color="secondary">Login</Button>
                <Button variant="contained" color="primary" disableElevation>
                    Sign In 
                </Button>
            </div>
        </div>
    )
}