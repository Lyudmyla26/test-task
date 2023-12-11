import {  Outlet} from 'react-router-dom';
import Nav from './Nav';
import { Container } from './Laoyt.stylet';
const Layot = () => {
    return <Container> 
        <Nav />
        <hr/>
        <Outlet/>
    </Container>
};
export default Layot;