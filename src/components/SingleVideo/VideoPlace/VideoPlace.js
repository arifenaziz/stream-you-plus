import { useHistory } from "react-router-dom";
import {VIDEO_DATE_FORMATE} from '../../../others/utility';

import ReactPlayer from 'react-player'

const VideoPlace = ({video_id,data,usedispatch,isAuthenticated,Actions}) => {

    const history = useHistory();

    function channelHandleClick() {
        history.push(`/channel/${data.category_ref}`);
    }

    const channelSubHandleClick=()=> {
        if(isAuthenticated){

        usedispatch(Actions.channelSubscribeToggleProcess(data.channel_ref,data.subscribe,data.subscriber_count)); 

        }else{
            history.push(`/signin`);
        }
    }


    
    const videoLikeHandleClick = () => {
        if(isAuthenticated){

        usedispatch(Actions.singleVideoLikeToggleProcess(video_id,data.liked,data.like_count,data.disliked));   

        }else{
            history.push(`/signin`);
        }
    }

    const videoDislikeHandleClick = () => {
        if(isAuthenticated){

        usedispatch(Actions.singleVideoDislikeToggleProcess(video_id,data.disliked,data.dislike_count,data.liked));

        }else{
            history.push(`/signin`);
        }
    }


   const video_url = process.env.REACT_APP_BACKEND_UPLOAD_RESOURCE_PATH + 'videos/'+data.video_file;


    return (
        <>    
<div className="single-video">

<ReactPlayer
playing={true} 
controls={true} 
url={video_url} 
width="100%"
height="450px"
pip={true}
/>
</div>



<div className="single-video-title box mb-3">

{/* disabled={ data.liked==true? true : false }  className="btn btn-light mr-10" */}

<div className="float-right">
    <button className={`btn mr-10 ${data.liked==true && isAuthenticated ? 'btn-info' : ' btn-light'}`} type="button" onClick={videoLikeHandleClick}>
        <i className="fas fa-thumbs-up"></i> <span>{data.like_count}</span>
    </button>   

    <button className={`btn mr-10 ${data.disliked==true && isAuthenticated ? 'btn-danger' : ' btn-light'}`} type="button" onClick={videoDislikeHandleClick}>
        <i className="fas fa-thumbs-down"></i> <span>{data.dislike_count}</span>
    </button> 

</div>

<h2><a href="#">{data.video_title}</a></h2>
<p className="mb-0"><i className="fas fa-eye"></i> {data.views} views</p>
<small>Published on {VIDEO_DATE_FORMATE(data.created_at)}</small>
</div>


<div className="single-video-author box mb-3">
<div className="float-right">
    <button className={`btn ${data.subscribe==1 && isAuthenticated ? 'btn-danger-light' : 'btn-danger'}`} type="button"  onClick={channelSubHandleClick} disabled={data.flag==1 && isAuthenticated ? true : false}>
        <i className="fas fa-bullhorn"></i> {data.subscribe==1 && isAuthenticated ? 'Subscribed' : 'Subscribe'}
    </button>     
</div>

<img className="img-fluid" src={`${process.env.REACT_APP_BACKEND_UPLOAD_RESOURCE_PATH}channels/${data.channel_image}`}  alt="" />
<p><a onClick={channelHandleClick} className="cursor"><strong>{data.channel_name}</strong></a> <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></span></p>
<small>{data.subscriber_count} subscribers</small>
</div>


        </>
    )
}

export default VideoPlace;
