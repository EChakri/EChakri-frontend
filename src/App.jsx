import { Container } from '@mui/material';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

const App = () => {
  return (
    <Container maxWidth='xl'>
      <Header />
      <Hero />
    </Container>
  );
};

export default App;
