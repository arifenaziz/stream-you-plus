import React,{ useEffect } from "react";
import ChannelBlock from "../../../../components/ChannelBlock/ChannelBlock";
import {useSelector,useDispatch} from 'react-redux';
import * as Actions from '../../../../store/actions/mySubscriptionChannel';
import Spinner from "../../../../components/UI/Spinner/Spinner";

const UserChannel = () => {

    const userData=useSelector(state=>state.mySubscriptionChannel.data);
    const userError=useSelector(state=>state.mySubscriptionChannel.error);
    const userloading=useSelector(state=>state.mySubscriptionChannel.loading);
    const isAuthenticated=useSelector(state=>state.authSignin.token !== null);
    const usedispatch=useDispatch();

    useEffect(()=>{        
        usedispatch(Actions.myChannelfetchingProcess());           
    },[]);    

    let viewOutput=(
    <ChannelBlock
    title="My Subscription Channel"
    listChannel={userData}    
    isAuthenticated={isAuthenticated}
    usedispatch={usedispatch}
    Actions={Actions}    
    />
    );

    if(userloading){
        viewOutput=<Spinner />
     }

    return(        
        <>
        {viewOutput}
        </>
    )
}

export default UserChannel;