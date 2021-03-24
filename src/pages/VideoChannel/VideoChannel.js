import React,{ useEffect } from "react";
import ChannelBlock from "../../components/ChannelBlock/ChannelBlock";
import * as Actions from '../../store/actions/allChannel';
import Spinner from "../../components/UI/Spinner/Spinner";
import {useSelector,useDispatch} from 'react-redux';

const VideoChannel = () => {

    const data=useSelector(state=>state.allChannel.data);
    const error=useSelector(state=>state.allChannel.error);
    const userloading=useSelector(state=>state.allChannel.loading);
    const isAuthenticated=useSelector(state=>state.authSignin.token !== null);

    const usedispatch=useDispatch();

    useEffect(()=>{        
        usedispatch(Actions.allChannelfetchingProcess());           
    },[]);  


    let viewOutput=(
        <ChannelBlock
        title="All Channels"
        listChannel={data}
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

export default VideoChannel;