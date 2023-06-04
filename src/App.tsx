import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { EnterNewData } from './components/enterNewData';
import { Entries } from './components/entries';
import { Grid, Stack } from '@mui/material';

function App() {

  return (
    <>
    <Grid container alignItems={"center"} justifyContent={"center"}>
      <Grid xs={12}>
        <Header />
      </Grid>
      <Grid xs={12}>
        <EnterNewData />      
      </Grid>
      <Grid xs={12}>
        <Entries />
      </Grid>     
    </Grid>
    </>
  )
}

export default App;
