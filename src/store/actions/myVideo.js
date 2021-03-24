import API from '../../components/Connection/API/API';

export const DATA_MY_VIDEO_FETACHING_START='DATA_MY_VIDEO_FETACHING_START';
export const DATA_MY_VIDEO_FETACHING_SUCCESS='DATA_MY_VIDEO_FETACHING_SUCCESS';
export const DATA_MY_VIDEO_FETACHING_FAIL='DATA_MY_VIDEO_FETACHING_FAIL';




export const dataMyVideoFetchingStart=()=>{
	return {
		type:DATA_MY_VIDEO_FETACHING_START,    		  		
	}
}

export const dataMyVideoFetchingSuccess=(dataValue)=>{
	return {
		type:DATA_MY_VIDEO_FETACHING_SUCCESS,
		data:dataValue,
			   		   	
	}
}

export const dataMyVideoFetchingFail=(error)=>{
	return {
		type:DATA_MY_VIDEO_FETACHING_FAIL,
		error:error    		   		
	}
}


export const myVideofetchingProcess=()=>{
	
	return async dispatch => {
		dispatch(dataMyVideoFetchingStart());

		const token = localStorage.getItem('token');


	 	const formData={			
			token:token		
		}

		await API.post('myVideo',formData)
		.then(response=>{		
			dispatch(dataMyVideoFetchingSuccess(response.data.data));
		})
		.catch(err=>{
			console.log(err);
			dispatch(dataMyVideoFetchingFail(err));
		})


	}

}

