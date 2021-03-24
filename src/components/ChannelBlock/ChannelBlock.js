import AddNewItem from "../Resource/AddNewItem/AddNewItem";
import ChannelBlockSingle from "./ChannelBlockSingle/ChannelBlockSingle";

const ChannelBlock = ({listChannel,addButttonActive,actionPath,actionName,isAuthenticated,usedispatch,Actions,title}) => {

    console.log('listChannel',listChannel);

    return(
        <div className="video-block section-padding">
        <div className="row">
           <div className="col-md-12">
              <div className="main-title">
              <h6>{title}</h6>
              </div>
              <AddNewItem actionPath={actionPath} addButttonActive={addButttonActive}>
                  {actionName}
             </AddNewItem>
            </div>

        {
            listChannel?.length ?(
                listChannel.map((item,index)=>(
                    <ChannelBlockSingle 
                    item={item} 
                    key={index}                    
                    isAuthenticated={isAuthenticated}
                    usedispatch={usedispatch}
                    Actions={Actions}
                    />
                ))
            ) : <p className="no-found-text">No Channel Found</p>
        }

        </div>
        </div>
    )
}

export default ChannelBlock;