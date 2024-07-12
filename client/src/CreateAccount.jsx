import React, { useState } from "react";
import MenuAppBar from "./componentes/Navbar";
import { Link, unstable_HistoryRouter } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from "axios";
import { useForm } from "react-hook-form"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const api = axios.create({
    baseURL: ('pi-gold.vercel.app')
})

export default function CreateAccount() {
    const [users, setUsers] = useState([]);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const navigate = useNavigate()
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        api.get("/").then((response) => {
            setUsers(response.data);
        }).catch(error => {
            console.error('Deu ruim', error)
        });
    };

    const onSubmit = (data) => {
        api.post("/register", data).then((response) => {
            console.log('User added: ', response.data);
            fetchUsers();
            navigate('/Login')
        }).catch(error => {
            console.error('Error adding user:', error);
          });
    }
    return (
        <>
            <MenuAppBar />
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: 'white', textAlign: "center", fontStyle: "oblique", fontSize: "40px" }} > Cadastro </Box>
            </Container>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm">
                    <Box sx={{ bgcolor: 'white', border: "1px solid black", borderRadius: "20px", textAlign: "center", padding: "30px" }} >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1>Nome inteiro</h1>
                            <Input type="text" {...register("nome")}></Input>
                            <h1> CPF </h1>
                            <Input type="text" {...register("cpf")}></Input>
                            <h1>E-mail</h1>
                            <Input {...register("email")}></Input>

                            <h1> Senha </h1>
                            <Input type="password"  {...register("senha")}></Input>
                            <br></br>
                            <br></br>
                            <Button variant="outlined" type="submit">Cadastro</Button>
                        </form>
                    </Box>
                </Container>
            </React.Fragment>


        </>
    )
}
