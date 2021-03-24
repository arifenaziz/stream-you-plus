import API from '../../components/Connection/API/API';

export const DATA_ALL_CATEGORY_FETACHING_START='DATA_ALL_CATEGORY_FETACHING_START';
export const DATA_ALL_CATEGORY_FETACHING_SUCCESS='DATA_ALL_CATEGORY_FETACHING_SUCCESS';
export const DATA_ALL_CATEGORY_FETACHING_FAIL='DATA_ALL_CATEGORY_FETACHING_FAIL';




export const dataAllCategoryFetchingStart=()=>{
	return {
		type:DATA_ALL_CATEGORY_FETACHING_START,    		  		
	}
}

export const dataAllCategoryFetchingSuccess=(dataValue)=>{
	return {
		type:DATA_ALL_CATEGORY_FETACHING_SUCCESS,
		data:dataValue,
			   		   	
	}
}

export const dataAllCategoryFetchingFail=(error)=>{
	return {
		type:DATA_ALL_CATEGORY_FETACHING_FAIL,
		error:error    		   		
	}
}


export const allCategoryfetchingProcess=()=>{
	
	return async dispatch => {
		dispatch(dataAllCategoryFetchingStart());


	 	const formData={
			flag:"yes",			
		}

		await API.post('allCategory',formData)
		.then(response=>{		
			dispatch(dataAllCategoryFetchingSuccess(response.data.data));
		})
		.catch(err=>{
			console.log(err);
			dispatch(dataAllCategoryFetchingFail(err));
		})


	}

}

