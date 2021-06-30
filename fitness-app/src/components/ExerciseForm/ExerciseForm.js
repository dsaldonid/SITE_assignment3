import Button from '@material-ui/core/Button';
import { useState } from "react"
import { Grid, Paper ,Avatar, TextField} from '@material-ui/core';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import axios from "axios"
import { useNavigate } from "react-router-dom"
import apiClient from '../../services/apiClient';

export default function ExerciseForm({ user, addExercise }){
    const navigate = useNavigate()
    const [isProcessing, setIsProcessing] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
    name: "",
    category: "",
    duration: "",
    intensity:""
  })

    
    const handleOnInputChange = (event) => {
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }

    const handleOnSubmit = async () => {
        setIsProcessing(true)
        setErrors((e) => ({ ...e, form: null }))
        
        
        const {data, error} = await apiClient.createExercise(
            {
                name: form.name, 
                category:form.category,
                duration: form.duration,
                intensity: form.intensity
            })
            console.log(data)
            
            if (error){
                setErrors((e) => ({ ...e, form:error}))
              }
            if (data){
                // addExercise(data.exercise)
                setForm({
                    name: "",
                    category: "",
                    duration: "",
                    intensity:""
            })
              }
              setIsProcessing(false)
              navigate("/exercise")
      }

    const paperStyle = {
        padding:20,
        height:"70vh",
        width:280,
        margin:"20px auto"
    }
    return(
        <Grid>
            <Paper elevation = {10} style= {paperStyle}>
                <Grid align = "center">
                    <Avatar>
                        <FitnessCenterIcon/>
                    </Avatar>
                    <h2>
                        Record Nutrition
                    </h2>
                </Grid>
                <TextField  
                    onChange={handleOnInputChange} 
                    name ="name"
                    label = "Name" 
                    placeholder = "Enter exercise name" 
                    fullWidth 
                    required
                />
                <TextField 
                    onChange={handleOnInputChange} 
                    name ="category"
                    label = "Category" 
                    placeholder = "Enter exercise category" 
                    fullWidth 
                    required
                />
                <TextField 
                    onChange={handleOnInputChange} 
                    name ="duration"
                    label = "Duration" 
                    placeholder = "Enter exercise duration" 
                    fullWidth 
                    required
                />
                <TextField 
                    onChange={handleOnInputChange} 
                    name ="intensity"
                    label = "Intensity" 
                    placeholder = "Enter exercise intensity" 
                    fullWidth 
                    required
                />
                <Button 
                    onClick ={handleOnSubmit}
                    type = 'submit' 
                    variant = "contained" 
                    color = 'primary' 
                    fullWidth
                    >Record Exercise
                </Button>
            </Paper>
        </Grid>
    )
}