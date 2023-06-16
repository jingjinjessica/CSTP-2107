import {  Card,  CardMedia, Box, CardContent, Typography , Grid, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Image } from 'mui-image';


const DetailPage = () => {
    const {flagName} = useParams();
    const [FlagData,setFlagData] = useState([]);

    useEffect(()=>{
        getFlagData();
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[flagName]);

    const getFlagData = async () => {
        const data = await fetch(`https://restcountries.com/v3.1/name/${flagName}`);
        const convertedJSONData = await data.json();
        setFlagData(convertedJSONData);
    }
    return (
        <>
            <Card sx={{ display: 'center', maxWidth:'md' ,margin:"200px 450px 20px ",padding:'10px'}}>
                <CardMedia
                component="img"
                sx={{ width: 400 }}
                image={FlagData[0]?.flags.png}
                alt="Flag"
                />
                <Box sx={{ display: 'center', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 1 auto' }}>
                        <Typography component="div" variant="h5">
                            {FlagData[0]?.name.common}
                        </Typography>
                        <Typography variant="subtitle3" color="text.secondary" component="div">
                            {FlagData[0]?.region}
                        </Typography>
                        <Typography variant="subtitle3"  component="div">
                            Capital: {FlagData[0]?.capital}
                        </Typography>
                        <Typography variant="subtitle3"  component="div">
                        Population: {FlagData[0]?.population}
                        </Typography>
                        <Typography align='justify' variant="subtitle1" component="div">
                        Introduction: <br/>
                        </Typography>
                        <Typography align='justify'  component="div" fontSize='0.9rem'>
                        {FlagData[0]?.flags?.alt  }
                        </Typography>
                    </CardContent>
        
                </Box>
                
            </Card>
            <Grid item align="center" >
                        <Button href={`/`} sx={{
                            bgcolor: '#73bbf7', color: '#e3f1fd',  fontWeight: '400', fontSize: '20px', marginTop: "10px",
                            ":hover": { bgcolor: "#395d7b", color: "#d7dee4" }
                        }} >Go Back
                        </Button>
            </Grid>
                
        </>
    )
}

export default DetailPage;