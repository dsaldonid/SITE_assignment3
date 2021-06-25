import { Box, Typography , Button} from '@material-ui/core/'
import "./Exercise.css"

export default function Exercise(){
    const defaultProps = {
        bgcolor: 'background.paper',
        m: 1,
        style: { width: '5rem', height: '5rem' },
        borderColor: 'text.primary',
      };
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
                <Button variant="contained" color="secondary" size = "small">
                    Add Exercise
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