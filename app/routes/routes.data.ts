import { ExcludedRoutes } from "./routes.types";
import { match } from 'path-to-regexp'
import authRoutor from '../auth/auth.routes'
import userRouter from '../users/users.routes'

export const routes = [
    authRoutor,
    userRouter
]

export const excludedRoutes: ExcludedRoutes = [
    {
        path: match("/api/v1/auth/register"),
        method: 'POST'
    },
    {
        path: match("/api/v1/auth/login"),
        method: 'POST'
    }
];
