import { Card, Box, CardActions, Grid, Typography, CardContent, CardMedia, Button  } from '@mui/material';


// eslint-disable-next-line react/prop-types
const TableComponent = ({data}) => {
    return (
       <>
        <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={{xs:2, md:3}} columns={{xs:4, sm:8, md:12}}>
                {
                    data.map((flag) => {
                        return(
                            // eslint-disable-next-line react/jsx-key
                            <Grid item sx={3} sm={4} md={2} marginLeft='50px' marginTop='35px'>
                                <Card sx={{maxWidth:300, boxShadow: 'rgba(0, 0, 0, 0, 0.24 ) 12px 4px 8px;'}}>
                                    <CardMedia 
                                        component="img"
                                        height="150"
                                        image={flag.flags.png}
                                        alt={flag.flags.alt}
                                        sx={{border:'solid 1px #E0E0E0'}}

                                    />
                                    <CardContent>
                                        <Typography sx={{fontFamily:'Lucida Console'}} fontSize={18} fontWeight={20}>
                                            {flag.name.common}
                                        </Typography>
                                        <Typography sx={{fontFamily:'Lucida Console'}} fontSize={12} fontWeight={15} >
                                            <br />
                                            {flag.region}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button href={`/detail/${flag.name.common}`} sx={{left:160, bgcolor: '#73bbf7', color: '#e3f1fd',
                            ":hover": { bgcolor: "#395d7b", color: "#d7dee4" }}}   >
                                            Learn More
                                        </Button>
                                    </CardActions>
                                    
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
       </>
           
    )
}

export default TableComponent;