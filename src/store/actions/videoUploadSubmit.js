import API from '../../components/Connection/API/API';

export const VIDEO_SUBMIT_START='VIDEO_SUBMIT_START';
export const VIDEO_SUBMIT_SUCCESS='VIDEO_SUBMIT_SUCCESS';
export const CHANNEL_FATCHING_SUCCESS='CHANNEL_FATCHING_SUCCESS';
export const VIDEO_SUBMIT_FAIL='VIDEO_SUBMIT_FAIL';




export const videoSubmitStart=()=>{
	return {
		type:VIDEO_SUBMIT_START,    		  		
	}
}

export const videoSubmitSuccess=()=>{
	return {
		type:VIDEO_SUBMIT_SUCCESS,		   		   		
	}
}

export const videoSubmitFail=(error)=>{
	return {
		type:VIDEO_SUBMIT_FAIL,
		error:error    		   		
	}
}


export const videoSubmitProcess=(formData)=>{
	
	return dispatch => {
		dispatch(videoSubmitStart());

		console.log('POST_DATA',formData);

		API.post('videoUpload',formData,{
			headers: {
                'content-type': 'multipart/form-data'
            }
		})
		.then(response=>{
			console.log(response);
			//localStorage.setItem('token',response.data.data);
			dispatch(videoSubmitSuccess());
		})
		.catch(err=>{
			console.log(err);
			dispatch(videoSubmitFail(err));
		})

	}

}


export const listChannelFetchingSuccess=(cValue)=>{
	return {
		type:CHANNEL_FATCHING_SUCCESS,
		channles:cValue,
			   		   	
	}
}



export const listChannelfetchingProcess=()=>{
	
	return async dispatch => {
		//dispatch(dataAllChannelFetchingStart());

		const token = localStorage.getItem('token');

	 	const formData={			
			token:token
		}

		await API.post('channelList',formData)
		.then(response=>{		
			dispatch(listChannelFetchingSuccess(response.data.data));
		})
		.catch(err=>{
			console.log(err);
			//dispatch(dataAllChannelFetchingFail(err));
		})


	}

}
