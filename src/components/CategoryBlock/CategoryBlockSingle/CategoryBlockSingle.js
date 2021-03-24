import { useHistory } from "react-router-dom";

const CategoryBlockSingle = ({item}) => {


   const history = useHistory();

   function handleClick() {
       history.push(`/category/${item.main_id}`);
    }   

    return(
        <div className="col-xl-3 col-sm-6 mb-3">
        <div className="category-item mt-0 mb-0">
           <a className="cursor" onClick={handleClick}>
              <img className="img-fluid" src={`${process.env.REACT_APP_BACKEND_UPLOAD_RESOURCE_PATH}category/${item.category_image}`}  alt="" />
              <h6>{item.category_name} <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></span></h6>
              <p>{item.views==null ? 0 : item.views} views</p>
           </a>
        </div>
     </div>
    )
}

export default CategoryBlockSingle;