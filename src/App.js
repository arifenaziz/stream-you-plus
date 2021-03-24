import React,{Suspense,useEffect} from 'react';
import Layout from "./components/theme/Layout/Layout";
// import AuthLayout from './components/theme/Layout/AuthLayout/AuthLayout';
import Home from './pages/Home/Home';
import * as authAction from './store/actions/authSignin';
import { useDispatch, useSelector } from 'react-redux';

import {
  BrowserRouter as Router,  
  Switch,
  Route,
  Redirect, 
} from "react-router-dom";




const VideoCategories =React.lazy(()=>
  import('./pages/VideoCategories/VideoCategories')
);

const VideoChannels =React.lazy(()=>
  import('./pages/VideoChannel/VideoChannel')
);

const About =React.lazy(()=>
  import('./pages/About/About')
);

const Terms =React.lazy(()=>
  import('./pages/Terms/Terms')
);

const Policy =React.lazy(()=>
  import('./pages/Policy/Policy')
);

const VideoSingle =React.lazy(()=>
  import('./pages/VideoSingle/VideoSingle')
);

const ChannelSingle =React.lazy(()=>
  import('./pages/ChannelSingle/ChannelSingle')
);

const CategorySingle =React.lazy(()=>
  import('./pages/CategorySingle/CategorySingle')
);

const Signup =React.lazy(()=>
  import('./pages/Signup/Signup')
);

const Signin =React.lazy(()=>
  import('./pages/Signin/Signin')
);

const Userdashboard =React.lazy(()=>
  import('./pages/User/Dashboard/Dashboard')
);

const UserChannelAdd =React.lazy(()=>
  import('./pages/User/Channel/ChannelAdd/ChannelAdd')
);

const UserChannels =React.lazy(()=>
  import('./pages/User/Channel/MyChannel/MyChannel')
);

const UserSubscriptions =React.lazy(()=>
  import('./pages/User/Channel/MySubscription/MySubscription')
);

const UserVideoUpload =React.lazy(()=>
  import('./pages/User/Upload/Upload')
);

const MyVideo =React.lazy(()=>
  import('./pages/User/MyVideo/MyVideo')
);

const App = () => {


  const isAuthenticated=useSelector(state=>state.authSignin.token !== null);
  
  const usedispatch=useDispatch();
  
  useEffect(()=>{
    usedispatch(authAction.authSessionCheck());             
  },[]);


  
let routes=(
  <Switch>

  <Route path="/category/:id" render={()=>
    <Suspense fallback={<div>Loading...</div>}>
      <CategorySingle/>
    </Suspense>
    }/>

  <Route path="/channel/:id" render={()=>
    <Suspense fallback={<div>Loading...</div>}>
      <ChannelSingle/>
    </Suspense>
    }/>

  <Route path="/video/:id" render={()=>
    <Suspense fallback={<div>Loading...</div>}>
      <VideoSingle/>
    </Suspense>
    }/>
  
  <Route path="/policy" render={()=>
    <Suspense fallback={<div>Loading...</div>}>
      <Policy/>
    </Suspense>
    }/>
  
  <Route path="/terms" render={()=>
    <Suspense fallback={<div>Loading...</div>}>
      <Terms/>
    </Suspense>
    }/>
  
    <Route path="/about" render={()=>
    <Suspense fallback={<div>Loading...</div>}>
      <About/>
    </Suspense>
    }/>
  
    <Route path="/categories" render={()=>
    <Suspense fallback={<div>Loading...</div>}>
      <VideoCategories/>
    </Suspense>
    }/>
  
    <Route path="/channels" render={()=>
    <Suspense fallback={<div>Loading...</div>}>
      <VideoChannels/>
    </Suspense>
    }/>
  
    <Route path="/signup" render={()=>
    <Suspense fallback={<div>Loading...</div>}>
      <Signup/>
    </Suspense>
    }/>
  
    <Route path="/signin" render={()=>
    <Suspense fallback={<div>Loading...</div>}>
      <Signin/>
    </Suspense>
    }/>
    
  
  
    {/* <Route path="/forms" component={Forms} />                         */}
  
    <Route path="/" exact>
      <Home />
    </Route>
    <Redirect to="/" />
    </Switch>
  );


  if(isAuthenticated){

    
    routes=(
      <Switch>

        

      <Route path="/user/myVideos" exact render={()=>
        <Suspense fallback={<div>Loading...</div>}>
          <MyVideo/>
        </Suspense>
        }/>   

      <Route path="/user/upload" exact render={()=>
        <Suspense fallback={<div>Loading...</div>}>
          <UserVideoUpload/>
        </Suspense>
        }/>   

        <Route path="/user/mySubscription" exact render={()=>
        <Suspense fallback={<div>Loading...</div>}>
          <UserSubscriptions/>
        </Suspense>
        }/>   

        <Route path="/user/myChannels" exact render={()=>
        <Suspense fallback={<div>Loading...</div>}>
          <UserChannels/>
        </Suspense>
        }/>   

        <Route path="/user/dashboard" exact render={()=>
        <Suspense fallback={<div>Loading...</div>}>
          <Userdashboard/>
        </Suspense>
        }/>           

        <Route path="/user/channel/add" render={()=>
        <Suspense fallback={<div>Loading...</div>}>
          <UserChannelAdd/>
        </Suspense>
        }/>

      <Route path="/category/:id" render={()=>
      <Suspense fallback={<div>Loading...</div>}>
        <CategorySingle/>
      </Suspense>
      }/>

      <Route path="/channel/:id" render={()=>
        <Suspense fallback={<div>Loading...</div>}>
          <ChannelSingle/>
        </Suspense>
      }/>


      <Route path="/video/:id" render={()=>
        <Suspense fallback={<div>Loading...</div>}>
          <VideoSingle/>
        </Suspense>
        }/>
      
      <Route path="/policy" render={()=>
        <Suspense fallback={<div>Loading...</div>}>
          <Policy/>
        </Suspense>
        }/>
      
      <Route path="/terms" render={()=>
        <Suspense fallback={<div>Loading...</div>}>
          <Terms/>
        </Suspense>
        }/>
      
        <Route path="/about" render={()=>
        <Suspense fallback={<div>Loading...</div>}>
          <About/>
        </Suspense>
        }/>
      
        <Route path="/categories" render={()=>
        <Suspense fallback={<div>Loading...</div>}>
          <VideoCategories/>
        </Suspense>
        }/>
      
        <Route path="/channels" render={()=>
        <Suspense fallback={<div>Loading...</div>}>
          <VideoChannels/>
        </Suspense>
        }/>

         
      
      
        {/* <Route path="/forms" component={Forms} />                         */}
      
        <Route path="/" exact>
          <Home />
        </Route>
        <Redirect to="/" />
        </Switch>
      );

  }





  return (
       <Layout>
         {routes}
       </Layout>   
  );
}

export default App;
