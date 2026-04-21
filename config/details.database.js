import dotenv from 'dotenv'
import path from "path";

// again my application folder in container stays at /usr/src/app
dotenv.config({ path: path.resolve('.env') ,debug:true });

export const information =  {
    // host: '127.0.0.1', // 127.0.0.1 or localhost work for local host access container !!
    host: 'host.docker.internal', // for container access container
    user : process.env.SQLD_USERNAME,
    password : process.env.SQLD_PASSWORD ,
    port : process.env.SQLD_EXPOSED_PORT,
    database : process.env.SQLD_DATABASE
}

