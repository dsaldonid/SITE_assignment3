import { Box, Typography , Button} from '@material-ui/core/'
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Nutrition({ user }){
    const navigate = useNavigate()
    const defaultProps = {
        bgcolor: 'background.paper',
        m: 1,
        style: { width: '5rem', height: '5rem' },
        borderColor: 'text.primary',
      };

    useEffect(() => {
    // if user is already logged in,
    // redirect them to the home page
    if (Object.keys(user).length === 0) {
        navigate("/invalidlogin")
    }
    }, [user, navigate])
    return(
        <div className = "Nutrition">
            <Box display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h3" gutterBottom>
                    Nutrition
                </Typography>
            </Box>
            <div className = "overview">
                <Typography variant="h3" gutterBottom>
                    Overview
                </Typography>
                <Button variant="contained" color="secondary" size = "small">
                    Add Nutrition
                </Button>
            </div>
            <div className = "content">
                <Box m= {1} border={1} display="flex" justifyContent="center" alignItems="center">
                    <Typography contained variant="h4" gutterBottom>
                        Nothing to show here
                    </Typography>
                </Box>
            </div>
        </div>
        
       
    )
}