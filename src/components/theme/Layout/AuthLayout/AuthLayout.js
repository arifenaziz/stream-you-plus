const AuthLayout = ({children}) =>{
    return(
        <>
         <section className="login-main-wrapper">
         <div className="container-fluid pl-0 pr-0">
         <div className="row no-gutters">
        
         {children}

        </div>  
        </div>
        </section>


        </>
    )
}

export default AuthLayout;