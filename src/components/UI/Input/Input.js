import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {

    let inputElement=null;

    const inputClasses =["form-control",""];
    //const inputClasses =[classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched ) {
        inputClasses.push(classes.Invalid);
    }    

    switch(props.elementType){
        case('input'):
        inputElement= <input 
        className={inputClasses.join(' ')} 
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
        />
        break;
        case('textarea'):
        inputElement = <textarea 
        className={inputClasses.join(' ')} 
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
        />
        break;
        case('select'):
        inputElement = (<select 
        className={inputClasses.join(' ')}
        value={props.value}
        onChange={props.changed}
        >
            {
                props.elementConfig.options.map(option=>(
                <option key={option.value} value={option.value}>{option.displayValue}</option>
                ))
            }

        </select>);

        break;        
        case('file'):
        inputElement = <input 
        className={inputClasses.join(' ')} 
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
        />
        break;                
        default:
            inputElement= <input 
            className={inputClasses.join(' ')} 
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
            />
    }

    return(

        // <div className={classes.Input}>
            <div className="form-group">
            <label className={classes.label}>{props.label}</label>
            {inputElement}
            </div>
        // </div>
    );

}


export default Input;