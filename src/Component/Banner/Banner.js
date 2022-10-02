import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import Carousel from './Carousel';

const useStyles = makeStyles(()=>({
    banner:{
        backgroundImage: "url(./banner2.jpg)",
    },
    bannerContent:{
        height:400,
        display:"flex",
        flexDirection:"column",
        paddingTop:25,
        justifyContent:"space-around",
    },
    tagline:{

    }

}));

function Banner() {
    const classes = useStyles();
  return <div className={classes.banner}
  >
    <Container className={classes.bannerContent}>
   <div className={classes.tagline}>
    <Typography variant='h2'
    style={{
        fontWeight:"bold",
        marginBottom:15,
        fontFamily:"Montserrat",
    }}>
        Crypto Hunter
    </Typography>

    <Typography variant="subtitle2"
    style={{
        color:"darkgray",
        textTransform:"capitalized",
        fontFamily:"Montserrat",
    }}>
        Get All Information Regarding Your Crypto Currency
    </Typography>



   </div>
   <Carousel/>
    </Container>

  </div>
};

export default Banner
