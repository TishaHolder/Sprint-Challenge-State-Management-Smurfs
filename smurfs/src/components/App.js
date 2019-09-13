import React, { Component } from "react";
import "./App.css";




import SmurfList from "./SmurfList.js";
import AddForm from "./AddForm.js";




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