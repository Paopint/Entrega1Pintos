
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { Container} from '@mui/material';



function App() {
  return (
    <Container fixed className="Container"> 
        
      <NavBar></NavBar> 
      <ItemListContainer text={'Bienvenidos'}></ItemListContainer>  
         
        
      <Footer></Footer>        
    </Container>
    
  );
}

export default App;
