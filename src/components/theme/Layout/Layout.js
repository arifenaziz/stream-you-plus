import React,{Suspense} from 'react';
import Footer from "../Footer/Footer";
import SideMenu from "../SideMenu/SideMenu";
import { useDispatch,useSelector } from 'react-redux';
import * as authAction from '../../../store/actions/authSignin';

const Header =React.lazy(()=>
  import('../Header/Header')
);

const Layout = ({children}) =>{


  const reload=useSelector(state=>state.authSignin.reload);
  const isAuthenticated=useSelector(state=>state.authSignin.token !== null);
  const username=useSelector(state=>state.authSignin.username || null);
  const usedispatch=useDispatch();



  const logoutProcess = () => {
     usedispatch(authAction.authSigninLogout());
   }


    return(
        <>
                
        <Suspense fallback={<div>Loading...</div>}>

        <Header
                reload={reload}
                isAuthenticated={isAuthenticated}
                username={username}
                logoutProcess={logoutProcess}
        />
        </Suspense>

        <div id="wrapper">

        <SideMenu
                reload={reload}
                isAuthenticated={isAuthenticated}
        />

        <div id="content-wrapper">
        <div className="container-fluid pb-0">
        {children}
        </div>


        <Footer/>
        </div>

        </div>


        </>
    )
}

export default Layout;