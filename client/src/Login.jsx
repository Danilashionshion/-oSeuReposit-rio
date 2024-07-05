import React from "react";
import MenuAppBar from "./componentes/Navbar";
import { Link } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from "axios";
import { useForm } from "react-hook-form"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";0
import { useState } from "react";

const api = axios.create({
    baseURL: ('http://localhost:3200/')
})

export default function Login(){
    
        const [users, setUsers] = useState([]);
        const { register, handleSubmit, setValue, formState: { errors } } = useForm();
        const navigate = useNavigate ()
        useEffect (() => {
            fetchUsers();
        }, []);
    
        const fetchUsers = () => {
            api.get("/login").then((response) => {
                setUsers(response.data);
            }).catch(error => {
                console.error('Deu ruim', error)
            });
        };
    
        const onSubmit = (data) => {
            api.post("/login", data).then((response) => {
                console.log('User logged: ', response.data);
                fetchUsers();
                navigate('/')
                alert("Logado com sucesso absoluto")
            }).catch(error => {
                console.error('Error logged user:', error);
              });
        }
    return(
        <>
            <MenuAppBar />
            <Container maxWidth="sm">
                    <Box sx={{ bgcolor: 'white', textAlign: "center", fontStyle: "oblique", fontSize: "40px"}} > Log-in </Box>
                </Container>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm">
                    <Box sx={{ bgcolor: 'white', border: "1px solid black", borderRadius: "20px", textAlign: "center",padding: "30px"}} > 
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1>E-mail</h1>
                        <Input type="email"  {...register("email")}></Input>
                        
                        <h1> Senha </h1>
                        <Input type="password"  {...register("senha")}></Input>
                        <br></br>
                        <br></br>
                        <Button variant="outlined" type="submit">Log-in</Button>
                        </form>
                    </Box>
                </Container>
            </React.Fragment>
            
                
        </>
    )
}