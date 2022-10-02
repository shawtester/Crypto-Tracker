import { AppBar, Container, MenuItem, Toolbar, Typography, Select} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import React from 'react'
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
const useStyles = makeStyles(()=>({
  title:{
    flex:1,
    color: "gold",
    fontFamily:"Montserrat",
    fontWeight:"bold",
    cursor:"pointer",
    fontSize:"50",

  }
}));


function Header() {
  const classes = useStyles();
  const navigate = useNavigate();
  const {currency, setCurrency} = CryptoState();
  console.log(currency);
  const darkTheme = createTheme({
    palette:{
      primary:{
        main:"#fff",
      },
      type:"dark",
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar position='static' color='transparent'>
      <Container>
        <Toolbar>
          <Typography className={classes.title}
          onClick={()=>navigate("/")}
          variant='h4'>
            Crypto Hunter
          </Typography>
          <Select variant="outlined" style={{
            width:100,
            height:40,
            marginReft:15,
          }}
          value={currency}
          onChange={(e)=>setCurrency(e.target.value)}>
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>

    </AppBar>
    </ThemeProvider>
  )
}

export default Header