import FormSignUp from './components/FormSignUp';
import './App.css';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

function App() {

  const handleSubmit = (valores) =>{
    console.log("app", valores)
  }

  return (
    <Container component="section" maxWidth="sm">
      <Typography variant="h3" align="center">Formulario registro</Typography>
     <FormSignUp handleSubmit={handleSubmit} />
    </Container>
  );
}

export default App;
