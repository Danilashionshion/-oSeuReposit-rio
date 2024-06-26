import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { alignProperty } from '@mui/material/styles/cssUtils';

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
        
        <Box sx={{maxHeight: '200vh',border: 'solid 1px', borderRadius: '10px', padding: '20px'}} > Ola, Este texto é apenas um exemplo de como deverá se
        r o produto final, por favor, troque pelo que você achar melhor, claro, tendo em vista que já tem algo em
         mente, nesta 
         caixa podera fazer diversos testes 
         que estejam incluidos em Containers utilizando a biblioteca Mui, então só para completar a pagina, eu falarei isso</Box>
            <Container> 
                <Box sx={{border: 'solid 1px', 
                borderRadius: '10px', padding: '20px', textAlign :'center', borderTop: 'none', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', backgroundColor: '#FF3D00', fontSize: '24px', color: 'white'}}> 
                
                <a href="client/src/Login.jsx">Doe agora :D</a>
            
                </Box></Container>
      </Container>
    </React.Fragment>
  );
}