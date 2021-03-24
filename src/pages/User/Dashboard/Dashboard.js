import React,{ useEffect } from "react";
import DashboardStatistic from "../../../components/User/DashboardStatistic/DashboardStatistic";
import Spinner from "../../../components/UI/Spinner/Spinner";
import {useSelector,useDispatch} from 'react-redux';
import * as Actions from '../../../store/actions/myDashboard';

const UserDashboard = () => {


   const userData=useSelector(state=>state.myDashboard.data);
   const userError=useSelector(state=>state.myDashboard.error);
   const userloading=useSelector(state=>state.myDashboard.loading);
   const isAuthenticated=useSelector(state=>state.authSignin.token !== null);
   const usedispatch=useDispatch();


   useEffect(()=>{        
      usedispatch(Actions.myDashboardfetchingProcess());           
  },[]);  


 return(
    <>
    <div className="row">
    <DashboardStatistic userData={userData}/>
    </div>
    </>
 )   
}

export default UserDashboard;