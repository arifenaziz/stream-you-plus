import * as actionType from '../actions/singleCategory';

const initialState={
    data:{},
    details:[],
    error:false,
    loading:false,
    success:false
}



const singleCategoryReducer = (state = initialState,action) =>{

    switch(action.type){

        case actionType.DATA_SINGLE_CATEGORY_FETACHING_START:

        return{
            ...state,            
            error:null,
            loading:true
        }
  

        case actionType.DATA_SINGLE_CATEGORY_FETACHING_SUCCESS:

        return{
            ...state,
            data:action.data,                                  
            details:action.details,
            error:null,
            loading:false,
            success:true
        }

        case actionType.DATA_SINGLE_CATEGORY_FETACHING_FAIL:

            return{
                ...state,            
                error:action.error,
                loading:false,
                success:false,
                // data:{},
                // details:[]
         }          


        default:
        return state;


    }


}

export default singleCategoryReducer;