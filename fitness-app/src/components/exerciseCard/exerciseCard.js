import {Card, Typography,CardContent} from '@material-ui/core';

export default function ExerciseCard({exercise}) {
  return (
    <div className = "ExerciseCard">
            <Card>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="h1">
                        {exercise.cat}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Duration
                        <Typography>
                            {exercise.dur}
                        </Typography>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Intensity
                        <Typography>
                            {exercise.tense}/10
                        </Typography>
                    </Typography>
                </CardContent>
            </Card>
        </div>
      
   
  )
}