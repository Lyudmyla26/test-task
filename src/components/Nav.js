import { Link} from 'react-router-dom';
import { ItemNav, ListNav } from './Nav.styled';
const Nav = () => {
    return <nav><ListNav>
        <ItemNav><Link to="/">Home</Link></ItemNav>
        <ItemNav><Link to="/catalog">Catalog</Link></ItemNav>
        <ItemNav><Link to="/favorites">Favorites</Link></ItemNav>
    </ListNav>
        </nav>
        
};
export default Nav;