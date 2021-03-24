import CategoryBlock from "../../components/CategoryBlock/CategoryBlock";
import * as Actions from '../../store/actions/allCategory';
import Spinner from "../../components/UI/Spinner/Spinner";
import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from "react";

const VideoCategories = () =>{ 

    const data=useSelector(state=>state.allCategory.data);
    const error=useSelector(state=>state.allCategory.error);
    const userloading=useSelector(state=>state.allCategory.loading);
    const isAuthenticated=useSelector(state=>state.authSignin.token !== null);

    const usedispatch=useDispatch();

    useEffect(()=>{        
        usedispatch(Actions.allCategoryfetchingProcess());           
    },[]);  


    let viewOutput=(
        <CategoryBlock
        data={data}
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

export default VideoCategories;