import dotenv from 'dotenv'
import path from "path";
// again my application folder in container stays at /usr/src/app
dotenv.config({ path: path.resolve('.env') ,debug:true });

export const information =  {
    // host: process.env.PMA_HOST_DATABASE, // not working anymore why ??
    host: 'host.docker.internal', // fix error connect ECONNREFUSED 172.21.0.2:3307 why it can't connect by service name
    user : process.env.SQLD_USERNAME,
    password : process.env.SQLD_PASSWORD ,
    port : process.env.SQLD_EXPOSED_PORT,
    database : process.env.SQLD_DATABASE
}

