import {  Outlet} from 'react-router-dom';
import Nav from './Nav';
const Layot = () => {
    return <div> 
        <Nav />
        <hr/>
        <Outlet/>
    </div>
};
export default Layot;