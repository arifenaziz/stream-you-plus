import API from '../../components/Connection/API/API';

export const FORM_SUBMIT_START='FORM_SUBMIT_START';
export const FORM_SUBMIT_SUCCESS='FORM_SUBMIT_SUCCESS';
export const FORM_SUBMIT_FAIL='FORM_SUBMIT_FAIL';
export const FORM_SUBMIT_REFRESH='FORM_SUBMIT_REFRESH';




export const formSubmitStart=()=>{
	return {
		type:FORM_SUBMIT_START,    		  		
	}
}

export const formSubmitSuccess=()=>{
	return {
		type:FORM_SUBMIT_SUCCESS,		   		   		
	}
}

export const formSubmitFail=(error)=>{
	return {
		type:FORM_SUBMIT_FAIL,
		error:error    		   		
	}
}


export const submitProcess=(formData,formAction)=>{
	
	return dispatch => {
		dispatch(formSubmitStart());

		console.log('POST_DATA',formData);

		API.post(`${formAction}`,formData,{
			headers: {
                'content-type': 'multipart/form-data'
            }
		})
		.then(response=>{
			console.log(response);
			//localStorage.setItem('token',response.data.data);
			dispatch(formSubmitSuccess());
		})
		.catch(err=>{
			console.log(err);
			dispatch(formSubmitFail(err));
		})

	}

}



export const formSubmitRefresh=(error)=>{
	return {
		type:FORM_SUBMIT_REFRESH		   		   	
	}
}