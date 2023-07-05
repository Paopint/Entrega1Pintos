
import './assets/CartWidget.css';
//import cart from './assets/cart.svg';
import { ToggleButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Typography } from '@mui/material';

const CartWidget = () => {
    let items = 0;

    return (
        <ToggleButton>
            <ShoppingCartOutlinedIcon> </ShoppingCartOutlinedIcon>
            <Typography>{items}</Typography>
            {/*  <img src={cart} alt="cart-widget" width="30" height="40"></img> */}
        </ToggleButton>


    )


};
export default CartWidget;