import { Router } from "express";
import { Authroutes } from "./auth/routes";

export class AppRoutes {
    public static get routes():Router{
        const router = Router();
        router.use('/api/auth', Authroutes.routes)


        return router;
    }
}