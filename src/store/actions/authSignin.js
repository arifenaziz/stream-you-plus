import axios from'axios';
import API from '../../components/Connection/API/API';

export const AUTH_SIGNIN_START='AUTH_SIGNIN_START';
export const AUTH_SIGNIN_RELOAD='AUTH_SIGNIN_RELOAD';
export const AUTH_SIGNIN_SUCCESS='AUTH_SIGNIN_SUCCESS';
export const AUTH_SIGNIN_FAIL='AUTH_SIGNIN_FAIL';
export const AUTH_SIGNIN_LOGOUT='AUTH_SIGNIN_LOGOUT';



export const authSigninStart=()=>{
	return {
		type:AUTH_SIGNIN_START,    		  		
	}
}

export const authReload=()=>{
	return {
		type:AUTH_SIGNIN_RELOAD,    		  		
	}
}

export const authSigninSuccess=(tokenData,username)=>{
	return {
		type:AUTH_SIGNIN_SUCCESS,
		token:tokenData,
		name:username   		   		
	}
}

export const authSigninFail=(error)=>{
	return {
		type:AUTH_SIGNIN_FAIL,
		error:error    		   		
	}
}

export const authSigninLogout=()=>{
	localStorage.removeItem('token');
	return {
		type:AUTH_SIGNIN_LOGOUT,			   		
	}
}

export const auth=(mData)=>{
	
	return dispatch => {
		dispatch(authSigninStart());

		// const authData={
		// 	mData
		// }
		


		console.log('POST_DATA',mData);

		API.post(`signin`,mData)
		.then(response=>{
			console.log(response);
			console.log(response.data.data.token);
			console.log(response.data.data.name);
			localStorage.setItem('token',response.data.data.token);
			dispatch(authSigninSuccess(response.data.data.token,response.data.data.name));
		})
		.catch(err=>{
			console.log(err);
			dispatch(authSigninFail(err));
		})

	}

}


export const authSessionCheck = () => {

	return dispatch => {

		const token = localStorage.getItem('token');
		
		if(!token){
			dispatch(authSigninLogout());
		}else{				
			dispatch(authReload());	
				const authData={
					token:token
				}					
								
								
				API.post(`tokenAuth`,authData)
				.then(response=>{
					console.log(response);
					// console.log(response.data.data.token);
					// console.log(response.data.data.name);
					localStorage.setItem('token',response.data.data.token);
					dispatch(authSigninSuccess(response.data.data.token,response.data.data.name));
				})
				.catch(err=>{
					console.log(err);
					//dispatch(authSigninLogout());
				})
		
			



		}

	}

}