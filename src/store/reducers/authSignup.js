import * as actionType from '../actions/authSignup';

const initialState={    
    token:null,
    error:false,
    loading:false
}



const authsSignupReducer = (state = initialState,action) =>{
    switch(action.type){

        case actionType.AUTH_SIGNUP_START:

        return{
            ...state,            
            error:null,
            loading:true
        }

        case actionType.AUTH_SIGNUP_SUCCESS:

        return{
            ...state,  
            token:action.token,          
            error:null,
            loading:false
        }

        case actionType.AUTH_SIGNUP_FAIL:

            return{
                ...state,            
                error:action.error,
                loading:false
         } 
                  

        default:
        return state;


    }


}

export default authsSignupReducer;