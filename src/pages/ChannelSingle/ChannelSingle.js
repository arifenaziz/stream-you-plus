import { useEffect } from "react";
import ChannelBody from "../../components/SingleChannel/ChannelBody/ChannelBody";
import ChannelHeader from "../../components/SingleChannel/ChannelHeader/ChannelHeader";
import {useSelector,useDispatch} from 'react-redux';
import * as Actions from '../../store/actions/singleChannel';

import { useParams } from "react-router-dom";
import Spinner from "../../components/UI/Spinner/Spinner";


const ChannelSingle = () => {

    let { id } = useParams();

    const data=useSelector(state=>state.singleChannel.data);
    const details=useSelector(state=>state.singleChannel.details);
    const error=useSelector(state=>state.singleChannel.error);
    const loading=useSelector(state=>state.singleChannel.loading);

    const isAuthenticated=useSelector(state=>state.authSignin.token !== null);

    const usedispatch=useDispatch();

    useEffect(()=>{        
        usedispatch(Actions.singleChannelfetchingProcess(id));           
    },[]);  

    
    let viewOutput=(
        <>
        <ChannelHeader 
        data={data} 
        isAuthenticated={isAuthenticated}
        usedispatch={usedispatch}
        Actions={Actions}
        />
        <ChannelBody details={details}/>  
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