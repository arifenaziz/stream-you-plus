import { useEffect } from "react";
import VideoPlace from "../../components/SingleVideo/VideoPlace/VideoPlace";
import {useSelector,useDispatch} from 'react-redux';
import * as Actions from '../../store/actions/singleVideo';

import {useParams} from "react-router-dom";
import Spinner from "../../components/UI/Spinner/Spinner";
import RelatedVideo from "../../components/SingleVideo/VideoPlace/RelatedVideo/RelatedVideo";
import VideoComment from "../../components/SingleVideo/VideoComment/VideoComment";

const VideoSingle = () => {

    let { id } = useParams();

    const data=useSelector(state=>state.singleVideo.data);
    const details=useSelector(state=>state.singleVideo.details);
    const comments=useSelector(state=>state.singleVideo.comments);
    const error=useSelector(state=>state.singleVideo.error);
    const loading=useSelector(state=>state.singleVideo.loading);

    const username=useSelector(state=>state.authSignin.username);
    const isAuthenticated=useSelector(state=>state.authSignin.token !== null);


    const usedispatch=useDispatch();

    useEffect(()=>{        
        usedispatch(Actions.singleVideofetchingProcess(id));           
    },[]);  

    useEffect(()=>{        
        usedispatch(Actions.singleVideoWatchingProcess(id));           
    },[id]);  



 



    let viewOutput=(
        <>
        
        
        <div className="video-block section-padding">
        <div className="row">

        <div className="col-md-8">

        <div className="single-video-left">
        
        <VideoPlace 
        video_id={id}
        data={data} 
        isAuthenticated={isAuthenticated}
        usedispatch={usedispatch}
        Actions={Actions}
        />

        </div>

        <VideoComment
        comments={comments}
        usedispatch={usedispatch}
        id={id}
        username={username}
        Actions={Actions}
        isAuthenticated={isAuthenticated}
        />

        </div>


        <div className="col-md-4">
        <div className="video-slider-right-list">      
        <h6>Related Videos</h6>
        <RelatedVideo details={details}/>

        </div>


        </div>


        </div>
        </div>        
        
        
        </>
        );
    if(loading){
        viewOutput=<Spinner />
        }  



    return(
        <>{viewOutput}</>
    )
}

export default VideoSingle;