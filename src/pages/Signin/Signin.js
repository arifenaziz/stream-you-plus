import { useState } from 'react';
import {Link} from 'react-router-dom';
import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import {useSelector,useDispatch} from 'react-redux';
import classes from './Signin.module.css';
import {useHistory} from 'react-router-dom';


import * as authAction from '../../../src/store/actions/authSignin';

const Signin = () => {

   const authLoading=useSelector(state=>state.authSignin.loading);
   const authError=useSelector(state=>state.authSignin.error);
   const isAuthenticated=useSelector(state=>state.authSignin.token !== null);

   const usedispatch=useDispatch();
   let history = useHistory();
   const INITIAL_STATE={

      contactForm: {          
          email: {
              elementType: 'input',
              elementConfig: {
                  type: 'email',
                  placeholder: 'Your Email'
              },
              value: '',
              label:'Email',
              validation: {
                  required: true,
                  isEmail: true
              },
              valid: false,
              touched: false
          },
          password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Your Password'
            },
            value: '',
            label:'Password',
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
            touched: false
        },
      },

      formIsValid: false,

  }
   const [formsConfig,SetFormConfig]=useState(INITIAL_STATE); 

const formElementArray=[];


for(let key in formsConfig.contactForm){
  formElementArray.push({
      id:key,
      config:formsConfig.contactForm[key]
  })
}



const checkValidity=(value, rules)=> {
  let isValid = true;
  if (!rules) {
      return true;
  }
  
  if (rules.required) {
      isValid = value.trim() !== '' && isValid;
  }

  if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
  }

  if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid
  }

  if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid
  }

  // if (rules.isNumeric) {
  //     const pattern = /^\d+$/;
  //     isValid = pattern.test(value) && isValid
  // }

  return isValid;
}



const inputChangedHandaler = (event,inputIdentifier) => {

const updatedContactForm={
  ...formsConfig.contactForm
}

const updatedFormElement={
  ...updatedContactForm[inputIdentifier]
}

updatedFormElement.value=event.target.value;
updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
updatedFormElement.touched = true;

updatedContactForm[inputIdentifier]=updatedFormElement;

let formIsValid = true;
for (let inputIdentifier in updatedContactForm) {
  formIsValid = updatedContactForm[inputIdentifier].valid && formIsValid;
}

SetFormConfig({
  contactForm:updatedContactForm,
  formIsValid: formIsValid    
})


}




const FormValueReset = () =>{
   SetFormConfig(INITIAL_STATE);
}



const contactFormProcess = (event) => {
  event.preventDefault();
  const formData={}

  for(let formElement in formsConfig.contactForm){
      formData[formElement]=formsConfig.contactForm[formElement].value
  }


  usedispatch(authAction.auth(formData));
  FormValueReset();

}



let form = formElementArray.map(element=>(

   <Input 
   key={element.id}
   elementType={element.config.elementType} 
   elementConfig={element.config.elementConfig}
   value={element.config.value}
   label={element.config.label}
   invalid={!element.config.valid}
   shouldValidate={element.config.validation}            
   touched={element.config.touched}            
   changed={(event)=>inputChangedHandaler(event,element.id)}
   />


));


if(authLoading){
   form=<Spinner />
}

let formErrorMsg=null;

if(authError){
   formErrorMsg=<p className={classes.Error}>Error Occured, Please try Again</p>
}

let afterSignup=null;

if(isAuthenticated){
  
  history.push("/channels");
}


    return(
    <>
      <div className="row">
        <div className="col-md-12 p-5 bg-white full-height">

                  <div className="login-main-left">
                     <div className="text-center mb-5 login-main-left-header pt-4">                        
                        <h5 className="mt-3 mb-3">Welcome to Stream You</h5>
                        <p>Social Video Platform for <br/> you and your family and friends.</p>
                     </div>

                     {formErrorMsg}

                     <form onSubmit={contactFormProcess}>


                       {form}


                        <div className="mt-4">
                           <button type="submit" className="btn btn-outline-primary btn-block btn-lg" disabled={!formsConfig.formIsValid}>Sign In</button>
                        </div>


                     </form>

                     {afterSignup}
                   
                                 
                     <div className="text-center mt-5">                        
                        <p className="light-gray">Don’t have an account? <Link to="/signup"> Signup </Link> </p>
                     </div>

                  </div>
               </div>
   </div>   
</>
    )
}

export default Signin;