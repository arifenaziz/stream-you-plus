import React,{ useEffect } from "react";
import ChannelBlock from "../../../../components/ChannelBlock/ChannelBlock";
import {useSelector,useDispatch} from 'react-redux';
import * as Actions from '../../../../store/actions/myChannel';
import Spinner from "../../../../components/UI/Spinner/Spinner";

const UserChannel = () => {

    const userData=useSelector(state=>state.myChannel.data);
    const userError=useSelector(state=>state.myChannel.error);
    const userloading=useSelector(state=>state.myChannel.loading);
    const isAuthenticated=useSelector(state=>state.authSignin.token !== null);
    const usedispatch=useDispatch();

    useEffect(()=>{        
        usedispatch(Actions.myChannelfetchingProcess());           
    },[]);    

    let viewOutput=(
    <ChannelBlock
    title="My Channels"
    listChannel={userData}
    addButttonActive
    actionPath="user/channel/add"
    actionName="Add New Channel"
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