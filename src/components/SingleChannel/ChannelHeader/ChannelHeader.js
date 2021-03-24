import { useHistory } from "react-router-dom";

const ChannelHeader = ({data,isAuthenticated,usedispatch,Actions}) => {
   
   const history = useHistory();

   function channelSubHandleClick() {
      if(isAuthenticated){

      usedispatch(Actions.channelSubscribeToggleProcess(data.main_id,data.subscribe,data.subscriber_count)); 

      }else{
          history.push(`/signin`);
      }
  }



    return(
        <>
            <div className="single-channel-image">
               <img className="img-fluid" alt="" src="/assets/images/channel_banner.png" />
               <div className="channel-profile">
                  <img className="channel-profile-img" alt="" src={`${process.env.REACT_APP_BACKEND_UPLOAD_RESOURCE_PATH}channels/${data.channel_image}`} />                  
                  <span className="subs_count">{data.subscriber_count} subscribers</span>
               </div>
               
            </div>

            <div className="single-channel-nav">
               <nav className="navbar navbar-expand-lg navbar-light">
                  <a className="channel-brand" href="#">{data.channel_name} <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></span></a>
                  
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                           <a className="nav-link" href="#">Videos <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#">Drescription</a>
                        </li>

                       </ul>
                     <form className="form-inline my-2 my-lg-0">
                        <input className="form-control form-control-sm mr-sm-1" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success btn-sm my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button> &nbsp;&nbsp;&nbsp; 
                        <button className={`btn btn-sm ${data.subscribe==1 && isAuthenticated ? 'btn-outline-danger-light' : 'btn btn-danger'}`} type="button" disabled={ data.flag==1 && isAuthenticated ? true : false } onClick={channelSubHandleClick}>
                        {data.subscribe==1 && isAuthenticated ? 'Subscribed' : 'Subscribe'}
                        </button>
                     </form>
                  </div>
               </nav>
            </div>
            </>
    )
}

export default ChannelHeader;