import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getSmurf } from "../actions/action.js";
import styled from 'styled-components';

import SmurfCard from "./SmurfCard.js";

import { deleteSmurf } from '../actions/action.js';

import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 
import { Grid, Form, Input, TextArea, Button, Select } from "semantic-ui-react";

const PlayersInfoDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-between;
    align-content: center;
    align-content: space-around;
    width: 100%;
    height: 500px;   

`;

function SmurfList(props) {

    useEffect(() => {

    
        // run action creator when the component mounts
        props.getSmurf();
    

     }, [getSmurf]);
    
     if (props.isFetching) {
        return <h3>Loading smurfs!</h3>;
      } 
      
      console.log("smurfs here: ", props.smurfs);
    
      return(
        <PlayersInfoDiv>
        

        {props.smurfs.map ( (smurf, index) => 

             <SmurfCard key = {index} smurf = {smurf} deleteSmurf = {props.deleteSmurf}/>  
        )}

    </PlayersInfoDiv>
    );
        

}

const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
      isFetching: state.isFetching,
      error: state.error
    };
};
  

export default connect(
    mapStateToProps,
    { getSmurf , deleteSmurf }
)(SmurfList);


