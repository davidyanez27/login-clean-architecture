import { Router } from "express";


export class Authroutes {
    public static get routes():Router{
        const router = Router();


        router.post('/login');
        router.post('/register');

        router.get('/validate-email/:token');

        return router;
    }
}