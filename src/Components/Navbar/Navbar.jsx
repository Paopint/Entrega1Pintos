import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget";
import  {ButtonGroup} from '@mui/material';
import {Button} from '@mui/material';
import Typography from '@mui/material/Typography';




//Se importan el componente que se va a incluir.
const NavBar= () => {
    return (
        <navbar className="Navbar">
        <Typography variant="h4" gutterBottom>e-Store</Typography>  
        <ButtonGroup variant="text" size="samll" aria-label="small button group">
        <Button className="btn-Navbar">Categoria 1</Button>
        <Button className="btn-Navbar">Categoria 2</Button>
        <Button className="btn-Navbar">Categoria 3</Button>           
        </ButtonGroup>                            
        <CartWidget></CartWidget>            
        </navbar>
    )

};
export default NavBar;