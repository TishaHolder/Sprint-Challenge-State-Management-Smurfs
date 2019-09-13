
const initialState = {
    
        smurfs: [],
        isFetching: false,
        error: ""
    
};


export const reducer = (state = initialState, action) => {

    console.log("reducer", action);

    switch (action.type) {

       
        
        default:
        return state;
    }

  };