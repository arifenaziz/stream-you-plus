import { useState } from "react";
import { useHistory } from "react-router-dom";
const CommentInput =({usedispatch,id,username,Actions,isAuthenticated}) => {

    const history = useHistory();

    const [comment,SetComment]=useState('');

    const inputHandleChange=(event)=> {
        SetComment(event.target.value);
      }


      const onSubmitHandler = (event) => {
        event.preventDefault();
        if(isAuthenticated){
        if (comment !="" ) {              
            usedispatch(Actions.videoCommentProcess(id,comment,username));
            SetComment('');
        }    
      }else{

         history.push(`/signin`);
      }
    }

    return(
        <>
        <form onSubmit={onSubmitHandler}>
                                    <div className="reviews-members pt-0">
                                       <div className="media">
                                          <a href="#"><img className="mr-3" src="/assets/images/user.png" alt="Generic placeholder image" /></a>
                                          <div className="media-body">
                                             <div className="form-members-body">
                                                <textarea rows="1" placeholder="Add a public comment..." className="form-control" onChange={inputHandleChange} value={comment}></textarea>
                                             </div>
                                             <div className="form-members-footer text-right mt-2">                                            
                                                <button className="btn btn-danger btn-sm" type="submit">COMMENT</button>      
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    </form> 
        </>
    )
}

export default CommentInput;