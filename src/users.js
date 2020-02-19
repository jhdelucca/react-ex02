import React, { Component } from "react";
import { UsersItem } from "./usersItem";

export class Users extends Component {
    state = {
        usuarios: [
            {
                idade: 10,
                nome: "João",
                email: "jhdbarros@hotmail.com"
            },
            {
                idade: 20,
                nome: "Rafael",
                email: "rafa@hotmail.com"
            },
            {
                idade: 30,
                nome: "Carlos",
                email: "carlos@hotmail.com"
            }
        ]
    };

    excluir = (idade) => {
        for (let i = 0; i < this.state.usuarios.length; i++) {
            if (this.state.usuarios[i].idade === idade) {
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
                    <ul>

                        {this.state.usuarios.map(user => (
                            <li>
                                <UsersItem
                                    userDel = {this.excluir}
                                    userNome={user.nome}
                                    userEmail={user.email}
                                    userIdade={user.idade}
                                    
                                />
                            </li>
                        ))}
                    </ul>

                </div>
            </>
        );
    }
}