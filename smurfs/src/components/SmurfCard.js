import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import axios from "axios";

import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 
import { Grid, Form, Input, TextArea, Button, Select, Card, Icon } from "semantic-ui-react";


function SmurfCard(props){

    //console.log("player card", props);

    return( 

        <Grid.Column padded key={props.id}>
        <Card>
        <Card.Content>
            <Card.Header>{props.smurf.name} </Card.Header>
            <Card.Description>{`Age: ${props.smurf.age}`}</Card.Description>
            <Card.Description>{`Height: ${props.smurf.height}`}</Card.Description>           
            
        </Card.Content>
        </Card>
        </Grid.Column>   
    );


}

export default SmurfCard;

