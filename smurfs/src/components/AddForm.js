import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/action.js';

function AddForm (props) {

 
}

export default connect(
  mapStateToProps,
  { addSmurf }
)(AddForm);