import "./Activity.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
// import axios from "axios"
import Typography from "@material-ui/core/Typography";
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

export default function Activity() {
    // const { productId } = useParams()
    // const [product, setProduct] = useState({})
    // const [isLoading, setIsLoading] = useState(false)
    // const [error, setError] = useState(null)

    // useEffect(() => {
    //     const fetchProduct = async () => {
    //     setIsLoading(true)

    //     try {
    //         const res = await axios.get(`http://localhost:3001/${productId}`)
    //         if (res?.data?.product) {
    //         setProduct(res.data.product)
    //         }
    //     } catch (err) {
    //         setError(err)
    //     } finally {
    //         setIsLoading(false)
    //     }
    //     }

    //     fetchProduct()
    // }, [productId])

  const renderDetailContent = () => {
    // if (isLoading) return <h1>Loading...</h1>
    // if (error) return <p className="description">No product found</p>
    return (
        <>
        <div className= "activity-header">
            <Typography variant="body2" color="textSecondary" component="h1">
                Activity Feed
            </Typography>
            <div className = "activity-buttons">
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
            <Card>
                <CardContent >
                    <Typography variant="body2" color="textSecondary" component="h1">
                        Total Exercise Minutes
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Put total hours here
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent >
                    <Typography variant="body2" color="textSecondary" component="h1">
                        Avg Sleep Hours
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Put total hours here
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent >
                    <Typography variant="body2" color="textSecondary" component="h1">
                        Avg Daily Calories
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Put total hours here
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