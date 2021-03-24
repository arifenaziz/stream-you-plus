import API from '../../components/Connection/API/API';

export const DATA_MY_CHANNEL_FETACHING_START='DATA_MY_CHANNEL_FETACHING_START';
export const DATA_MY_CHANNEL_FETACHING_SUCCESS='DATA_MY_CHANNEL_FETACHING_SUCCESS';
export const DATA_MY_CHANNEL_FETACHING_FAIL='DATA_MY_CHANNEL_FETACHING_FAIL';




export const dataMyChannelFetchingStart=()=>{
	return {
		type:DATA_MY_CHANNEL_FETACHING_START,    		  		
	}
}

export const dataMyChannelFetchingSuccess=(dataValue)=>{
	return {
		type:DATA_MY_CHANNEL_FETACHING_SUCCESS,
		data:dataValue		   		   		
	}
}

export const dataMyChannelFetchingFail=(error)=>{
	return {
		type:DATA_MY_CHANNEL_FETACHING_FAIL,
		error:error    		   		
	}
}


export const myChannelfetchingProcess=(formAction)=>{
	
	return async dispatch => {
		dispatch(dataMyChannelFetchingStart());

		const token = localStorage.getItem('token');

		if(!token){
			
		}else{

	 	const formData={
			token:token
		}

		await API.post('myChannel',formData)
		.then(response=>{		
			dispatch(dataMyChannelFetchingSuccess(response.data.data));
		})
		.catch(err=>{
			console.log(err);
			dispatch(dataMyChannelFetchingFail(err));
		})
	}

	}

}

