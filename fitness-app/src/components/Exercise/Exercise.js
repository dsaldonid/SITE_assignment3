import { Box, Typography , Button} from '@material-ui/core/'
import "./Exercise.css"
import { useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import ExerciseCard from '../exerciseCard/exerciseCard'

export default function Exercise({ user, exercises }){
    const navigate = useNavigate()
    // const defaultProps = {
    //     bgcolor: 'background.paper',
    //     m: 1,
    //     style: { width: '5rem', height: '5rem' },
    //     borderColor: 'text.primary',
    //   };
    
    if (Object.keys(user).length === 0) {
        navigate("/invalidlogin")
    }
    console.log(exercises)
    return(
        <div className = "exercise">
            <div className ="banner">
                <Typography variant="h3" gutterBottom>
                    Exercise
                </Typography>
            </div>
            <div className = "overview">
                <Typography variant="h3" gutterBottom>
                    Overview
                </Typography>
                <Link to="/exercise/form">
                    <Button variant="contained" color="secondary" size = "small">
                        Add Exercise
                    </Button>
                </Link>
            </div>
            {exercises.length !== 0?
            exercises.map((exercise) => (<ExerciseCard exercise = {exercise}/>)):     
            <div className = "content">
                <Box m= {1} border={1} display="flex" justifyContent="center" alignItems="center">
                    <Typography contained variant="h4" gutterBottom>
                        Nothing to show here
                    </Typography>
                </Box>
            </div>
            }
        </div>
        
       
    )
}