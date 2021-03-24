import React,{ useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux';
import MyVideoBlock from '../../../components/MyVideo/MyVideo';
import * as Actions from '../../../store/actions/myVideo';
import Spinner from "../../../components/UI/Spinner/Spinner";

const MyVideo = () => {

    const userData=useSelector(state=>state.myVideo.data);
    const userError=useSelector(state=>state.myVideo.error);
    const userloading=useSelector(state=>state.myVideo.loading);
    const isAuthenticated=useSelector(state=>state.authSignin.token !== null);
    const usedispatch=useDispatch();

    useEffect(()=>{        
        usedispatch(Actions.myVideofetchingProcess());           
    },[]); 



    let viewOutput=(
        <MyVideoBlock
        details={userData}
        />
        );
    if(userloading){
        viewOutput=<Spinner />
        }        

    return(
        <>
        {viewOutput}
        </>
    );

}

export default MyVideo;