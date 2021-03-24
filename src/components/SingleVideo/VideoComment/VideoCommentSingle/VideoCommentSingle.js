import { TIME_AGO_FEATURE } from "../../../../others/utility";

const VideoCommentSingle = ({item}) => {
    return(
        <>
        
        <div className="reviews-members">
                                       <div className="media">
                                          <a href="#"><img className="mr-3" src="/assets/images/user.png" alt="Generic placeholder image" /></a>
                                          <div className="media-body">
                                             <div className="reviews-members-header">
                                                <h6 className="mb-1"><a className="text-black" href="#">{item.name}</a> <small className="text-gray">{TIME_AGO_FEATURE(item.created_at)}</small></h6>
                                             </div>
                                             <div className="reviews-members-body">
                                                <p>{item.comment}</p>
                                             </div>
                                             </div>
                                       </div>
                                    </div>
                                   


        </>
    )
}

export default VideoCommentSingle;