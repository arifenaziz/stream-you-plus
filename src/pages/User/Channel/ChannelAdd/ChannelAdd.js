import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Input from '../../../../components/UI/Input/Input';
import Spinner from '../../../../components/UI/Spinner/Spinner';
import {useSelector,useDispatch} from 'react-redux';
import classes from './ChannelAdd.module.css';
//import {useHistory} from 'react-router-dom';

import * as Action from '../../../../store/actions/formSubmit';


const ChannelAdd = () => {

   const formLoading=useSelector(state=>state.formSubmit.loading);
   const formError=useSelector(state=>state.formSubmit.error);
   const formSuccess=useSelector(state=>state.formSubmit.success);


   const usedispatch=useDispatch();
     
   const INITIAL_STATE={

      pageForm: {          
          name: {
              elementType: 'input',
              elementConfig: {
                  type: 'text',
                  placeholder: 'Your Channel Name'
              },
              value: '',
              label:'Channel Name',
              validation: {
                  required: true,
                  minLength: 6
              },
              valid: false,
              touched: false
          },
          description: {
            elementType: 'textarea',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Channel Description'
            },
            value: '',
            label:'Channel Description',
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
            touched: false
        },          
        file: {
          elementType: 'file',
          elementConfig: {
              type: 'file',                                             
              placeholder: 'Upload Channel Image',
              accept: 'image/png, image/jpeg'
          },
          value: '',
          label:'Channel Image',
          validation: {
              required: true,              
          },
          valid: false,
          touched: false
      },        
      },

      formIsValid: false,

  }

const IMAGE_INITAIAL_PREVIEW={  
    filePreview: null,
    fileData: null,  
}

const [currentFile,SetCurrentFile]=useState(IMAGE_INITAIAL_PREVIEW);
const [formsConfig,SetFormConfig]=useState(INITIAL_STATE); 

useEffect(()=>{        
  usedispatch(Action.formSubmitRefresh());           
},[]); 


const formElementArray=[];


for(let key in formsConfig.pageForm){
  formElementArray.push({
      id:key,
      config:formsConfig.pageForm[key]
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
  ...formsConfig.pageForm
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
  pageForm:updatedContactForm,
  formIsValid: formIsValid    
})

if(inputIdentifier=='file'){


const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        //this.setState({profileImg: reader.result})
        SetCurrentFile({filePreview:reader.result,fileData:event.target.files[0]});
      }
    }

    reader.readAsDataURL(event.target.files[0]);
    
}





}




const FormValueReset = () =>{
   SetFormConfig(INITIAL_STATE);
}

const ImagePreviewValueReset = () =>{
  SetCurrentFile(IMAGE_INITAIAL_PREVIEW);
}

const pageFormProcess = (event) => {
  event.preventDefault();
  const formDataValue={}
  const token = localStorage.getItem('token');

  const formData = new FormData();

  for(let formElement in formsConfig.pageForm){
    if(formElement=='file'){
      formData.append(`file`,currentFile.fileData);
    }else{
      formData.append(`${formElement}`,formsConfig.pageForm[formElement].value);
    }
  }
  formData.append('token',token);

  usedispatch(Action.submitProcess(formData,"channelAdd"));
  FormValueReset();
  ImagePreviewValueReset();

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


if(formLoading){
   form=<Spinner />
}

let formErrorMsg=null;

if(formError){
   formErrorMsg=<p className={classes.Error}>Error Occured, Please try Again</p>
}

let afterSignup=null;

if(formSuccess){
   afterSignup=<p className={classes.Success}>Your channel created successfully</p>
}


    return(
    <>
      <div className="row">
        <div className="col-md-12 p-5 bg-white full-height">

                  <div className="login-main-left">
                     <div className="text-center mb-3 login-main-left-header pt-3">                        
                        <h5 className="mt-3 mb-3">Add New Channel</h5>                        
                     </div>

                     {formErrorMsg}    
                     <img style={{ width: "100%",maxHeight:"300px" }} src={currentFile.filePreview} />
                     <form onSubmit={pageFormProcess}>
                                              
                       {form}

                        <div className="mt-4">
                           <button type="submit" className="btn btn-outline-primary btn-block btn-lg" disabled={!formsConfig.formIsValid}>Process</button>
                        </div>


                     </form>

                     {afterSignup}
                   


                  </div>
               </div>
   </div>   
</>
    )
}

export default ChannelAdd;