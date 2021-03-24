import { useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux';
import * as Actions from '../../store/actions/singleCategory';
import CategoryBody from '../../components/SingleCategory/CategoryBody/CategoryBody';

import { useParams } from "react-router-dom";
import Spinner from "../../components/UI/Spinner/Spinner";


const ChannelSingle = () => {

    let { id } = useParams();

    const data=useSelector(state=>state.singleCategory.data);
    const details=useSelector(state=>state.singleCategory.details);
    const error=useSelector(state=>state.singleCategory.error);
    const loading=useSelector(state=>state.singleCategory.loading);

    const isAuthenticated=useSelector(state=>state.authSignin.token !== null);

    const usedispatch=useDispatch();

    useEffect(()=>{        
        usedispatch(Actions.singleCategoryfetchingProcess(id));           
    },[]);  

    
    let viewOutput=(
        <>
        <CategoryBody data={data} details={details}/>  
        </>
    );


    if(loading){
        viewOutput=<Spinner />
     }
    


    return(
        <>        
        {viewOutput}
        </>
    )
}

export default ChannelSingle;