import API from '../../components/Connection/API/API';

export const DATA_ALL_VIDEO_FETACHING_START='DATA_ALL_VIDEO_FETACHING_START';
export const DATA_ALL_VIDEO_FETACHING_SUCCESS='DATA_ALL_VIDEO_FETACHING_SUCCESS';
export const DATA_ALL_VIDEO_FETACHING_FAIL='DATA_ALL_VIDEO_FETACHING_FAIL';




export const dataAllVideoFetchingStart=()=>{
	return {
		type:DATA_ALL_VIDEO_FETACHING_START,    		  		
	}
}

export const dataAllVideoFetchingSuccess=(dataValue)=>{
	return {
		type:DATA_ALL_VIDEO_FETACHING_SUCCESS,
		data:dataValue,
			   		   	
	}
}

export const dataAllVideoFetchingFail=(error)=>{
	return {
		type:DATA_ALL_VIDEO_FETACHING_FAIL,
		error:error    		   		
	}
}


export const allVideofetchingProcess=()=>{
	
	return async dispatch => {
		dispatch(dataAllVideoFetchingStart());


	 	const formData={
			flag:"yes",			
		}

		await API.post('allVideo',formData)
		.then(response=>{		
			dispatch(dataAllVideoFetchingSuccess(response.data.data));
		})
		.catch(err=>{
			console.log(err);
			dispatch(dataAllVideoFetchingFail(err));
		})


	}

}

