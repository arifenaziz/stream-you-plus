import * as actionType from '../actions/allChannel';

const initialState={
    data:[],    
    error:false,
    loading:false,
    success:false
}



const allChannelReducer = (state = initialState,action) =>{

    switch(action.type){

        case actionType.DATA_ALL_CHANNEL_FETACHING_START:

        return{
            ...state,            
            error:null,
            loading:true
        }
  

        case actionType.DATA_ALL_CHANNEL_FETACHING_SUCCESS:

        return{
            ...state,
            data:action.data,                                              
            error:null,
            loading:false,
            success:true
        }

        case actionType.DATA_ALL_CHANNEL_FETACHING_FAIL:

            return{
                ...state,            
                error:action.error,
                loading:false,
                success:false,
                //data:[],                
         }          



        case actionType.DATA_CHANNEL_SUBSCRIBER_TOGGLE:

        const existingIndex=state.data.findIndex(item=>item.main_id===action.channel_id);

        const updatedDataList=[...state.data];

         if(action.subscribe==0){  

     updatedDataList[existingIndex].subscribe=1;
     updatedDataList[existingIndex].subscriber_count=Number(updatedDataList[existingIndex].subscriber_count) + 1;

        }else{

     updatedDataList[existingIndex].subscribe=0;
     updatedDataList[existingIndex].subscriber_count=Number(updatedDataList[existingIndex].subscriber_count) - 1;

        }

        return{
            ...state,
            data:updatedDataList
        }

     

        default:
        return state;


    }


}

export default allChannelReducer;