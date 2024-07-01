import React from "react";
import MenuAppBar from "./componentes/Navbar";
import { Link } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function CreateAccount(){
    return(
        <>
            <MenuAppBar />
            <Container maxWidth="sm">
                    <Box sx={{ bgcolor: 'white', textAlign: "center", fontStyle: "oblique", fontSize: "40px"}} > Cadastro </Box>
                </Container>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm">
                    <Box sx={{ bgcolor: 'white', border: "1px solid black", borderRadius: "20px", textAlign: "center",padding: "30px"}} > 
                        <h1>Nome inteiro</h1>
                        <Input></Input>
                        <h1> CPF </h1>
                        <Input></Input>
                        <h1>E-mail</h1>
                        <Input></Input>
                        
                        <h1> Senha </h1>
                        <Input type="password"></Input>
                        <br></br>
                        <br></br>
                        <Button variant="outlined">Cadastre-se</Button>
                    </Box>
                </Container>
            </React.Fragment>
            
                
        </>
    )
}