import * as actionType from '../actions/singleChannel';

const initialState={
    data:{},
    details:[],    
    error:false,
    loading:false,
    success:false
}



const singleChannelReducer = (state = initialState,action) =>{

    switch(action.type){

        case actionType.DATA_CHANNEL_FETACHING_START:

        return{
            ...state,            
            error:null,
            loading:true
        }
  

        case actionType.DATA_CHANNEL_FETACHING_SUCCESS:

        return{
            ...state,
            data:action.data,                                  
            details:action.details,            
            error:null,
            loading:false,
            success:true
        }

        case actionType.DATA_CHANNEL_FETACHING_FAIL:

            return{
                ...state,            
                error:action.error,
                loading:false,
                success:false,
                // data:{},
                // details:[]
         }          


        case actionType.DATA_CHANNEL_SINGLE_SUBSCRIBER_TOGGLE:


         if(action.subscribe==0){

        return{
            ...state,
            data:{
                ...state.data,        
                subscriber_count:Number(state.data.subscriber_count) + 1,
                subscribe:1
            }
        }

        }else{


        return{
            ...state,
            data:{
                ...state.data,
                subscriber_count:Number(state.data.subscriber_count) - 1,
                subscribe:0
            }
        }


        }         

        default:
        return state;


    }


}

export default singleChannelReducer;