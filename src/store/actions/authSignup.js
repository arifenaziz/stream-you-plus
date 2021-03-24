import axios from'axios';
import API from '../../components/Connection/API/API';

export const AUTH_SIGNUP_START='AUTH_SIGNUP_START';
export const AUTH_SIGNUP_SUCCESS='AUTH_SIGNUP_SUCCESS';
export const AUTH_SIGNUP_FAIL='AUTH_SIGNUP_FAIL';




export const authSignupStart=()=>{
	return {
		type:AUTH_SIGNUP_START,    		  		
	}
}

export const authSignupSuccess=(tokenData)=>{
	return {
		type:AUTH_SIGNUP_SUCCESS,
		token:tokenData   		   		
	}
}

export const authSignupFail=(error)=>{
	return {
		type:AUTH_SIGNUP_FAIL,
		error:error    		   		
	}
}


export const auth=(mData)=>{
	
	return dispatch => {
		dispatch(authSignupStart());

		const authData={
			mData
		}

		let url="http://localhost/previous/marketplace/api/react-app/api/signup";


		console.log('POST_DATA',mData);

		API.post(`signup`,mData)
		.then(response=>{
			console.log(response);
			//localStorage.setItem('token',response.data.data);
			dispatch(authSignupSuccess(response.data.data.tokenData));
		})
		.catch(err=>{
			console.log(err);
			dispatch(authSignupFail(err));
		})

	}

}

