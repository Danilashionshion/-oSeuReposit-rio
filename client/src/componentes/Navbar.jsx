import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Container, height } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function MenuAppBar() {
  const Navigate = useNavigate()
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

 

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const verifyToken = () => {
    const veri = localStorage.getItem('Authorization');
    if(!veri){
      alert("Nao Está logado!")
    }else{
      alert("Deslogado Com Sucesso!")
    }
  }
  const verifyTokenLogin = (user,logged) => {
    const veri = localStorage.getItem('Authorization');
    if(veri){
      alert("JÁ ESTÁ LOGADO!")
        Navigate('/')
    }
    else{
      Navigate('/Login')
    }
  }
  const logout = () => {
    verifyToken();
    localStorage.clear();
    handleClose();
    window.location.reload(true)
  }
  const login = () => {
    verifyTokenLogin();
    handleClose();
    
  }
 
  return (
    <Box>
      <AppBar position="static" sx={{marginBottom: '50px', backgroundColor: '#FF3D00'}}>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Container>
            <Link to={"/"}>
            <img src='./src/imagens/logocomespaco.png' width={'200px'}></img>
            </Link>
            </Container>
          </Typography>
            { localStorage.getItem('Authorization') ? <Button onClick={logout}  sx={{border: '1px solid black', marginRight: '3px', backgroundColor: 'white' , color: 'black'}}> Logout </Button> :<div> <Button onClick={login}  
            sx={{border: '1px solid black',  marginRight: '3px', backgroundColor: 'white' , color: 'black'}}
            >Login</Button>  
            <Button onClick={handleClose} sx={{border: '1px solid black',  marginRight: '3px', backgroundColor: 'white' , color: 'black'}}><Link to={"/Account-Create"}>Create an Account</Link></Button> </div>}
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Stack direction="row" spacing={2}>
                  
                    <Avatar alt="" src="/static/images/avatar/1.jpg" />
                </Stack>
              </IconButton>
            </div>
          )}
        </Toolbar>
        
      </AppBar>
    </Box>
  );
}

