import API from '../../components/Connection/API/API';

export const DATA_ALL_CHANNEL_FETACHING_START='DATA_ALL_CHANNEL_FETACHING_START';
export const DATA_ALL_CHANNEL_FETACHING_SUCCESS='DATA_ALL_CHANNEL_FETACHING_SUCCESS';
export const DATA_ALL_CHANNEL_FETACHING_FAIL='DATA_ALL_CHANNEL_FETACHING_FAIL';
export const DATA_CHANNEL_SUBSCRIBER_TOGGLE='DATA_CHANNEL_SUBSCRIBER_TOGGLE';




export const dataAllChannelFetchingStart=()=>{
	return {
		type:DATA_ALL_CHANNEL_FETACHING_START,    		  		
	}
}

export const dataAllChannelFetchingSuccess=(dataValue)=>{
	return {
		type:DATA_ALL_CHANNEL_FETACHING_SUCCESS,
		data:dataValue,
			   		   	
	}
}

export const dataAllChannelFetchingFail=(error)=>{
	return {
		type:DATA_ALL_CHANNEL_FETACHING_FAIL,
		error:error    		   		
	}
}


export const allChannelfetchingProcess=()=>{
	
	return async dispatch => {
		dispatch(dataAllChannelFetchingStart());

		const token = localStorage.getItem('token');

	 	const formData={
			flag:"yes",
			token:token
		}

		await API.post('allChannel',formData)
		.then(response=>{		
			dispatch(dataAllChannelFetchingSuccess(response.data.data));
		})
		.catch(err=>{
			console.log(err);
			dispatch(dataAllChannelFetchingFail(err));
		})


	}

}



export const channelSubscriberToggleProcessing=(channel_id,subscribe,subscriber_count)=>{
	return {
		type:DATA_CHANNEL_SUBSCRIBER_TOGGLE,			   		   	
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
			dispatch(dataAllChannelFetchingFail(err));
		})


	 }



}