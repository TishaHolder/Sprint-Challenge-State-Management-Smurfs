import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAIL,

    ADD_SMURF_START,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAIL,

    DELETE_SMURF_START,
    DELETE_SMURF_SUCCESS,
    DELETE_SMURF_FAIL
  } from "../actions/action.js";

const initialState = {
    
        smurfs: [],
        isFetching: false,
        error: ""
    
};

export const reducer = (state = initialState, action) => {

    console.log("reducer", action);

    switch (action.type) {

        case FETCH_SMURF_START:
        return {
            ...state,
            isFetching: true, //INFORM OUR APP THAT WE ARE CURRENTLY FETCHING SOME DATA FROM THE API
            error: "" //CLEAR OUT ERROR IF WE ARE TRANSITIONING FROM AN ERROR STATE
        };

        case FETCH_SMURF_SUCCESS:
        return {
            ...state,
            smurfs: action.payload,
            isFetching: false,
            error: ""
        };

        case FETCH_SMURF_FAIL:
        return {
            ...state,
            error: action.payload,
            isFetching: false //we have gotten our call back and we are no longer fetching
        };

        case ADD_SMURF_START:
        return {
            ...state            
        };

        case ADD_SMURF_SUCCESS:
        return {
            ...state,
           smurfs: action.payload
                          
        };

        case ADD_SMURF_FAIL:
        return {
            ...state,
            error: action.payload            
        };

        case DELETE_SMURF_START:
        return {
            ...state            
        };

        
        
        default:
        return state;
    }

  };

