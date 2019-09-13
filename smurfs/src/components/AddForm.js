import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/action.js';

function AddForm (props) {

  const [newSmurf, setNewSmurf] = useState({ name: "", age: "", height: "" });

  const handleChange = (event) => {

    setNewSmurf({
        ...newSmurf,
        [event.target.name]: event.target.value
      })
      console.log("new smurf here:", newSmurf);

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addSmurf(newSmurf);
        setNewSmurf({ name: "", age: "", height: "" }); //clears the value of input
    }

  return (
    <form onSubmit = {handleSubmit}>         

        <input type = "text"
               name="name"
               onChange={handleChange} 
               value={newSmurf.name} 
               placeholder="What's your name?" />

        <input type = "number"
               name="age"
               onChange={handleChange} 
               value={newSmurf.age} 
               placeholder="How old are you?" />

        <input type = "number"
               name="height"
               onChange={handleChange} 
               value={newSmurf.height} 
               placeholder="How tall are you?" />

        <button type = "submit"> Check In </button>
        
    </form>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
    //state
  }
}

export default connect(
  mapStateToProps,
  { addSmurf }
)(AddForm);

