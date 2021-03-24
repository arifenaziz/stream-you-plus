import * as actionType from '../actions/authSignin';

const initialState={    
    token:null,
    username:null,
    error:false,
    loading:false,
    reload:false
}



const authsSigninReducer = (state = initialState,action) =>{
    switch(action.type){

        case actionType.AUTH_SIGNIN_START:

        return{
            ...state,            
            error:null,
            loading:true
        }

        case actionType.AUTH_SIGNIN_RELOAD:

        return{
            ...state,            
            reload:true
        }        

        case actionType.AUTH_SIGNIN_SUCCESS:

        return{
            ...state,  
            token:action.token,          
            username:action.name,
            error:null,
            loading:false,
            reload:false
        }

        case actionType.AUTH_SIGNIN_FAIL:

            return{
                ...state,            
                error:action.error,
                loading:false
         } 
         
         case actionType.AUTH_SIGNIN_LOGOUT:

         return{
             ...state,
             token:null,
             username:null,
         }

        default:
        return state;


    }


}

export default authsSigninReducer;