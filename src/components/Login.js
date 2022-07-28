import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
import "./login.css";
import NavBarManu from './NavBarManu';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Card,
    CardImg
  } from "react-bootstrap";
 



// Ojo por cambiar
// convertir de class a function

class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: ''
        }
    }
    login() {
        console.warn(this.state)
        fetch("http://localhost:3000/login?q=" + this.state.name).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                if (resp.length > 0) {
                    localStorage.setItem('login',JSON.stringify(resp))
                    console.warn(this.props.history.push('list'))
                }
                else {
                    alert("Por favor, compruebe el nombre de usuario y la contraseña")
                }

            })
        })
    }
    render() {
        return (
            <div className="background">
      <div className="login-box">
        <div className="container">
          <div class="row app-des">
            <div class="col left-background ">
              <h2>Intelexa</h2>
              <p>Powered by A.I. Technology</p>
              <CardImg
                className="mobile-img"
                src="./crudimg.png"
                alt="crudimg"
              />
            </div>
            <div class="col login-form">
                <NavBarManu />
            <form>
                <h2 className="font-weight-bold mb-4">Login</h2>
                <FormGroup>
                <input type="text"
                    placeholder="Ingrese su nombre"
                    name="user" onChange={(event) => this.setState({ name: event.target.value })} /> <br /> <br />
                <input
                    placeholder="introducir la contraseña"
                    type="password" name="password" onChange={(event) => this.setState({ password: event.target.value })} /> <br /> <br />
                <button onClick={() => { this.login() }} >	Iniciar sesión</button>
                </FormGroup>
            </form>
            </div>
            </div>
          </div>
        </div>
      </div>

        );
    }
}

export default Login;