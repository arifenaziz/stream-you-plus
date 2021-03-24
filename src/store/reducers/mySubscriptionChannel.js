import * as actionType from '../actions/mySubscriptionChannel';

const initialState={
    data:[],
    error:false,
    loading:false,
    success:false
}



const mySubChannelReducer = (state = initialState,action) =>{

    switch(action.type){

        case actionType.DATA_MY_SUB_CHANNEL_FETACHING_START:

        return{
            ...state,            
            error:null,
            loading:true
        }
  

        case actionType.DATA_MY_SUB_CHANNEL_FETACHING_SUCCESS:

        return{
            ...state,
            data:action.data,                                  
            error:null,
            loading:false,
            success:true
        }

        case actionType.DATA_MY_SUB_CHANNEL_FETACHING_FAIL:

            return{
                ...state,            
                error:action.error,
                loading:false,
                success:false,
                //data:[]
         }          

         
        case actionType.DATA_MY_SUB_CHANNEL_REMOVE_PROCESS:

        const existingIndex=state.data.findIndex(item=>item.main_id===action.channel_id);

         const updatedDataList=[...state.data];

         if(action.subscribe==1){

         updatedDataList.splice(existingIndex, 1);
        

        return{
            ...state,
            data:updatedDataList
        }

        
        }        
        


        default:
        return state;


    }


}

export default mySubChannelReducer;