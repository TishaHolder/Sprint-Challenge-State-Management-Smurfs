import React, { Component } from "react";
import "./App.css";

import styled from 'styled-components';
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 
import { Grid, Form, Input, TextArea, Button, Select } from "semantic-ui-react";

import SmurfList from "./SmurfList.js";
import AddForm from "./AddForm.js";

//styled component - main page container
const Container = styled.div`
    display: flex;
    justify-content: center;
   

`;

//styled component - div containing the main heading and the cards
const AppContainer = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
   
    
    

`;

//styled component - page heading
const MainHeading = styled.div`
width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: black;
  text-stroke: 5px black;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
  0 2px 4px rgba(0, 0, 0, 0.24); 
 

`;

function App() {
  return (

    <Container>
      <AppContainer>
      
      
      <MainHeading>Smurf Village</MainHeading>    

      <AddForm />  

      <SmurfList />

      </AppContainer>
      
    </Container>
  );
}

export default App;

