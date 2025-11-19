import express from "express";
import 'dotenv/config.js'
import studentRoutes  from "./routers/StudentRoutes.js";
import bookRoutes from "./routers/BookRoutes.js";
import userRoutes from "./routers/UserRoutes.js";
import cors from "cors";

const app = express();

let corsOptions = {
    origin : process.env.ORIGIN
}
//middleware
app.use(express.json());
app.use(cors(corsOptions));

//req on console
app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next();
})

try{
app.listen(process.env.PORT || 3000,() =>{
    console.log(`Listening to port ${process.env.PORT || 3000} ...`)
})

}catch(e){
    console.log(e);
}
app.use ('/student', studentRoutes);
app.use ('/book', bookRoutes);
app.use ('/user', userRoutes)

app.use((req,res, next) =>{
     console.log(req.path, req.method);
    next();


});