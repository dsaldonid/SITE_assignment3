import "./Activity.css"
import { useEffect, useState } from "react"; import Typography from "@material-ui/core/Typography";
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { useAppStateContext } from '../../contexts/appStateContext';
import useRedirect from "../../hooks/useRedirect";
import apiClient from '../../services/apiClient';

export default function Activity() {
    const { appState, setAppState } = useAppStateContext()
    const [average, setAverage] = useState(0)
    const [max, setMax] = useState(0)
    const [total, setTotal] = useState(0)
    const cardStyle = {
        display: 'block',
        width: '30vw',
        transitionDuration: '0.3s',
        height: '15vw'
    }

    useRedirect(appState)


    useEffect(() => {
        const grabAvg = async () => {
            const {data} = await apiClient.listAvgNutrition() 
            if (data) setAverage(data.nutritions[0].avgCal)
        }
        grabAvg()
    }, [])

    useEffect(() => {
        const grabMax = async () => {
            const {data} = await apiClient.listMaxSleep() 
            if (data) setMax(data.sleeps)
        }
        grabMax()
    }, [])

    useEffect(() => {
        const grabTotal = async () => {
            const {data} = await apiClient.listTotalExercise() 
            if (data) setTotal(data.exercises[0].totalDur)
        }
        grabTotal()
    }, [])

    const renderDetailContent = () => {
        // if (isLoading) return <h1>Loading...</h1>
        // if (error) return <p className="description">No product found</p>
        return (
            <>
                <div className="activity-header">
                    <Typography variant="body2" color="textSecondary" component="h1">
                        Activity Feed
                    </Typography>
                    <div className="activity-buttons">
                        <Button variant="outlined" color="primary">
                            Add Exercise
                        </Button>
                        <Button variant="outlined" color="primary">
                            Log Sleep
                        </Button>
                        <Button variant="outlined" color="primary">
                            Record Nutrition
                        </Button>
                    </div>
                </div>
                <div className="wrapper">
                    <Card style={cardStyle}>
                        <CardContent >
                            <Typography variant="body2" color="textSecondary" component="h1">
                                Total Exercise Minutes
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {total}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={cardStyle}>
                        <CardContent >
                            <Typography variant="body2" color="textSecondary" component="h1">
                                Max Sleep Hours
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {max}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={cardStyle}>
                        <CardContent >
                            <Typography variant="body2" color="textSecondary" component="h1">
                                Avg Daily Calories
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {average}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </>
        )
    }

    return (
        <div className="activity">
            {renderDetailContent()}
        </div>


    )
}