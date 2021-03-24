import API from '../../components/Connection/API/API';

export const DATA_CHANNEL_FETACHING_START='DATA_CHANNEL_FETACHING_START';
export const DATA_CHANNEL_FETACHING_SUCCESS='DATA_CHANNEL_FETACHING_SUCCESS';
export const DATA_CHANNEL_FETACHING_FAIL='DATA_CHANNEL_FETACHING_FAIL';
export const DATA_CHANNEL_SINGLE_SUBSCRIBER_TOGGLE='DATA_CHANNEL_SINGLE_SUBSCRIBER_TOGGLE';






export const dataChannelFetchingStart=()=>{
	return {
		type:DATA_CHANNEL_FETACHING_START,    		  		
	}
}

export const dataChannelFetchingSuccess=(dataValue,dataDetails)=>{
	return {
		type:DATA_CHANNEL_FETACHING_SUCCESS,
		data:dataValue,
		details:dataDetails		   		   		
	}
}

export const dataChannelFetchingFail=(error)=>{
	return {
		type:DATA_CHANNEL_FETACHING_FAIL,
		error:error    		   		
	}
}


export const singleChannelfetchingProcess=(channel_id)=>{
	
	return async dispatch => {
		dispatch(dataChannelFetchingStart());

		const token = localStorage.getItem('token');


	 	const formData={
			cid:channel_id,
			token:token
		}

		await API.post('channelSingle',formData)
		.then(response=>{		
			dispatch(dataChannelFetchingSuccess(response.data.data.master,response.data.data.details));
		})
		.catch(err=>{
			console.log(err);
			dispatch(dataChannelFetchingFail(err));
		})


	}

}





export const channelSubscriberToggleProcessing=(channel_id,subscribe,subscriber_count)=>{
	return {
		type:DATA_CHANNEL_SINGLE_SUBSCRIBER_TOGGLE,			   		   	
		channel_id:channel_id,
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
			dispatch(channelSubscriberToggleProcessing(channel_id,subscribe,subscriber_count));
		})
		.catch(err=>{
			console.log(err);
			dispatch(dataChannelFetchingFail(err));
		})


	 }



}

