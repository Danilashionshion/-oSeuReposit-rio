import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { Link } from 'react-router-dom';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs">
        <Box sx={{border: 'solid 1px', marginBottom: '30px', textAlign: 'center', borderRadius: '10px'}}>
            Conheça um pouco mais sobre nós
        </Box>

      </Container>
      <Container maxWidth="sm">
        
        <Box sx={{maxHeight: '200vh',border: 'solid 1px', borderRadius: '10px', padding: '20px'}} >No Armário Livre, cada doação conta uma história de solidariedade. Conectamos doadores a quem mais precisa, tornando simples o ato de ajudar. Cadastre-se, liste suas doações e faça a diferença. Junte-se a nós para construir um mundo mais generoso e sustentável. Obrigado por fazer parte dessa corrente do bem!</Box>
            <Container> 
                <Box sx={{border: 'solid 1px', 
                borderRadius: '10px', padding: '20px', textAlign :'center', borderTop: 'none', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', backgroundColor: '#FF3D00', fontSize: '24px', color: 'white'}}> 
                
                <Link to={"/Doe-agora"}> Doe Agora :D </Link>
            
                </Box></Container>
      </Container>
    </React.Fragment>
  );
}