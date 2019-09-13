import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";

export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAIL = "DELETE_SMURF_FAILURE";

export const getSmurf = () => dispatch => {
    //BEFORE WE MAKE OUR AXIOS CALL
    //TELLS OUR FINITE STATE MACHINE THAT WE ARE IN A LOADING STATE
    dispatch({ type: FETCH_SMURF_START })
    axios
      
      .get("http://localhost:3333/smurfs")      
      
      .then(res =>
        //TELL OUR APP TO TRANSITION TO A SUCCESSFUL STATE        
      
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
        
      )
      //TELLS OUR APP THAT THE CALLED FAILED AND WE NEED TO GO INTO AN ERROR STATE
      //SENDS INTERPOLATED STRING WITH MSG: 404 NOT FOUND
      .catch(err =>
        dispatch({
          type: FETCH_SMURF_FAIL,
          payload: `${err.data} ${err.data}`
        })
        
      );

      
  };

  export const addSmurf = (newSmurf) => dispatch => {
    //BEFORE WE MAKE OUR AXIOS CALL
    //TELLS OUR FINITE STATE MACHINE THAT WE ARE IN A LOADING STATE
    dispatch({ type: ADD_SMURF_START })
    axios
      //
      .post("http://localhost:3333/smurfs", newSmurf)
      
      .then(res =>
        //TELL OUR APP TO TRANSITION TO A SUCCESSFUL STATE        

        dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
        //dispatch({ type: ADD_SMURF_SUCCESS })
        
      )
      //TELLS OUR APP THAT THE CALLED FAILED AND WE NEED TO GO INTO AN ERROR STATE
      //SENDS INTERPOLATED STRING WITH MSG: 404 NOT FOUND
      .catch(err =>
        
        dispatch({
          type: ADD_SMURF_FAIL,
          payload: err
        })
        
      );

    };

            
      
      
        
      
  };

