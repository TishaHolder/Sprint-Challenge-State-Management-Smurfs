import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import axios from "axios";

import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 
import { Grid, Form, Input, TextArea, Button, Select, Card, Icon } from "semantic-ui-react";

function SmurfCard(props){

    

    const handleClick = (event) => {
        
        props.deleteSmurf(props.smurf.id);
        window.location.reload();//refreshes the window 
    }

    return( 

        <Grid.Column padded key={props.id}>
        <Card>
        <Card.Content>
            <Card.Header>{props.smurf.name} <Icon onClick = {handleClick } className = "delete-icon" name='delete' /></Card.Header>
            <Card.Description>{`Age: ${props.smurf.age}`}</Card.Description>
            <Card.Description>{`Height: ${props.smurf.height}`}</Card.Description>           
            
        </Card.Content>
        </Card>
        </Grid.Column>   
    );

}

export default SmurfCard;


