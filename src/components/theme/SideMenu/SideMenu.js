import React from 'react';
import SideMenuInfoSingle from './SideMenuInfoSingle/SideMenuInfoSingle';
import SideMenuSingle from './SideMenuSingle/SideMenuSingle';

const SideMenu = ({reload,isAuthenticated}) => {
    
    let authRegistredlinks=null;

    if(isAuthenticated){

        authRegistredlinks =(
           <>
        <li className="nav-item channel-sidebar-list channel-sidebar-list-addon">
        <h6>MY PLACE</h6>
        <ul>
        <SideMenuSingle link="/user/myChannels" >
        <i className="fas fa-fw fa-box"></i>
        <span>My Channels</span>   
        </SideMenuSingle>  

        <SideMenuSingle link="/user/myVideos" >
        <i className="fas fa-fw fa-video"></i>
        <span>My Videos</span>   
        </SideMenuSingle>          
        
        <SideMenuSingle link="/user/mySubscription" >
        <i className="fas fa-fw fa-bullhorn"></i>
        <span>My Subscriptions</span>   
        </SideMenuSingle>  

        </ul>
        </li>


           </>
        );
     
      }     


    return(
        <ul className="sidebar navbar-nav">
        

        <SideMenuSingle link="/" exact>
        <i className="fas fa-fw fa-home"></i>
        <span>Home</span>   
        </SideMenuSingle>

        <SideMenuSingle link="/channels" >
        <i className="fas fa-fw fa-box-open"></i>
        <span>Channels</span>   
        </SideMenuSingle>        

        <SideMenuSingle link="/categories" >
        <i className="fas fa-fw fa-list-alt"></i>
        <span>Category</span>   
        </SideMenuSingle>

        {authRegistredlinks}
        

        <li className="nav-item channel-sidebar-list">           
           <ul>
               <SideMenuInfoSingle link="/about">
                About StreamYou 
               </SideMenuInfoSingle>

               <SideMenuInfoSingle link="/terms">
               Terms & Condition
               </SideMenuInfoSingle>

               <SideMenuInfoSingle link="/policy">
               Privacy Policy & Safety
               </SideMenuInfoSingle>


           </ul>
        </li>        
     
     </ul>
    )
}

export default SideMenu;