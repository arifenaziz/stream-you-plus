import API from '../../components/Connection/API/API';

export const DATA_MY_DASHBOARD_FETACHING_START='DATA_MY_DASHBOARD_FETACHING_START';
export const DATA_MY_DASHBOARD_FETACHING_SUCCESS='DATA_MY_DASHBOARD_FETACHING_SUCCESS';
export const DATA_MY_DASHBOARD_FETACHING_FAIL='DATA_MY_DASHBOARD_FETACHING_FAIL';




export const dataMyDashboardFetchingStart=()=>{
	return {
		type:DATA_MY_DASHBOARD_FETACHING_START,    		  		
	}
}

export const dataMyDashboardFetchingSuccess=(dataValue)=>{
	return {
		type:DATA_MY_DASHBOARD_FETACHING_SUCCESS,
		data:dataValue		   		   		
	}
}

export const dataMyDashboardFetchingFail=(error)=>{
	return {
		type:DATA_MY_DASHBOARD_FETACHING_FAIL,
		error:error    		   		
	}
}


export const myDashboardfetchingProcess=(formAction)=>{
	
	return async dispatch => {
		dispatch(dataMyDashboardFetchingStart());

		const token = localStorage.getItem('token');

		if(!token){
			
		}else{

	 	const formData={
			token:token
		}

		await API.post('myDashboard',formData)
		.then(response=>{		
			dispatch(dataMyDashboardFetchingSuccess(response.data.data));
		})
		.catch(err=>{
			console.log(err);
			dispatch(dataMyDashboardFetchingFail(err));
		})
	}

	}

}

