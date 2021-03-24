import { useHistory } from "react-router-dom";
const CategorySliderSingle = ({item}) => {

   const history = useHistory();

   function handleClick() {
      history.push(`/category/${item.main_id}`);
   }   

    return (
    <div className="item">
        <div className="category-item">
           <a className="cursor" onClick={handleClick}>
              <img className="img-fluid" src={`${process.env.REACT_APP_BACKEND_UPLOAD_RESOURCE_PATH}category/${item.category_image}`} alt="" />
              <h6>{item.category_name}</h6>
              <p>{item.views==null ? 0 : item.views} views</p>
           </a>
        </div>
     </div>
    )
}

export default CategorySliderSingle;