
import { Button, Card, Typography, CardContent } from '@mui/material';
import './ItemListContainer.css';

const ItemListContainer = ({ text }) => {
    return (

        <Card>
            <CardContent>
                <img src="" alt="" />
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Nombre producto
                </Typography>
                <Typography variant="body2">
                    descripcion del produccto  <br />
                    Precio.
                </Typography>    
            </CardContent>
            <Button>Add-ToCart</Button>
        </Card>
       

    )
};

export default ItemListContainer;
