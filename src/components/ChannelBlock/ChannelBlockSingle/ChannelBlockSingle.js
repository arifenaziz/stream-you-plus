import { useHistory } from "react-router-dom";

const ChannelBlockSingle = ({item,isAuthenticated,usedispatch,Actions}) =>{
   const history = useHistory();

   function handleClick() {
      history.push(`/channel/${item.main_id}`);
   }
   
   function channelSubHandleClick() {
      if(isAuthenticated){

      usedispatch(Actions.channelSubscribeToggleProcess(item.main_id,item.subscribe,item.subscriber_count)); 

      }else{
          history.push(`/signin`);
      }
  }

    return(
                <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="channels-card">
                           <div className="channels-card-image">
                              <a onClick={handleClick} className="cursor"><img className="img-fluid" src={`${process.env.REACT_APP_BACKEND_UPLOAD_RESOURCE_PATH}channels/${item.channel_image}`} alt="" /></a>
                              <div className="channels-card-image-btn">
                                 <button type="button" className={`btn btn-sm ${item.subscribe==1 && isAuthenticated ? 'btn-outline-danger-light' : 'btn btn-danger'}`}  disabled={ item.flag==1 &&  isAuthenticated ? true : false } onClick={channelSubHandleClick}> {item.subscribe==1 && isAuthenticated ? 'Subscribed' : 'Subscribe'} </button>                                 
                                 </div>
                           </div>
                           <div className="channels-card-body">
                              <div className="channels-title">
                                 <a onClick={handleClick} className="cursor">{item.channel_name}</a>
                              </div>
                              <div className="channels-view">
                                 {item.subscriber_count} subscribers
                              </div>
                           </div>
                        </div>
                 </div>
    )
}

export default ChannelBlockSingle;