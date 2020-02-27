import React from "react";
import { Route } from "react-router-dom";
import { BoasVindasComponent } from "./boasVindas";
import { Users } from "./users";
import { UserDetail } from "./usersDetail";


export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={BoasVindasComponent} />
    <Route path="/users" exact component={Users} />
    <Route path="/users/:paramName" exact component={UserDetail}  />
  </>
);