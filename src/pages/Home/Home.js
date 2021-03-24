import CategorySlider from "../../components/CateogrySlider/CategorySlider"
import VideoBlock from "../../components/VideoBlock/VideoBlock";

import * as Actions from '../../store/actions/allCategory';
import * as VActions from '../../store/actions/allVideo';

import Spinner from "../../components/UI/Spinner/Spinner";
import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from "react";



const Home = () => {

    const cdata=useSelector(state=>state.allCategory.data);
    const cerror=useSelector(state=>state.allCategory.error);
    const cloading=useSelector(state=>state.allCategory.loading);

    const vdata=useSelector(state=>state.allVideo.data);

    const usedispatch=useDispatch();

    useEffect(()=>{        
        usedispatch(Actions.allCategoryfetchingProcess());           
    },[]);  

    useEffect(()=>{        
        usedispatch(VActions.allVideofetchingProcess());           
    },[]); 



    let viewOutput=(
        <>
        <CategorySlider cdata={cdata}/>
        <VideoBlock vdata={vdata}/>
        </>        
        );
        
    if(cloading){
        viewOutput=<Spinner />
        }        

    return(
        <>
        {viewOutput}
        </>
        
    )


}

export default Home;