import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import TourCard from './Tourcard'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import cities from "../../pages/data.json"

import { Typography } from '@mui/material'


const Home = () => {
    return (
        <div>
            <Container sx={{ marginTop: 5 }}>
                {
                    cities.map((city) => (
                        <>
                            <Typography variant='h4' component="h2" marginTop={5} marginBottom={3}>
                                Top {city.name} Tours
                            </Typography>

                            <Grid container spacing={3}>
                                {
                                    city.tours.map((tour, index) => (
                                        <TourCard tour={tour} key={index} />
                                    ))
                                }
                            </Grid>
                        </>
                    ))
                }
            </Container>
        </div>
    )
}

export default Home
