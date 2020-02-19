import React from "react";

export const UserDetail = (props) => (
    <h1>O nome do usuario é: {props.match.params.paramName} </h1>
)