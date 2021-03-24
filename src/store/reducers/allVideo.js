import * as actionType from '../actions/allVideo';

const initialState={
    data:[],    
    error:false,
    loading:false,
    success:false
}



const allVideoReducer = (state = initialState,action) =>{

    switch(action.type){

        case actionType.DATA_ALL_VIDEO_FETACHING_START:

        return{
            ...state,            
            error:null,
            loading:true
        }
  

        case actionType.DATA_ALL_VIDEO_FETACHING_SUCCESS:

        return{
            ...state,
            data:action.data,                                              
            error:null,
            loading:false,
            success:true
        }

        case actionType.DATA_ALL_VIDEO_FETACHING_FAIL:

            return{
                ...state,            
                error:action.error,
                loading:false,
                success:false,
                //data:[],                
         }          



        default:
        return state;


    }


}

export default allVideoReducer;