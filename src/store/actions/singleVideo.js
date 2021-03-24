import API from '../../components/Connection/API/API';

export const DATA_VIDEO_FETACHING_START='DATA_VIDEO_FETACHING_START';
export const DATA_VIDEO_FETACHING_SUCCESS='DATA_VIDEO_FETACHING_SUCCESS';
export const DATA_VIDEO_WATCH_FETACHING_SUCCESS='DATA_VIDEO_WATCH_FETACHING_SUCCESS';
export const DATA_VIDEO_FETACHING_FAIL='DATA_VIDEO_FETACHING_FAIL';
export const DATA_VIDEO_LIKE_TOGGLE='DATA_VIDEO_LIKE_TOGGLE';
export const DATA_VIDEO_DISLIKE_TOGGLE='DATA_VIDEO_DISLIKE_TOGGLE';
export const DATA_VIDEO_SUBSCRIBER_TOGGLE='DATA_VIDEO_SUBSCRIBER_TOGGLE';
export const DATA_VIDEO_COMMENT_PROCESS='DATA_VIDEO_COMMENT_PROCESS';



export const dataVideoFetchingStart=()=>{
	return {
		type:DATA_VIDEO_FETACHING_START,    		  		
	}
}

export const dataVideoFetchingSuccess=(dataValue,dataDetails,dataComments)=>{
	return {
		type:DATA_VIDEO_FETACHING_SUCCESS,
		data:dataValue,
		details:dataDetails,
		comments:dataComments	   		   		
	}
}





export const dataVideoFetchingFail=(error)=>{
	return {
		type:DATA_VIDEO_FETACHING_FAIL,
		error:error    		   		
	}
}


export const singleVideofetchingProcess=(video_id)=>{
	
	return async dispatch => {
		dispatch(dataVideoFetchingStart());

		const token = localStorage.getItem('token');


	 	const formData={
			vid:video_id,
			token:token
		}

		await API.post('videoSingle',formData)
		.then(response=>{		
			dispatch(dataVideoFetchingSuccess(response.data.data.master,response.data.data.details,response.data.data.comments));
		})
		.catch(err=>{
			console.log(err);
			dispatch(dataVideoFetchingFail(err));
		})


	}

}


export const singleVideoWatchingProcess=(video_id)=>{
	
	return async dispatch => {
		
		
	 	const formData={
			vid:video_id,
		}

		await API.post('videoWatch',formData)
		.then(response=>{		
			//dispatch(dataVideoWatchFetchingSuccess(response.data.data.watch));
		})
		.catch(err=>{
			console.log(err);
			dispatch(dataVideoFetchingFail(err));
		})


	}

}


export const likeToggleProcessing=(liked,like_count,disliked)=>{
	return {
		type:DATA_VIDEO_LIKE_TOGGLE,			   		   	
		liked:liked,
		like_count:like_count,
		disliked:disliked
	}
}




export const singleVideoLikeToggleProcess=(video_id,liked,like_count,disliked)=>{
	
	return async dispatch => {	


	    const token = localStorage.getItem('token');


	    const formData={
			vid:video_id,
			token:token,
			type:"like",
			liked:liked,
			like_count:like_count
		}



		await API.post('videoLikeReaction',formData)
		.then(response=>{		
			//dispatch(dataVideoWatchFetchingSuccess(response.data.data.watch));
			dispatch(likeToggleProcessing(liked,like_count,disliked));
		})
		.catch(err=>{
			console.log(err);
			dispatch(dataVideoFetchingFail(err));
		})


	}




}



export const dislikeToggleProcessing=(disliked,dislike_count,liked)=>{
	return {
		type:DATA_VIDEO_DISLIKE_TOGGLE,			   		   	
		disliked:disliked,
		dislike_count:dislike_count,
		liked:liked
	}
}


	export const singleVideoDislikeToggleProcess=(video_id,disliked,dislike_count,liked)=>{
	
	return async dispatch => {	

		const token = localStorage.getItem('token');
		
	    const formData={
			vid:video_id,
			token:token,
			type:"dislike",
			disliked:disliked,
			dislike_count:dislike_count
		}

		await API.post('videoDislikeReaction',formData)
		.then(response=>{		
			dispatch(dislikeToggleProcessing(disliked,dislike_count,liked));
		})
		.catch(err=>{
			console.log(err);
			dispatch(dataVideoFetchingFail(err));
		})


	}

}


export const subscriberToggleProcessing=(subscribe,subscriber_count)=>{
	return {
		type:DATA_VIDEO_SUBSCRIBER_TOGGLE,			   		   	
		subscribe:subscribe,
		subscriber_count:subscriber_count,
	}
}




	export const channelSubscribeToggleProcess=(channel_id,subscribe,subscriber_count)=>{
	
	return async dispatch => {	

		const token = localStorage.getItem('token');
		
	    const formData={
			cid:channel_id,
			token:token,			
			subscribe:subscribe,
			subscriber_count:subscriber_count
		}

		await API.post('channelSubscribe',formData)
		.then(response=>{		
			dispatch(subscriberToggleProcessing(subscribe,subscriber_count));
		})
		.catch(err=>{
			console.log(err);
			dispatch(dataVideoFetchingFail(err));
		})


	}

}



export const commentProcessing=(comment,user_name)=>{
	return {
		type:DATA_VIDEO_COMMENT_PROCESS,			   		   	
		comment:comment,
		user_name:user_name,
	}
}




	export const videoCommentProcess=(video_id,comment,user_name)=>{
	
	return async dispatch => {	


		



		const token = localStorage.getItem('token');
		
	    const formData={
			vid:video_id,
			token:token,			
			comment:comment			
		}

		await API.post('videoComment',formData)
		.then(response=>{		
			dispatch(commentProcessing(comment,user_name));
		})
		.catch(err=>{
			console.log(err);
			dispatch(dataVideoFetchingFail(err));
		})


	}

}