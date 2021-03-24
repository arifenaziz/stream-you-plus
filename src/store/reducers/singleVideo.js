import * as actionType from '../actions/singleVideo';
import moment from 'moment';

const today = moment();


const initialState={
    data:{},
    details:[],
    comments:[],
    error:false,
    loading:false,
    success:false
}



const singleVideoReducer = (state = initialState,action) =>{

    switch(action.type){

        case actionType.DATA_VIDEO_FETACHING_START:

        return{
            ...state,            
            error:null,
            loading:true
        }
  

        case actionType.DATA_VIDEO_FETACHING_SUCCESS:

        return{
            ...state,
            data:action.data,                                  
            details:action.details,
            comments:action.comments,
            error:null,
            loading:false,
            success:true
        }

        case actionType.DATA_VIDEO_FETACHING_FAIL:

            return{
                ...state,            
                error:action.error,
                loading:false,
                success:false,
                // data:{},
                // details:[]
         } 

         case actionType.DATA_VIDEO_LIKE_TOGGLE:


         if(action.liked==0){

        return{
            ...state,
            data:{
                ...state.data,
                like_count:Number(state.data.like_count) + 1,
                liked:1,
                dislike_count:state.data.dislike_count <= 0 || action.disliked==0 ? state.data.dislike_count : Number(state.data.dislike_count) - 1,
                disliked:0                
            }
        }

        }else{


        return{
            ...state,
            data:{
                ...state.data,
                like_count:Number(state.data.like_count) - 1,
                liked:0
            }
        }


        }


    case actionType.DATA_VIDEO_DISLIKE_TOGGLE:


         if(action.disliked==0){

        return{
            ...state,
            data:{
                ...state.data,
                like_count:state.data.like_count <= 0 || action.liked==0 ? state.data.like_count : Number(state.data.like_count) - 1,                
                liked:0,                
                dislike_count:Number(state.data.dislike_count) + 1,
                disliked:1
            }
        }

        }else{


        return{
            ...state,
            data:{
                ...state.data,
                dislike_count:Number(state.data.dislike_count) - 1,
                disliked:0
            }
        }


        }



        case actionType.DATA_VIDEO_SUBSCRIBER_TOGGLE:


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
        



        case actionType.DATA_VIDEO_COMMENT_PROCESS:  
    

       const insertVaue={             
            'main_id' : Math.random(),
            'comment': action.comment,
            'name' : action.user_name,
            'created_at':today.format('YYYY-MM-DD H:mm:ss')
        }

        
        return{
            ...state,
        comments: state.comments.concat(insertVaue)
        }




        default:
        return state;


    }


}

export default singleVideoReducer;