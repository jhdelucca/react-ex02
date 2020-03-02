import React, { Component } from "react";
import { UsersItem } from "./usersItem";

export class Users extends Component {
    state = {
        usuarios: [
            {
                id: 1,
                idade: 10,
                nome: "João",
                email: "jhdbarros@hotmail.com"
            },
            {
                id: 2,
                idade: 20,
                nome: "Rafael",
                email: "rafa@hotmail.com"
            },
            {
                id: 3,
                idade: 30,
                nome: "Carlos",
                email: "carlos@hotmail.com"
            }
        ]
    };

    excluir = (id) => {
        for (let i = 0; i < this.state.usuarios.length; i++) {
            if (this.state.usuarios[i].id === id) {
                this.state.usuarios.splice(i, 1);
            }
        }
        this.setState({
            userItems: this.state.usuarios
        });
    };


    render() {
        return (
            <>
                <div>
                    <UsersItem
                        listaUsuario = {this.state.usuarios}
                        userDel={this.excluir}
                    />
                </div>
            </>
        );
    }
}