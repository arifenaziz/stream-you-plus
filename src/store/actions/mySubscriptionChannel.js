import API from '../../components/Connection/API/API';

export const DATA_MY_SUB_CHANNEL_FETACHING_START='DATA_MY_SUB_CHANNEL_FETACHING_START';
export const DATA_MY_SUB_CHANNEL_FETACHING_SUCCESS='DATA_MY_SUB_CHANNEL_FETACHING_SUCCESS';
export const DATA_MY_SUB_CHANNEL_FETACHING_FAIL='DATA_MY_SUB_CHANNEL_FETACHING_FAIL';
export const DATA_MY_SUB_CHANNEL_REMOVE_PROCESS='DATA_MY_SUB_CHANNEL_REMOVE_PROCESS';




export const dataMySubChannelFetchingStart=()=>{
	return {
		type:DATA_MY_SUB_CHANNEL_FETACHING_START,    		  		
	}
}

export const dataMySubChannelFetchingSuccess=(dataValue)=>{
	return {
		type:DATA_MY_SUB_CHANNEL_FETACHING_SUCCESS,
		data:dataValue		   		   		
	}
}

export const dataMySubChannelFetchingFail=(error)=>{
	return {
		type:DATA_MY_SUB_CHANNEL_FETACHING_FAIL,
		error:error    		   		
	}
}


export const myChannelfetchingProcess=(formAction)=>{
	
	return async dispatch => {
		dispatch(dataMySubChannelFetchingStart());

		const token = localStorage.getItem('token');

		if(!token){
			
		}else{

	 	const formData={
			token:token
		}

		await API.post('myChannelSubscribe',formData)
		.then(response=>{		
			dispatch(dataMySubChannelFetchingSuccess(response.data.data));
		})
		.catch(err=>{
			console.log(err);
			dispatch(dataMySubChannelFetchingFail(err));
		})
	}

	}

}



export const channelSubscriberRemoveProcessing=(channel_id,subscribe,subscriber_count)=>{
	return {
		type:DATA_MY_SUB_CHANNEL_REMOVE_PROCESS,			   		   	
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
			dispatch(channelSubscriberRemoveProcessing(channel_id,subscribe,subscriber_count));
		})
		.catch(err=>{
			console.log(err);
			dispatch(dataMySubChannelFetchingFail(err));
		})


	 }



}