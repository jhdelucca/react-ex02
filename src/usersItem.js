import React from "react";
import { Link } from "react-router-dom";


export function UsersItem(props) {
    
  let paramName;
    return (
        <>
            <div>
                <b>
                    Nome: {props.userNome}
                </b>
            </div>

            <div>
                <b>
                    Email: {props.userEmail}
                </b>
            </div>

            <div>
                <b>
                    Idade: {props.userIdade}
                </b>

            </div>

            <div>
               
                <Link to = {`users/${props.userNome}`} > Detalhar nome</Link>
            </div>

            <div>
                <input type="button" value="Excluir" onClick={event => props.userDel(props.userIdade)} />
            </div>

            <hr></hr>

        </>
    );
}