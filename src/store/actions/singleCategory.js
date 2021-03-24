import API from '../../components/Connection/API/API';

export const DATA_SINGLE_CATEGORY_FETACHING_START='DATA_SINGLE_CATEGORY_FETACHING_START';
export const DATA_SINGLE_CATEGORY_FETACHING_SUCCESS='DATA_SINGLE_CATEGORY_FETACHING_SUCCESS';
export const DATA_SINGLE_CATEGORY_FETACHING_FAIL='DATA_SINGLE_CATEGORY_FETACHING_FAIL';



export const dataSingleCategoryFetchingStart=()=>{
	return {
		type:DATA_SINGLE_CATEGORY_FETACHING_START,    		  		
	}
}

export const dataSingleCategoryFetchingSuccess=(dataValue,dataDetails)=>{
	return {
		type:DATA_SINGLE_CATEGORY_FETACHING_SUCCESS,
		data:dataValue,
		details:dataDetails		   		   		
	}
}

export const dataSingleCategoryFetchingFail=(error)=>{
	return {
		type:DATA_SINGLE_CATEGORY_FETACHING_FAIL,
		error:error    		   		
	}
}


export const singleCategoryfetchingProcess=(category_id)=>{
	
	return async dispatch => {
		dispatch(dataSingleCategoryFetchingStart());

	 	const formData={
			cid:category_id,			
		}

		await API.post('categorySingle',formData)
		.then(response=>{		
			dispatch(dataSingleCategoryFetchingSuccess(response.data.data.master,response.data.data.details));
		})
		.catch(err=>{
			console.log(err);
			dispatch(dataSingleCategoryFetchingFail(err));
		})


	}

}





// export const channelSubscriberToggleProcessing=(channel_id,subscribe,subscriber_count)=>{
// 	return {
// 		type:DATA_CHANNEL_SINGLE_SUBSCRIBER_TOGGLE,			   		   	
// 		channel_id:channel_id,
// 		subscribe:subscribe,
// 		subscriber_count:subscriber_count,
// 	}
// }




// 	export const channelSubscribeToggleProcess=(channel_id,subscribe,subscriber_count)=>{
	
// 	 return async dispatch => {	
			
// 		const token = localStorage.getItem('token');
		
// 	    const formData={
// 			cid:channel_id,
// 			token:token,			
// 			subscribe:subscribe,
// 			subscriber_count:subscriber_count
// 		}

// 		await API.post('channelSubscribe',formData)
// 		.then(response=>{		
// 			dispatch(channelSubscriberToggleProcessing(channel_id,subscribe,subscriber_count));
// 		})
// 		.catch(err=>{
// 			console.log(err);
// 			dispatch(dataChannelFetchingFail(err));
// 		})


// 	 }



// }

