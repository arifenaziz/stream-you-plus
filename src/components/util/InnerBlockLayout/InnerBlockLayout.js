const InnerBlockLayout = ({title,children}) => {
    return (
        <div className="video-block section-padding">
          <div className="row">

        <div className="col-md-12">
        <div className="main-title">
        <h6>{title}</h6>
        </div>
        </div>

        <div className="col-md-12">
        {children}
        </div>

          </div>
          </div>
    )
}

export default InnerBlockLayout;