import { useHistory } from "react-router-dom";

const AddNewItem = ({children,actionPath,addButttonActive}) => {
    const history = useHistory();

    function handleClick() {
        history.push(`/${actionPath}`);
      }

      let buttonPlace=null;

      if(addButttonActive){
        buttonPlace=(<div className="top-button-place"> 
        <button type="button" className="btn btn-primary border-none" onClick={handleClick}>{children}</button>
        </div>)
      }

    return(
        <>
        {buttonPlace}
        </>
    )
}

export default AddNewItem;