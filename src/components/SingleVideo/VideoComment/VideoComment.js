import CommentInput from './CommentInput/CommentInput';
import VideoCommentSingle from './VideoCommentSingle/VideoCommentSingle';

const VideoComment = ({usedispatch,id,username,Actions,comments,isAuthenticated}) => {

    console.log('COMMMM',comments);

    return(
    <>
                            <div className="box mb-3 single-video-comment-tabs">
                              <ul className="nav nav-tabs" role="tablist">
                                 <li className="nav-item">
                                    <a className="nav-link active" id="retro-comments-tab" data-toggle="tab" href="#retro-comments" role="tab" aria-controls="retro" aria-selected="false">Video Comments</a>
                                 </li>                                 
                              </ul>
                              <div className="tab-content">

                                 <div className="tab-pane fade show active" id="retro-comments" role="tabpanel" aria-labelledby="retro-comments-tab">
                                    

                                    <CommentInput usedispatch={usedispatch} id={id} username={username} Actions={Actions} isAuthenticated={isAuthenticated}/>     

                                    {
                                        comments?.length ?(
                                        comments?.map((item,index)=>(
                                        <VideoCommentSingle key={index} item={item}/>
                                        )).reverse()
                                        ) : <p className="no-found-text">No comments Found</p>
                                    }                               

                                    
                                    

                                 </div>
                              </div>
                           </div>

    </>
    )
}

export default VideoComment;