import React,{ useState } from "react";
import VideoCard from "../Video/VideoCard/VideoCard";

const VideoBlock = ({vdata}) => {

    return(
        <div className="video-block section-padding">
          <div className="row">

            {
            vdata.map((item,index)=>(
                <VideoCard item={item} key={index} categoryShow/>
            ))}

          </div>
        </div>
    )
}

export default VideoBlock;