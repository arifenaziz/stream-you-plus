
import {NavLink} from 'react-router-dom';

const SideMenuSingle = ({link,children,exact}) => {
    return(
        <li className="nav-item">
           <NavLink 
           className="nav-link"
           activeClassName="active"           
           to={link} 
           exact={exact}

           >           
           {children}
           </NavLink>
        </li>
    )
}

export default SideMenuSingle;