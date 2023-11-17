import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import img1 from "../../public/static/img1.jpg"
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/system/Box';
import { AccessTime } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material';
import Link from 'next/link'

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2",
                    },

                    style: {
                        fontSize: 15
                    }
                },
                {
                    props: {
                        variant: "body3"
                    },

                    style: {
                        fontSize: 11
                    }
                }
            ]
        }
    }
})


const TourCard = ({ tour }) => {
    return (

        <Grid item xs={12} md={3} sm={6}>
            <ThemeProvider theme={theme}>
                <Paper elevation={3}>

                    <div className="card-img">
                        <img src={tour.image} alt="" />
                    </div>

                    <Box sx={{ px: 2 }}>

                        <Typography variant="subtitle1" gutterBottom>
                            {tour.name}
                        </Typography>

                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <AccessTime sx={{ width: 17 }} />
                            <Typography variant='body2' component="p" marginLeft={0.5}>{tour.duration} hours</Typography>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center" }} marginTop={2}>
                            <Rating name='read-only' value={tour.rating} readOnly precision={0.5} size='small' />
                            <Typography variant='body2' component="p" marginLeft={0.5}>{tour.rating}</Typography>
                            <Typography variant='body3' component="p" marginLeft={1.5}>({tour.numberOfReviews} reviews)</Typography>
                        </Box>

                        <Box>
                            <Typography variant='h4' component="h3" marginTop={1}>$ {tour.price}</Typography>
                        </Box>

                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>

    )
}

export default TourCard
