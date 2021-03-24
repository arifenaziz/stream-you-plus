import {NavLink} from 'react-router-dom';

const SideMenuInfoSingle = ({link,children}) =>{
    return(
            <li>
            <NavLink
            to={link}
            activeClassName="active"
            >
                {children}
             </NavLink>
            </li>
    )
}

export default SideMenuInfoSingle;