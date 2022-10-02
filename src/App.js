import React from 'react'
import Header from './Component/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { makeStyles } from '@material-ui/core';
import Homepage from "./page/Homepage";



const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Header/>
      <Routes>
      <Route path="/" element={<Homepage/>} exact />
        

      </Routes>
      
    </div>
    </BrowserRouter>
    
  )
}

export default App