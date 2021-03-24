import * as actionType from '../actions/formSubmit';

const initialState={        
    error:false,
    loading:false,
    success:false
}



const formSubmitReducer = (state = initialState,action) =>{
    switch(action.type){

        case actionType.FORM_SUBMIT_START:

        return{
            ...state,            
            error:null,
            loading:true
        }
  

        case actionType.FORM_SUBMIT_SUCCESS:

        return{
            ...state,                                  
            error:null,
            loading:false,
            success:true
        }

        case actionType.FORM_SUBMIT_FAIL:

            return{
                ...state,            
                error:action.error,
                loading:false,
                success:false
         }          

        case actionType.FORM_SUBMIT_REFRESH:

        return{
            ...state,                                  
            error:false,
            loading:false,
            success:false
        }         

        default:
        return state;


    }


}

export default formSubmitReducer;