import authRoutor from '../auth/auth.routes'
import { ExcludedRoutes } from "./routes.types";
import { match } from 'path-to-regexp'


export const routes = [
    authRoutor,
]

export const excludedRoutes: ExcludedRoutes = [{
    path: match("/api/v1/auth/user/:id"),
    method: 'GET'
},
{
    path: match("/api/v1/auth/register"),
    method: 'POST'
},
{
    path: match("/api/v1/auth/login"),
    method: 'POST'
}];
