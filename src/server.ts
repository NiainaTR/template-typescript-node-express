import {Application, NextFunction, Request , Response} from "express";
import express from "express";
import http from "http";

class Server{
    private app:Application;   
    private server:http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
    
    constructor(){
        this.app = express();
        this.useMiddlewares(this.app);
        this.useRoutes(this.app);
        this.server = http.createServer(this.app);
    }
    
    useMiddlewares(app:Application){
        app.use(express.json());
    }   
    
    useRoutes(app:Application){
    }

    

    start(port:number){
        //Connect to database
        //connectDb();
        
        this.server.listen(port , () => {
            console.log(`Server is running on the port ${port}`);
        })
    }
}



export default Server;