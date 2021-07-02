import {Box, Card, Typography,CardContent} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
      width: 275,
      height:140,
      marginTop:20,
      marginRight:20,
      marginBottom:10
    },
    text: {
      textAlign:"center",
      display:"flex",
      flexDirection:"column",
      alignItems:"center"
    },
    padd:{
        marginRight:10
    }
  });

export default function NutritionCard({nutrition}) {
const classes = useStyles();
  return (
    <div className = "NutritionCard">
            <Card className={classes.root}>
                <CardContent className={classes.text}>
                    <Typography variant="h5" color="textPrimary" component="h5">
                        {nutrition.name}
                    </Typography>
                    <Box display="flex" flexDirection="row" justifyContent="space-between">
                        <div className={classes.padd}>
                            <Typography variant="h6" color="textSecondary" component="h2">
                                Duration 
                                <Typography variant="h6" color="textSecondary" component="p">
                                    {nutrition.dur} 
                                </Typography>
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="h6" color="textSecondary" component="p">
                                Intensity
                                <Typography variant="h6" color="textSecondary" component="p">
                                    {nutrition.tense}/10
                                </Typography>
                            </Typography>
                        </div>
                    </Box>
                </CardContent>
            </Card>
        </div>
      
   
  )
}