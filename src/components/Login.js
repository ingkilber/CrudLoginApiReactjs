import React, { Component } from "react";
import "./login.css";
import Imagen from "./crudimg.png";
import NavBarManu from "./NavBarManu";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardImg,
} from "reactstrap";
// import { GoogleLoginButton } from "react-social-login-buttons";
// Ojo por cambiar
// convertir de class a function

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
    };
  }
  login() {
    console.warn(this.state);
    fetch("http://localhost:3000/login?q=" + this.state.name).then((data) => {
      data.json().then((resp) => {
        console.warn("resp", resp);
        if (resp.length > 0) {
          localStorage.setItem("login", JSON.stringify(resp));
          console.warn(this.props.history.push("list"));
        } else {
          alert("Por favor, compruebe el nombre de usuario y la contraseña");
        }
      });
    });
  }
  render() {
    return (
      <div className="background">
        {/* <NavBarManu /> */}
        <div className="login-box">
          <div className="container">
            <div class="row app-des">
              <div class="col left-background ">
                
                <h2>Bienvenidos</h2>
                <p>Ejercicio de Crud</p>
                <p>User: kilber</p>
                <p>Pass: kilber123</p>
                
                <CardImg
                  className="mobile-img"
                  src={Imagen}
                  // alt="crudimg"
                />
              </div>
              
              <div class="col login-form">
                <Form>
                  <h2 className="font-weight-bold mb-4">Accede para ver el CRUD</h2>
                  <br /> 

                  <FormGroup>
                    <Label className="font-weight-bold mb-2">Usuario</Label>
                    <Input
                      type="text"
                      placeholder="Ingrese su usuario"
                      name="user"
                      onChange={(event) =>
                        this.setState({ name: event.target.value })
                      }
                    />
                    <br /> 

                    <Label className="font-weight-bold mb-2">Contraseña</Label>
                    <Input
                      placeholder="introducir la contraseña"
                      type="password"
                      name="password"
                      onChange={(event) =>
                        this.setState({ password: event.target.value })
                      }
                    />
                    <br /> <br />

                    <Button
                      onClick={() => {
                        this.login();
                      }}
                    >
                     Acceder
                    </Button>
                  </FormGroup>

                  {/* <Button className="mt-3  btn">Ingrese a su cuenta</Button>
                <div className="text-center m-4">or continue with social account</div>
              <GoogleLoginButton className="mt-3 mb-3 px-auto text-center"/> */}
                  
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
