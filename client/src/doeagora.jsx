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


export default function Doeagora(){
    const [users, setUsers] = useState([]);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    api.get("/doe").then((response) => {
      setUsers(response.data);
    }).catch(error => {
      console.error('Error fetching users:', error);
    });
  };

  const onSubmit = (data) => {
    api.post("/doe", data)
      .then((response) => {
        console.log('Donate Sucess!:', response.data);
        fetchUsers(); // Atualiza a lista de usuários após adicionar um novo
        alert("Donate efetuado com sucesso ")
      }).catch(error => {
        console.error('Error Donate user:', error);
      });
  };

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json())
      .then(data => {
        if (data.erro) {
          console.error('CEP não encontrado');
        } else {
          setValue('rua', data.logradouro, { shouldValidate: true });
          setValue('bairro', data.bairro, { shouldValidate: true });
          setValue('cidade', data.localidade, { shouldValidate: true });
          setValue('estado', data.uf, { shouldValidate: true });

        }
      }).catch(error => {
        console.error('Error fetching CEP:', error);
      });
  };

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
                       <form onSubmit={handleSubmit(onSubmit)} >
                        <h1>Nome</h1>
                        <Input type="text" {...register("nome")}></Input>
                        <h1>Sobrenome</h1>
                        <Input type="text" {...register("sobrenome")}></Input>
                        <h1> O que vai ser doado? </h1>
                        <Input type="text" {...register("donate")}></Input>
                        <h1>CEP</h1>
                        <input type="text" {...register("cep")} className='input' placeholder='CEP' onBlur={checkCEP} />
        {errors.cep && <span className="error-message">{errors.cep.message}</span>}
                        <h1>Rua</h1>
                        <Input type="text" {...register("rua")}></Input>
                        <h1>Número</h1>
                        <Input type="text" {...register("numero")}></Input>
                        <h1>Bairro</h1>
                        <Input type="text" {...register("bairro")}></Input>
                        <h1>Cidade</h1>
                        <Input type="text" {...register("cidade")}></Input>
                        <h1>Estado</h1>
                        <Input type="text" {...register("estado")}></Input>
                        <br></br>
                        <br></br>
                        <Button variant="outlined" type="submit">Doar</Button>
                        </form>
                    </Box>
                </Container>
            </React.Fragment>
            
                
        </>
    )
}