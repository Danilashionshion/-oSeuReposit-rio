import React from "react";
import MenuAppBar from "./componentes/Navbar";
import { Link } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Doeagora(){
    return(
        <>
            <MenuAppBar />
            <Container maxWidth="sm">
                    <Box sx={{ bgcolor: 'white', textAlign: "center", fontStyle: "oblique", fontSize: "40px"}} > Doação </Box>
                </Container>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm">
                    <Box sx={{ bgcolor: 'white', border: "1px solid black", borderRadius: "20px", textAlign: "center",padding: "30px"}} > 
                        <h1>Nome</h1>
                        <Input></Input>
                        <h1>Sobrenome</h1>
                        <Input></Input>
                        <h1> O que vai ser doado? </h1>
                        <Input></Input>
                        <h1>CEP</h1>
                        <Input></Input>
                        <h1>Rua</h1>
                        <Input></Input>
                        <h1>Número</h1>
                        <Input></Input>
                        <h1>Bairro</h1>
                        <Input></Input>
                        <h1>Cidade</h1>
                        <Input></Input>
                        <h1>Estado</h1>
                        <Input></Input>
                        <br></br>
                        <br></br>
                        <Button variant="outlined">Doar</Button>
                    </Box>
                </Container>
            </React.Fragment>
            
                
        </>
    )
}