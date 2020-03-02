import React from "react";
import { Link } from "react-router-dom";


export function UsersItem(props) {

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Idade</th>
                        <th>Ação</th>
                    </tr>
                </thead>

                <tbody>
                    {props.listaUsuario.map(user => (
                        <tr>
                            <td><Link to={`/user/${user.nome}`}>{user.nome}</Link></td>
                            <td>{user.email}</td>
                            <td>{user.idade}</td>
                            <td><input type="button" value="Excluir" onClick={() => props.userDel(user.id)} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}