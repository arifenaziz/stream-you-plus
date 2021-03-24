import * as actionType from '../actions/videoUploadSubmit';

const initialState={        
    error:false,
    loading:false,
    success:false
}



const formSubmitReducer = (state = initialState,action) =>{
    switch(action.type){

        case actionType.VIDEO_SUBMIT_START:

        return{
            ...state,            
            error:null,
            loading:true
        }
  

        case actionType.VIDEO_SUBMIT_SUCCESS:

        return{
            ...state,                                  
            error:null,
            loading:false,
            success:true
        }

        case actionType.VIDEO_SUBMIT_FAIL:

            return{
                ...state,            
                error:action.error,
                loading:false,
                success:false
         }          

        default:
        return state;


    }


}

export default formSubmitReducer;